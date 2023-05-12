<script setup>
import { RouterLink, RouterView } from 'vue-router'
import addTask from './components/addTask.vue';
import Nav from './components/Nav.vue'

</script>

<template>
  <header>
      <Nav/>
  </header>
  <main>
    <addTask />
      <RouterView /> 
  </main>
  
 
</template>

<style scoped>

</style>
