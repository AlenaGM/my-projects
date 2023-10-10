<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
const skills = [
  'React',
  'NextJS',
  'Redux',
  'VueJS',
  'Vite',
  'Pinia',
  'HTML5',
  'CSS3',
  'Sass',
  'JavaScript',
  'TypeScript',
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
      <div class="skills__list_item" v-for="(skill, i) in skills" :key="i">
        <img class="skills__list_image" :src="`/icons/${skill}.png`" :alt="skill" />
        <div class="tech-text">{{ skill }}</div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.skills {
  h2::after {
    background-image: url('@/assets/img/subtitles/skills.webp');
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
