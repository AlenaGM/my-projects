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

onMounted(() => {
  //H2 titles animation
  const titles = document.querySelectorAll('h2')
  const subtitles = document.querySelectorAll('h2 span')

  titles.forEach((item) => {
    gsap.from(item, {
      duration: 1,
      autoAlpha: 0,
      yPercent: 50,
      scrollTrigger: {
        trigger: item,
        start: 'top 80%',
        end: 'top 20%',
        toggleActions: 'play none none reverse'
      }
    })
  })

  subtitles.forEach((item) => {
    gsap.from(
      item,
      {
        duration: 0.7,
        autoAlpha: 0,
        yPercent: 50,
        scrollTrigger: {
          trigger: item,
          start: 'top 80%',
          end: 'top 20%',
          toggleActions: 'play none none reverse'
        }
      },
      '-=0.7'
    )
  })

  //About img animation
  gsap.set('.about__image img', {
    scale: 1.1,
    yPercent: 5
  })

  gsap.to('.about__image img', {
    yPercent: -5,
    autoAlpha: 1,
    scrollTrigger: {
      trigger: '.about h2 span',
      start: 'top 80%',
      end: 'bottom 20%',
      scrub: 1
    }
  })
})
</script>
