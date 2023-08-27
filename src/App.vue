<script setup lang="ts">
import { RouterView } from 'vue-router';
</script>

<template>
  <router-view></router-view>
</template>

<style>
#app {
  font-family: Arial, Avenir, Helvetica, sans-serif;
  font-size: large;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

ul {
    text-align: start;
    list-style-type: circle;
}

h1 {
  margin-bottom: 2rem;
  font-size: x-large !important;
  font-weight: bold !important;
}
</style>