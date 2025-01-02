<script setup>
import { onMounted, onUnmounted, ref, onBeforeUpdate, onUpdated, computed } from "vue";

const count = ref(0)
const message = ref("")
onMounted(() => {
  console.log(`the component is now mounted.`)
})

onUnmounted(() => {
  console.log(`the component is now Unmounted.`)
})


onBeforeUpdate(() => {
  console.log(`the component is now BeforeUpdate.`)
  // This hook can be used to access the DOM state before Vue updates the DOM. It is also safe to modify component state inside this hook.
})

onUpdated(() => {
  // text content should be the same as current `count.value`

  console.log(`the component is now Updated.`)
  console.log(document.getElementById('count').textContent)
})


const count2= computed(()=>{
    console.log(`computed triggered`)
    return count.value*3
})
</script>  


<template>  
    <div> 
        <section class="bg-slate-500 p-5">
            <h2 class="text-2xl font-bold">List rendering loop</h2>
            <button id="count" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" @click="count++">{{ count }}</button>
            <p>{{ count2 }}</p>
        </section>
        <section>
            <p>Message is: {{ message }}</p>
            <input v-model="message" placeholder="edit me" />
        </section>
        
        
    </div>  
</template>  

