<template>
  <div class="progressbar" />
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

let progressAnimCtx
let mediaAnimation = gsap.matchMedia()

onMounted(() => {
  progressAnimCtx = gsap.context(() => {
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
  })
})

onUnmounted(() => {
  progressAnimCtx.revert()
})
</script>

<style lang="scss" scoped>
.progressbar {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  height: 5px;
  width: 100%;
  background-color: var(--color-primary);
  z-index: 60;
  @media screen and (max-width: 1024px) {
    display: block;
  }
}
</style>
