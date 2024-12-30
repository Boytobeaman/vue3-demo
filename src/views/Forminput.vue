<script setup>
import { ref } from "vue";
const message = ref("")
const multiMessage = ref("")
const checked = ref(true)
const checkedNames = ref([])
const picked = ref("")
const selected = ref("")
const multiSelected = ref([])


const dynamicSelected = ref('A')

const dynamicOptions = ref([
  { text: 'One', value: 'A' },
  { text: 'Two', value: 'B' },
  { text: 'Three', value: 'C' }
])


</script>  


<template>  
    <div> 
        <section class="bg-slate-300 p-5">
            <h2 class="text-2xl font-bold">Input binding</h2>

            <p>Message is: {{ message }}</p>
            <input v-model="message" placeholder="edit me" />
        </section>
        <section class="bg-slate-400 p-5">
            <h2 class="text-2xl font-bold">Multiline text</h2>

            <p>Message is: {{ multiMessage }}</p>
            <textarea v-model="multiMessage" placeholder="add multiple lines"></textarea>
        </section>
        <section class="bg-slate-500 p-5">
            <h2 class="text-2xl font-bold">Checkbox</h2>

            <input type="checkbox" id="checkbox" v-model="checked" />
            <label for="checkbox">{{ checked }}</label>
        </section>
        <section class="bg-slate-300 p-5">
            <h2 class="text-2xl font-bold">multiple checkboxes</h2>

            <div>Checked names: {{ checkedNames }}</div>
            <div>
                <input type="checkbox" id="jack" value="Jack" v-model="checkedNames" />
                <label for="jack">Jack</label>

                <input type="checkbox" id="john" value="John" v-model="checkedNames" />
                <label for="john">John</label>

                <input type="checkbox" id="mike" value="Mike" v-model="checkedNames" />
                <label for="mike">Mike</label>
            </div>
            
        </section>

        <section class="bg-slate-400 p-5">
            <h2 class="text-2xl font-bold">Radio</h2>
            <div>Picked: {{ picked }}</div>
            <div>
                <input type="radio" id="one" value="One" v-model="picked" />
                <label for="one">One</label>

                <input type="radio" id="two" value="Two" v-model="picked" />
                <label for="two">Two</label>
            </div>
        </section>
        <section class="bg-slate-200 p-5">
            <h2 class="text-2xl font-bold">Select</h2>
            <div>Selected: {{ selected }}</div>
            <div>
                <select v-model="selected">
                <option disabled value="">Please select one</option>
                <option>A</option>
                <option>B</option>
                <option>C</option>
                </select>
            </div>
        </section>
        <section class="bg-slate-300 p-5">
            <h2 class="text-2xl font-bold">Multiple select</h2>
            <div>Multi Selected(press ctrl and select): {{ multiSelected }}</div>
            <div>
                <select v-model="multiSelected" multiple>
                    <option disabled value="">Please select</option>
                    <option>A</option>
                    <option>B</option>
                    <option>C</option>
                </select>
            </div>
        </section>

        <section class="bg-slate-400 p-5">
            <h2 class="text-2xl font-bold">Dynamic render select</h2>
            <div> Dynamic Selected: {{ dynamicSelected }}</div>
            <div>
                <select v-model="dynamicSelected">
                    <option v-for="dynamicOption in dynamicOptions" :value="dynamicOption.value">
                        {{ dynamicOption.text }}
                    </option>

                </select>
            </div>
        </section>
        
        
    </div>  
</template>  

