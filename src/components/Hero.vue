<template>
  <section class="hero" id="hero">
    <h1 class="hero__title">
      <span>Hi! I'm Alëna Guillaume,</span>
      <span>Frontend Developer</span>
    </h1>
    <div class="hero__image">
      <picture>
        <source
          srcset="@/assets/img/illustration.webp, @/assets/img/illustration@2x.webp 2x"
          type="image/webp"
        />
        <img
          src="@/assets/img/illustration.png"
          srcset="@/assets/img/illustration.png, @/assets/img/illustration@2x.png 2x"
          alt="girl web-developer"
        />
      </picture>
    </div>
    <SocialWidget />
  </section>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import SocialWidget from './ui/SocialWidget.vue'

gsap.registerPlugin(ScrollTrigger)

let heroAnimCtx

onMounted(() => {
  heroAnimCtx = gsap.context(() => {
    gsap.set('.hero__title span:first-child', { xPercent: 200 })
    gsap.set('.hero__title span:last-child', { xPercent: -150 })
    gsap.set('.social__link', { x: 142, autoAlpha: 0, opacity: 0 })

    const tlHero = gsap.timeline({})

    tlHero
      .to('.hero__title span:first-child', {
        duration: 1.3,
        xPercent: 0,
        ease: 'back.out(1.1)'
      })
      .to(
        '.hero__title span:last-child',
        {
          duration: 1.3,
          xPercent: 0,
          ease: 'back.out(1.1)'
        },
        '<'
      )
      .from('.hero__image', {
        autoAlpha: 0,
        opacity: 0,
        yPercent: 50,
        duration: 1,
        ease: 'back.out(1.5)'
      })
      .to(
        '.social__link',
        {
          stagger: 0.3,
          x: 100,
          autoAlpha: 1,
          opacity: 1,
          duration: 0.7,
          ease: 'back.in(3)'
        },
        '-=0.3'
      )
  })
})

onUnmounted(() => {
  heroAnimCtx.revert()
})
</script>

<style lang="scss" scoped>
.hero {
  display: grid;
  grid-template-columns: 1fr minmax(auto, 640px);
  align-content: center;
  align-items: end;
  min-height: calc(100vh - 96px);
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    justify-items: center;
    min-height: calc(100vh - 80px);
  }
  &__title {
    margin: 110px 0;
    z-index: 50;
    @media screen and (max-width: 768px) {
      margin: 0px;
      text-align: center;
    }
    span {
      &:first-child {
        display: inline-block;
        overflow: hidden;
      }
      &:last-child {
        display: block;
        text-overflow: initial;
      }
    }
  }
  &__image {
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
