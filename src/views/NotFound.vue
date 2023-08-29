<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <section class="not-found">
    <h2>This page doesn't exist</h2>
    <RouterLink to="/">Back to home page</RouterLink>
  </section>
</template>

<style lang="scss" scoped></style>
