<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import NavBar from './NavBar.vue'
import Hero from './Hero.vue'
</script>

<template>
  <header class="header" id="#header">
    <NavBar />
    <Hero />
  </header>
</template>

<style lang="scss" scoped>
.header {
  grid-template-rows: minmax(80px, auto) 1fr;
}
</style>
