<script setup>  
import { ref } from "vue";
import axios from 'axios';
import { fetchEventSource, EventStreamContentType } from '@microsoft/fetch-event-source';
const message = ref("")
const systemMessage = ref("You are an AI assistant that helps people find information.")
const respData = ref("")

const prettyObject = (msg) => {
  const obj = msg;
  if (typeof msg !== "string") {
    msg = JSON.stringify(msg, null, "  ");
  }
  if (msg === "{}") {
    return obj.toString();
  }
  if (msg.startsWith("```json")) {
    return msg;
  }
  return ["```json", msg, "```"].join("\n");
}


function* chunks(s, maxBytes = 1000 * 1000) {
  const decoder = new TextDecoder("utf-8");
  let buf = new TextEncoder().encode(s);
  while (buf.length) {
    let i = buf.lastIndexOf(32, maxBytes + 1);
    // If no space found, try forward search
    if (i < 0) i = buf.indexOf(32, maxBytes);
    // If there's no space at all, take all
    if (i < 0) i = buf.length;
    // This is a safe cut-off point; never half-way a multi-byte
    yield decoder.decode(buf.slice(0, i));
    buf = buf.slice(i + 1); // Skip space (if any)
  }
}



const send = async() => {
    try {
        const payload = {
            "messages": [
                {
                    "role": "system",
                    "content": systemMessage.value ? systemMessage.value :"You are ChatGPT, a large language model trained by OpenAI."
                },
                {
                    "role": "user",
                    "content": message.value
                }
            ],
            "stream": true,
            "model": "gpt-3.5-turbo",
            "temperature": 0.5,
            "presence_penalty": 0,
            "frequency_penalty": 0,
            "top_p": 1
        }

        respData.value=""

        let responseText = ''
        let remainText = ''

        let str = JSON.stringify(payload)
        console.log(str)
        // let finished = false;

        const finish = () => {
        //   if (!finished) {
            // finished = true;
            respData.value = responseText + remainText
            // options.onFinish();
        //   }
        };
 
        fetchEventSource(`https://chat.chatgpt-use.com/api/openai/v1/chat/completions`, {
            method: "POST",
            body: str,
            headers:{
                "Content-type":"application/json",
                "Accept": "application/json"
            },
            onmessage(msg) {
                if (msg.data === "[DONE]") {
                    return finish();
                }
                const text = msg.data;
                try {
                    const json = JSON.parse(text);
                    const choices = json.choices;
                    const delta = choices[0]?.delta?.content;
                    const textmoderation = json?.prompt_filter_results;

                    if (delta) {
                        remainText += delta;
                        return finish()
                    }
                    
                } catch (e) {
                    console.error("[Request] parse error", text, msg);
            }
            },
            async onopen(res) {
                const contentType = res.headers.get("content-type");
                console.log(
                "[OpenAI] request response content type: ",
                contentType,
                );

                if (contentType?.startsWith("text/plain")) {
                    responseText = await res.clone().text();
                    return finish();
                }

                if (
              !res.ok ||
              !res.headers
                .get("content-type")
                ?.startsWith(EventStreamContentType) ||
                res.status !== 200
                ) {
                    const responseTexts = [responseText];
                    let extraInfo = await res.clone().text();
                    try {
                        const resJson = await res.clone().json();
                        extraInfo = prettyObject(resJson);
                    } catch {}

                    
                    if (extraInfo) {
                        responseTexts.push(extraInfo);
                    }

                    responseText = responseTexts.join("\n\n");

                    return finish();
                }
            },
            onerror(e) {
                throw e;
            },
            onclose() {
                finish();
            },
         
        });
    } catch (error) {
        console.error('Error fetching user details:', error);
    }
}

</script>  


<template>  
<div>  
    <h1 class="text-2xl font-bold my-5">Welcome to the Chat page!</h1> 
    <p>System message:</p>
    <textarea v-model="systemMessage" placeholder="ask your question" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
    <p>Your question</p>
    <textarea v-model="message" placeholder="ask your question" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
    <div>
        <button id="count" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" @click="send">Send</button>
    </div>
    <div class="h-80 overflow-y-scroll mt-5">
        <p>{{ respData }}</p>
    </div>
    
</div>  
</template>  

