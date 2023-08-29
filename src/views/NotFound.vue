<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
//import { RouterLink } from 'vue-router'
import uiButton from '@/components/ui/Button.vue'
</script>

<template>
  <section class="not-found">
    <h2>404 Error</h2>
    <div>
      Oops! The page you are looking for does not exist. It might have been moved or deleted
    </div>
    <ui-button type="link" to="/about" :mobileFullWidth="true"> Back to home page </ui-button>
  </section>
</template>

<style lang="scss" scoped>
.not-found div {
  padding-bottom: 4rem;
  @media screen and (max-width: 1023px) {
    padding-bottom: 2.5rem;
  }
}
</style>
