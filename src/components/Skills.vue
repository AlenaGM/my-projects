<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
const skills = [
  'React',
  'VueJS',
  'Vite',
  'MobX',
  'Pinia',
  'HTML5',
  'CSS3',
  'Sass',
  'TailwindCSS',
  'JavaScript',
  'TypeScript',
  'Git',
  'Rest API',
  'GraphQL',
  'Firebase',
  'GSAP',
  'WordPress',
  'MUI'
]

import { onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

let mediaAnimation = gsap.matchMedia()

onMounted(() => {
  mediaAnimation.add('(min-width: 1025px)', () => {
    gsap.from('.skills__list_item', {
      stagger: 0.3,
      opacity: 0,
      xPercent: 100,
      scrollTrigger: {
        trigger: '.skills',
        start: 'top 100px',
        end: 'bottom+=150%',
        toggleActions: 'play resume none none',
        pin: true
      }
    })
  })
})
</script>

<template>
  <section class="skills">
    <i id="skills" />
    <h2 class="skills__title"><span>Things I Can Do</span><span>Skills & Tools</span></h2>
    <div div class="skills__info">
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, dolor rerum! Rem
        inventore beatae dicta nemo vero, dolorum rerum vitae mollitia qui obcaecati facere aperiam
        sed nulla? Voluptatibus, sapiente consectetur?
      </p>
    </div>
    <div class="skills__list">
      <div class="skills__list_item" v-for="(skill, i) in skills" :key="i">
        <img class="skills__list_image" :src="`/icons/${skill}.png`" :alt="skill" />
        <div class="tech-text">{{ skill }}</div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.skills {
  &__list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: 1.125rem;
    grid-auto-rows: 1fr;
    @media screen and (max-width: 500px) {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(90px, 1fr));
    }
    &_item {
      display: grid;
      grid-template: 1fr auto / 1fr;
      grid-auto-flow: row;
      justify-items: center;
      align-items: end;
      padding: 0.75rem;
      border: var(--border);
      box-shadow: var(--box-shadow);

      img {
        object-fit: contain;
        aspect-ratio: 1;

        width: 80%;
      }
      div {
        text-align: center;
        padding-top: 0.5rem;
        @media screen and (max-width: 500px) {
          font-size: 10px;
        }
      }
    }
  }
}
</style>
