<script setup lang="ts">
import About from '@/components/About.vue'
import Contact from '@/components/Contact.vue'
import Hero from '@/components/Hero.vue'
import Projects from '@/components/Projects.vue'
import Skills from '@/components/Skills.vue'
import uiProgressbar from '@/components/ui/ProgressBar.vue'
import uiTotop from '@/components/ui/ToTop.vue'
</script>

<template>
  <ui-progressbar />
  <Hero />
  <About />
  <Skills />
  <Projects />
  <Contact />
  <ui-totop />
</template>
