<template>
  <section class="skills" id="skills">
    <h2><span class="h2-subtitle">Things I Can Do</span><span>Skills & Tools</span></h2>
    <div>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, dolor rerum! Rem
        inventore beatae dicta nemo vero, dolorum rerum vitae mollitia qui obcaecati facere aperiam
        sed nulla? Voluptatibus, sapiente consectetur?
      </p>
    </div>
    <div class="skills__list">
      <div class="skills__list_item" v-for="(skill, i) in skills" :key="i">
        <img :src="`/icons/${skill}.svg`" :alt="skill" />
        <div class="tech-text">{{ skill }}</div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const skills = [
  'HTML5',
  'CSS3',
  'JavaScript',
  'TypeScript',
  'VueJS',
  'Vite',
  'Pinia',
  'NuxtJS',
  'React',
  'Webpack',
  'Git',
  'Rest APIs',
  'GraphQL',
  'Firebase',
  'Sass',
  'GSAP'
]

gsap.registerPlugin(ScrollTrigger)

let skillsAnimCtx
let mediaAnimation = gsap.matchMedia()

onMounted(() => {
  skillsAnimCtx = gsap.context(() => {
    mediaAnimation.add('(min-width: 1025px)', () => {
      gsap.from('.skills__list_item', {
        scale: 0.7,
        opacity: 0,
        y: 24,
        ease: 'power2.inOut',
        stagger: {
          grid: 'auto',
          from: 'start',
          opacity: 0,
          axis: 'y',
          amount: 0.5
        },
        scrollTrigger: {
          trigger: '.skills__list',
          start: 'top 80%',
          end: 'bottom bottom',
          toggleActions: 'play resume none none'
        }
      })
    })

    mediaAnimation.add('(max-width: 1024px)', () => {
      gsap.from('.skills__list', {
        y: 150,
        autoAlpha: 0,
        scrollTrigger: {
          trigger: '.skills',
          start: 'top 75%',
          end: 'top 25%',
          scrub: 1
        }
      })
    })
  })
})

onUnmounted(() => {
  skillsAnimCtx.revert()
})
</script>

<style lang="scss" scoped>
.skills {
  display: grid;
  &__list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    justify-content: center;
    column-gap: 2.5rem;
    row-gap: 2.5rem;
    @media screen and (max-width: 1024px) {
      grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
      column-gap: 1.25rem;
    }
    @media screen and (max-width: 576px) {
      grid-template-columns: repeat(auto-fit, minmax(62px, 1fr));
    }
    &_item {
      display: grid;
      grid-template: 1fr auto / 1fr;
      grid-auto-flow: row;
      justify-content: center;
      align-items: end;
      max-width: 86px;
      img {
        object-fit: contain;
        aspect-ratio: 1;
        padding: 8px;
      }
      div {
        text-align: center;
        padding-top: 0.5rem;
        @media screen and (max-width: 576px) {
          font-size: 10px;
        }
      }
    }
  }
}
</style>
