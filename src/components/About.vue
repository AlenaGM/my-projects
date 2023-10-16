<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import uiButton from './ui/Button.vue'
import { onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const tlAbout = gsap.timeline({})

onMounted(() => {
  gsap.set('.about__image img', {
    scale: 1.1,
    yPercent: 5
  })

  tlAbout.to('.about__image img', {
    yPercent: -5,
    autoAlpha: 1,
    scrollTrigger: {
      trigger: '.about__image',
      start: 'top 80%',
      end: 'bottom 20%',
      scrub: 1
    }
  })
})

onUnmounted(() => {
  tlAbout.revert()
})
</script>

<template>
  <section class="about">
    <div class="progressbar"></div>
    <i id="about" />
    <h2 class="about__title"><span>Who I Am</span><span>About me</span></h2>
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
      <div class="about__info">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, dolor rerum! Rem
          inventore beatae dicta nemo vero, dolorum rerum vitae mollitia qui obcaecati facere
          aperiam sed nulla? Voluptatibus, sapiente consectetur?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, dolor rerum! Rem
          inventore beatae dicta nemo vero, dolorum rerum vitae mollitia qui obcaecati facere
          aperiam sed nulla? Voluptatibus, sapiente consectetur?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, dolor rerum! Rem
          inventore beatae dicta nemo vero, dolorum rerum vitae mollitia qui obcaecati facere
          aperiam sed nulla? Voluptatibus, sapiente consectetur?
        </p>
        <ui-button
          type="link"
          to="#"
          mobileFullWidth
          role="link"
          aria-label="download my cv"
          target="_blank"
          rel="noreferrer noopener"
          >Download My CV</ui-button
        >
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.about {
  &__container {
    display: grid;
    grid-template-columns: minmax(auto, 420px) 1fr;
    gap: 4rem;
    justify-items: center;
    @media screen and (max-width: 1023px) {
      grid-template-columns: 1fr;
      gap: 40px;
    }
  }
  &__image {
    max-width: 420px;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>
