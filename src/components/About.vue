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
          rel="noreferrer noopener"
          >Download My CV</ui-button
        >
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
      autoAlpha: 1,
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
