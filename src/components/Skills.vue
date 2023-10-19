<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
//import { onMounted } from 'vue'
//import gsap from 'gsap'
//import { ScrollTrigger } from 'gsap/ScrollTrigger'

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

//gsap.registerPlugin(ScrollTrigger)
//
//let mediaAnimation = gsap.matchMedia()
//
//onMounted(() => {
//  mediaAnimation.add('(min-width: 1025px)', () => {
//    gsap.from('.skills__list_item', {
//      stagger: 0.3,
//      opacity: 0,
//      xPercent: 100,
//      scrollTrigger: {
//        trigger: '.skills__list',
//        start: 'top 90%',
//        end: 'bottom 50%',
//        toggleActions: 'play resume none none'
//      }
//    })
//  })
//})
</script>

<template>
  <section class="skills">
    <i id="skills" />
    <h2><span>Things I Can Do</span><span>Skills & Tools</span></h2>
    <div>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, dolor rerum! Rem
        inventore beatae dicta nemo vero, dolorum rerum vitae mollitia qui obcaecati facere aperiam
        sed nulla? Voluptatibus, sapiente consectetur?
      </p>
    </div>
    <div class="skills__list">
      <div class="skills__list_item" v-for="(skill, i) in skills" :key="i">
        <img :src="`/icons/${skill}.png`" :alt="skill" />
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
      background-color: var(--color-white);
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
