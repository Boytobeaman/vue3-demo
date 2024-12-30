<script setup>
import { ref } from "vue";
const items = ref([{ message: 'Foo', id: "foo" }, { message: 'Bar', id: "bar" }])
const awesome = ref(false)
const toshow = ref(false)


const sets = ref([
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10]
])

function even(numbers) {
  return numbers.filter((number) => number % 2 === 0)
}
const name = ref('Vue.js')
function greet(event) {
  alert(`Hello ${name.value}!`)
  // `event` is the native DOM event
  if (event) {
    alert(event.target.tagName)
  }
}

function warn(text, e){
    console.log(text)
    console.log(e)
}

</script>  


<template>  
    <div> 
        <section class="bg-slate-500 p-5">
            <h2 class="text-2xl font-bold">List rendering loop</h2>
            <ul>
                <li v-for="item in items" :key="item.id">
                    {{ item.message }}
                </li>
            </ul>
        </section>
        <section class="bg-slate-200 p-5">
            <h2 class="text-2xl font-bold">List rendering two for loop</h2>
            <ul v-for="numbers in sets">
                <li v-for="n in even(numbers)">
                    {{ n }}
                </li>
            </ul>
        </section>
        <section class="bg-slate-300 p-5">
            <h2 class="text-2xl font-bold">v-if v-else</h2>
            <h4 v-if="awesome">Vue is awesome!</h4>
            <h4 v-else>Oh no 😢</h4>
            <button  
                @click="awesome = !awesome"
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded"  
            >  
                Toggle 
            </button> 
        </section>
        <section class="bg-slate-200 p-5">
            <h2 class="text-2xl font-bold">v-show</h2>
            <h4 v-show="toshow">content for v-show!</h4>
            <button  
                @click="toshow = !toshow"
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded"  
            >  
                Toggle 
            </button> 
        </section>
        <section class="bg-slate-300 p-5">
            <h2 class="text-2xl font-bold">event handling</h2>

            <button @click="greet" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded">Greet</button>

            <p>Accessing Event Argument in Inline Handlers</p>
            <button @click="warn('Form cannot be submitted yet.', $event)">
                Submit
            </button>
            <!-- using inline arrow function -->
            <button @click="(event) => warn('Form cannot be submitted yet.', event)">
                Submit
            </button>
        </section>
    </div>  
</template>  

