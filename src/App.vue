<script setup>


</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />
  </header>

    <p>
      <strong>Current route path:</strong> {{ $route.fullPath }}
    </p>
    <div class="nav">
      <RouterLink to="/">Go to Home</RouterLink>
      <RouterLink to="/about">Go to About</RouterLink>
      <RouterLink to="/contact">Go to Contact</RouterLink>
      <RouterLink to="/syntax">Go to Syntax</RouterLink>
      <RouterLink to="/form-input">Go to Form input</RouterLink>
    </div>
    
  <main>
    <RouterView />
  </main>
</template>

<style scoped>
.nav{
  display: flex;
  flex-direction: column;
}

@media (min-width: 1024px) {
  
}
</style>
