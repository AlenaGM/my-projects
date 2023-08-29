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
        <div>
          <img :src="icon" :alt="skill" />
        </div>
        <p class="tech-text">{{ skill }}</p>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.skills {
  &__list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(90px, 1fr));
    width: 100%;
    gap: 2.5rem;
    justify-items: center;
    @media screen and (max-width: 767px) {
      gap: 1.5rem;
    }
    &_item {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      div {
        display: flex;
        justify-content: center;
        align-items: center;
        background: var(--color-light-gray);
        box-shadow: var(--box-shadow);
        border-radius: 50%;
        height: 90px;
        width: 90px;
        img {
          width: 50%;
          height: 50%;
        }
      }
      p {
        margin: 0.5rem 0;
      }
    }
  }
}
</style>
