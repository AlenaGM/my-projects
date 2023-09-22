<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import SkillItem from '@/components/skillItem.vue'

const skills = [
  'React',
  'VueJS',
  'MobX',
  'Pinia',
  'JavaScript',
  'TypeScript',
  'HTML5',
  'CSS3',
  'Sass',
  'Firebase',
  'NodeJS',
  'Rest API',
  'GraphQL',
  'Git',
  'GSAP',
  'TailwindCSS',
  'MUI',
  'WordPress'
]
</script>

<template>
  <section class="skills">
    <i id="skills" />
    <h2>Things I Can Do</h2>
    <div>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, dolor rerum! Rem
        inventore beatae dicta nemo vero, dolorum rerum vitae mollitia qui obcaecati facere aperiam
        sed nulla? Voluptatibus, sapiente consectetur?
      </p>
    </div>
    <div class="skills__list">
      <SkillItem :skills="skills" />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.skills {
  h2::after {
    background-image: url('@/assets/img/subtitles/skills.png');
  }
  &__list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: 1.125rem;
    grid-auto-rows: 1fr;
    @media screen and (max-width: 450px) {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(90px, 1fr));
    }
  }
}
</style>
