<script setup>
import { skills } from '@/assets/data/skills'
</script>

<template>
  <section class="skills">
    <h2>My skills</h2>
    <div class="skills__info">
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, dolor rerum! Rem
        inventore beatae dicta nemo vero, dolorum rerum vitae mollitia qui obcaecati facere aperiam
        sed nulla? Voluptatibus, sapiente consectetur?
      </p>
    </div>
    <div class="skills__list">
      <div class="skills__list_item" v-for="{ order, skill, icon } in skills" :key="order">
        <img :src="icon" :alt="skill" />
        <label class="tech-text">{{ skill }}</label>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.skills {
  &__info p:last-of-type {
    margin-bottom: 4rem;
    @media screen and (max-width: 767px) {
      margin-bottom: 2.5rem;
    }
  }
  &__list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    grid-auto-rows: 1fr;
    width: 100%;
    gap: 2.5rem;
    justify-items: start;
    &_item {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      div {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100px;
        height: 100px;
        img {
          width: 50%;
          height: 50%;
        }
      }
    }
  }
}
</style>
