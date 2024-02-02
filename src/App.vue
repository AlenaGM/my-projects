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
import { onMounted, onUnmounted } from 'vue'
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

let ctx
let mediaAnimation = gsap.matchMedia()

onMounted(() => {
  ctx = gsap.context(() => {
    const titles = gsap.utils.toArray('h2 span:first-child')

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

    mediaAnimation.add('(min-width: 1025px)', () => {
      gsap.from('.footer__to-top', {
        scrollTrigger: {
          trigger: '.about',
          start: 'bottom bottom',
          toggleActions: 'play none none reverse'
        },
        autoAlpha: 0,
        opacity: 0,
        y: '160px',
        duration: 0.8,
        ease: 'back.out(2)'
      })
    })

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

      gsap.from('.footer__to-top', {
        scrollTrigger: {
          trigger: '.about',
          start: 'bottom bottom',
          toggleActions: 'play none none reverse'
        },
        autoAlpha: 0,
        opacity: 0,
        y: '80px',
        duration: 0.4,
        ease: 'power1.in'
      })
    })
  })
})

onUnmounted(() => {
  ctx.revert()
})
</script>
