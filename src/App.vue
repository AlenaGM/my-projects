<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from '@/components/layout/Header.vue'
import Footer from '@/components/layout/Footer.vue'
import ProgressBar from '@/components/ui/ProgressBar.vue'
</script>

<template>
  <Header />
  <main class="main">
    <ProgressBar />
    <RouterView />
  </main>
  <Footer />
</template>

<style scoped></style>
