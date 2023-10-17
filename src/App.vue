<template>
  <Header />
  <main class="main">
    <div class="progressbar"></div>
    <SocialWidget />
    <About />
    <Skills />
    <Work />
    <Contact />
  </main>
  <Footer />
</template>

<script setup>
import { onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import About from '@/components/About.vue'
import Skills from '@/components/Skills.vue'
import Work from '@/components/Work.vue'
import Contact from '@/components/Contact.vue'
import SocialWidget from '@/components/ui/SocialWidget.vue'

gsap.registerPlugin(ScrollTrigger)
let mediaAnimation = gsap.matchMedia()

onMounted(() => {
  mediaAnimation.add('(max-width: 1024px)', () => {
    gsap.set('.progressbar', { width: 0 })
    gsap.to('.progressbar', {
      width: '100%',
      scrollTrigger: {
        trigger: 'body',
        start: 'top top',
        end: 'bottom bottom',
        scrub: true
      }
    })
  })

  const titles = document.querySelectorAll('h2 span:first-child')
  titles.forEach((title) => {
    gsap.set(title, { yPercent: 75 })

    gsap.to(title, {
      scrollTrigger: {
        trigger: title,
        start: 'top bottom',
        end: 'top 50%',
        scrub: 1
      },
      yPercent: 0
    })
  })
})
</script>
