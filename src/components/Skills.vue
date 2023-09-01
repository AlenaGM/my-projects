<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { skills } from '@/assets/data/skills'
</script>

<template>
  <section class="skills">
    <h2>My skills</h2>
    <div>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, dolor rerum! Rem
        inventore beatae dicta nemo vero, dolorum rerum vitae mollitia qui obcaecati facere aperiam
        sed nulla? Voluptatibus, sapiente consectetur?
      </p>
    </div>
    <div class="skills__list">
      <div class="skills__list_item" v-for="{ order, skill, icon } in skills" :key="order">
        <div class="skills__list_image">
          <img :src="icon" :alt="skill" />
        </div>
        <label class="tech-text">{{ skill }}</label>
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
    &_item {
      display: grid;
      grid-auto-flow: row;
      grid-template: auto minmax(18px, auto) / 1fr;
      padding: 0.75rem 1rem;
      border: var(--border);
      box-shadow: var(--box-shadow);
      aspect-ratio: 1;
    }
    &_image {
      position: relative;
      padding: 0px 0px 80% 0px;
      margin: 0px 0px 8px 0px;

      img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        max-height: 65px;
        object-fit: contain;
      }
    }
    label {
      text-align: center;
    }
  }
}
</style>
