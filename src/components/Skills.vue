<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { skills } from '@/assets/data/skills'
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
      <div class="skills__list_item" v-for="{ order, skill, path } in skills" :key="order">
        <div class="skills__list_image">
          <picture>
            <source :srcset="`${path}.webp`" type="image/webp" />
            <img :src="`${path}.png`" :alt="skill" />
          </picture>
        </div>
        <label class="tech-text">{{ skill }}</label>
      </div>
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
    &_item {
      display: grid;
      grid-template: 1fr auto / 1fr;
      grid-auto-flow: row;
      justify-items: center;
      padding: 0.75rem;
      border: var(--border);
      box-shadow: var(--box-shadow);
      align-items: end;
    }
    &_image {
      position: relative;
      margin: auto;
      padding-bottom: 60%;
      aspect-ratio: 1/1;
      display: flex;
      justify-content: center;
      img {
        position: absolute;
        top: 0;
        height: 100%;
        object-fit: contain;
      }
    }
    label {
      text-align: center;
      padding-top: 0.75rem;
      @media screen and (max-width: 500px) {
        font-size: 10px;
      }
    }
  }
}
</style>
