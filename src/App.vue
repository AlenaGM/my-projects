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

<script setup>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import About from '@/components/About.vue'
import Skills from '@/components/Skills.vue'
import Work from '@/components/Work.vue'
import SocialWidget from '@/components/ui/SocialWidget.vue'

import { onMounted } from 'vue'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  //Work section: background color change
  gsap.set('.work', {
    background: 'var(--color-white)'
  })

  gsap.set('.work h2', {
    color: 'var(--color-secondary)'
  })

  const tlBg = gsap.timeline({
    scrollTrigger: {
      trigger: '.work',
      start: 'top 50%',
      end: 'bottom 50%',
      duration: 0.2,
      toggleActions: 'play reverse play reverse'
    }
  })

  tlBg
    .to(
      'body',
      {
        background: 'var(--color-gray)'
      },
      '<'
    )
    .to(
      '.work h2',
      {
        color: 'var(--color-primary)'
      },
      '<'
    )
    .to(
      '.work',
      {
        backgroundColor: 'transparent'
      },
      '<'
    )
    .to(
      '.work p',
      {
        color: 'var(--color-white)'
      },
      '<'
    )
    .to(
      '.contact h2',
      {
        color: 'var(--color-primary)'
      },
      '<'
    )
})
</script>
