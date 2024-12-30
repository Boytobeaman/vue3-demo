<script setup>
import { ref } from "vue";
const items = ref([{ message: 'Foo', id: "foo" }, { message: 'Bar', id: "bar" }])

</script>  


<template>  
    <div> 
        <section class="bg-slate-500 p-5">
            <h2>List rendering loop</h2>
            <ul>
                <li v-for="item in items" :key="item.id">
                    {{ item.message }}
                </li>
            </ul>
        </section>
        <h1>Syntax</h1> 
        <p>Welcome to the Syntax page!</p>  
    </div>  
</template>  

