<template>
  <section class="about" id="about">
    <h2><span class="h2-subtitle">Who I Am</span><span>About me</span></h2>
    <div class="about__container">
      <div class="about__image">
        <picture>
          <source
            srcset="@/assets/img/alena-dev.webp, @/assets/img/alena-dev@2x.webp 2x"
            type="image/webp"
          />
          <img
            src="@/assets/img/alena-dev.png"
            srcset="@/assets/img/alena-dev.png, @/assets/img/alena-dev@2x.png 2x"
            alt="me coding"
          />
        </picture>
      </div>
      <div>
        <p>Hi,</p>
        <p>My name is Alena and I'm a frontend developer.</p>
        <p>
          Two years ago, I learned frontend development at
          <a
            href="https://itgirlschool.com/"
            aria-label="g=it girl school website"
            target="_blank"
            rel="noreferrer noopener"
          >
            ITGirlSchool</a
          >, and I've been living my best life ever since!
        </p>
        <p>
          I'm happiest when I'm learning new things and technologies, and I truly enjoy building
          accessible, visually appealing, and human-centered websites.
        </p>
        <p>
          Right now, I'm part of a fantastic, small startup where we're building a virtual
          <a
            href="https://test.tribual.ru"
            aria-label="tribe website"
            target="_blank"
            rel="noreferrer noopener"
            >space</a
          >
          for people to connect and create amazing experiences and events together. It's incredibly
          rewarding to see our project come to life, and I love the energy and creativity of the
          team.
        </p>
        <p>
          When I'm not coding, I enjoy hiking in the mountains (I'm lucky to live in Haute-Savoie,
          in the French Alps), getting lost in a good book, or spending time with my family.
        </p>
        <p>It's great to meet you!</p>
        <!--
        <ui-button
          type="link"
          to="#"
          mobileFullWidth
          role="link"
          aria-label="download my cv"
          rel="noreferrer noopener"
          >Download My CV</ui-button
        >-->
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import uiButton from '@/components/ui/Button.vue'

gsap.registerPlugin(ScrollTrigger)

let aboutAnimCtx

onMounted(() => {
  aboutAnimCtx = gsap.context(() => {
    gsap.set('.about__image img', {
      scale: 1.1,
      yPercent: 5
    })

    gsap.to('.about__image img', {
      yPercent: -5,
      scrollTrigger: {
        trigger: '.about__image',
        start: 'top 80%',
        end: 'bottom 20%',
        scrub: 1
      }
    })
  })
})

onUnmounted(() => {
  aboutAnimCtx.revert()
})
</script>

<style lang="scss" scoped>
.about {
  &__container {
    display: grid;
    grid-template-columns: minmax(auto, 360px) 1fr;
    gap: 4rem;
    justify-items: center;
    @media screen and (max-width: 1024px) and (orientation: portrait),
      screen and (max-width: 768px) {
      grid-template-columns: 1fr;
      gap: 2.5rem;
    }
  }
  &__image {
    max-height: 480px;
    aspect-ratio: 3 / 4;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
}
</style>
