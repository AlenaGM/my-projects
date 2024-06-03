<template>
  <ui-progressbar />
  <Hero />
  <About />
  <Skills />
  <Projects />
  <Contact />
  <ui-totop />
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import About from '@/components/About.vue'
import Contact from '@/components/Contact.vue'
import Hero from '@/components/Hero.vue'
import Projects from '@/components/Projects.vue'
import Skills from '@/components/Skills.vue'
import uiProgressbar from '@/components/ui/ProgressBar.vue'
import uiTotop from '@/components/ui/ToTop.vue'

gsap.registerPlugin(ScrollTrigger)

let titlesAnimCtx: any

onMounted(() => {
  titlesAnimCtx = gsap.context(() => {
    const titles = gsap.utils.toArray('h2 span:first-child')

    titles.forEach((title: any) => {
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
})

onUnmounted(() => {
  titlesAnimCtx.revert()
})
</script>
