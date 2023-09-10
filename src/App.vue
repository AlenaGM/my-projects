<script setup>
import Header from '@/components/layout/Header.vue'
import Footer from '@/components/layout/Footer.vue'
import Hero from '@/components/Hero.vue'
import About from '@/components/About.vue'
import Skills from '@/components/Skills.vue'
import Work from '@/components/Work.vue'
import Contact from '@/components/Contact.vue'
import SocialWidget from '@/components/ui/SocialWidget.vue'
</script>

<template>
  <Header />
  <main class="main">
    <SocialWidget />
    <Hero />
    <About />
    <Skills />
    <Work />
    <Contact />
  </main>
  <Footer />
</template>
