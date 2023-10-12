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
  //Work section background color change
  const tlWorkBg = gsap.timeline({
    scrollTrigger: {
      trigger: '.work',
      start: 'top center',
      end: 'bottom center',
      duration: 0.7,
      toggleActions: 'play reverse play reverse',
      markers: true
    }
  })

  tlWorkBg
    .to('body', {
      backgroundColor: 'var(--color-dark-gray)'
    })
    .to(
      '.work p',
      {
        color: 'var(--color-white)'
      },
      '<'
    )
    .to(
      '.contact__info p',
      {
        color: 'var(--color-white)'
      },
      '<'
    )
    .to(
      '.skills__list_item div',
      {
        color: 'var(--color-white)'
      },
      '<'
    )
    .to(
      '.work__link a',
      {
        backgroundColor: 'var(--color-primary)',
        border: '1.75px solid var(--color-primary)'
      },
      '<'
    )
    .to(
      '.work__link a::after',
      {
        borderColor: 'inherit'
      },
      '<'
    )
})
</script>
