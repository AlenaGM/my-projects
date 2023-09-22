<script setup>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import About from '@/components/About.vue'
import Skills from '@/components/Skills.vue'
import Work from '@/components/Work.vue'
import SocialWidget from '@/components/ui/SocialWidget.vue'
</script>

<template>
  <Header />
  <main class="main">
    <SocialWidget />
    <About />
    <Skills />
    <Work />
  </main>
  <Footer />
</template>
