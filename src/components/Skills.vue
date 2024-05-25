<template>
  <section class="skills">
    <i id="skills" />
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
</script>

<style lang="scss" scoped>
.skills {
  display: grid;
  &__list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(96px, 1fr));
    grid-auto-rows: 1fr;
    justify-items: center;
    gap: 4rem;
    @media screen and (max-width: 576px) {
      grid-template-columns: repeat(auto-fit, minmax(64px, 1fr));
      gap: 1.125rem;
    }
    &_item {
      width: 100%;
      display: grid;
      grid-template: 1fr auto / 1fr;
      grid-auto-flow: row;
      justify-items: center;
      align-items: end;
      img {
        object-fit: contain;
        aspect-ratio: 1;
        width: 75%;
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
