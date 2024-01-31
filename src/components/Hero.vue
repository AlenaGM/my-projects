<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const tlHero = gsap.timeline({})
let mediaAnimation = gsap.matchMedia()

onMounted(() => {
  mediaAnimation.add('(min-width: 1025px)', () => {
    tlHero
      .to('.hero__title span:first-child', {
        duration: 1.3,
        x: 0,
        ease: 'back.out(1.1)'
      })
      .to(
        '.hero__title span:last-child',
        {
          duration: 1.3,
          x: 0,
          ease: 'back.out(1.1)'
        },
        '<'
      )
      .to('.hero__image', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'back.out(2)'
      })
      .from(
        '.social a',
        {
          stagger: 0.3,
          autoAlpha: 0,
          xPercent: 100
        },
        '+=0.3'
      )
  })

  mediaAnimation.add('(max-width: 1024px)', () => {
    tlHero
      .to('.hero__title span:first-child', {
        duration: 1.3,
        x: 0,
        ease: 'back.out(1.1)'
      })
      .to(
        '.hero__title span:last-child',
        {
          duration: 1.3,
          x: 0,
          ease: 'back.out(1.1)'
        },
        '<'
      )
      .to('.hero__image', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'back.out(2)'
      })
      .from(
        '.social a',
        {
          stagger: 0.3,
          autoAlpha: 0,
          xPercent: 100
        },
        '+=0.3'
      )
  })
})

onUnmounted(() => {
  tlHero.revert()
})
</script>

<template>
  <div class="header__hero hero">
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
  </div>
</template>

<style lang="scss" scoped>
.hero {
  grid-column: 2;
  display: grid;
  grid-template-columns: 1fr minmax(auto, 640px);
  align-content: center;
  align-items: end;
  @media screen and (max-width: 1113px) {
    align-items: center;
  }
  @media screen and (max-width: 768px), (orientation: portrait) {
    grid-template-columns: 1fr;
    justify-items: center;
  }
  &__title {
    margin: 110px 0;
    @media screen and (max-width: 768), (orientation: portrait) {
      margin: 0;
      text-align: center;
    }
    span {
      &:first-child {
        display: inline-block;
        transform: translateX(200%);
        overflow: hidden;
      }
      &:last-child {
        display: block;
        transform: translateX(-200%);
        text-overflow: initial;
      }
    }
  }
  &__image {
    overflow: hidden;
    opacity: 0;
    transform: translateY(50%);
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
