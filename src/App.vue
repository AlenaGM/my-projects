<template>
  <Header />
  <main class="main">
    <SocialWidget />
    <About />
    <Skills />
    <Work />
    <Contact />
  </main>
  <Footer />
</template>

<script setup>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import About from '@/components/About.vue'
import Skills from '@/components/Skills.vue'
import Work from '@/components/Work.vue'
import Contact from '@/components/Contact.vue'
import SocialWidget from '@/components/ui/SocialWidget.vue'

import { onMounted } from 'vue'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

onMounted(() => {})
</script>
