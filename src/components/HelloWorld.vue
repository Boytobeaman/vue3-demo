<script setup>
import { ref, onMounted, reactive } from 'vue'
const count = ref(0)
const state = reactive({ count: 0 })
defineProps({
  msg: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  rawHtml: {
    type: String,
    required: true,
  },
  dynamicId: {
    type: String,
    required: true,
  }
})


const isButtonDisabled = ref(-0)
const seen = ref(false)
onMounted(() => {
  console.log(`the component is now mounted.`)
})
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h2>{{ name }}</h2>
    <button @click="count++">Count is: {{ count }}</button>
    <p>Using text interpolation: {{ rawHtml }}</p>
    <p>Using text interpolation: <span v-html="rawHtml"></span></p>

    <div :id="dynamicId">dynamicid</div>

    <button :disabled="isButtonDisabled">Button</button>
    <p v-if="seen">Now you see me</p>

    <button @click="state.count++">
      state: {{ state.count }}
    </button>
    <h3>
      You’ve successfully created a project with
      <a href="https://vite.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>.
    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
