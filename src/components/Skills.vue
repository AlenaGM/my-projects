<script setup>
import { skills } from '@/assets/data/skills'
</script>

<template>
  <section class="skills">
    <h2>My skills</h2>
    <div class="skills__info">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, dolor rerum! Rem inventore
      beatae dicta nemo vero, dolorum rerum vitae mollitia qui obcaecati facere aperiam sed nulla?
      Voluptatibus, sapiente consectetur?
    </div>
    <div class="skills__list">
      <div class="skills__list_item" v-for="{ order, skill, icon } in skills" :key="order">
        <img :src="icon" :alt="skill" />
        <label>{{ skill }}</label>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.skills {
  &__info {
    margin-bottom: var(--section-gap-mobile);
  }
  &__list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(90px, 1fr));
    grid-auto-rows: 1fr;
    width: 100%;
    column-gap: 2.5rem;
    row-gap: 1.75rem;
    justify-items: start;
    &_item {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .tech-text {
        font-size: 1rem;
      }
      div {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100px;
        height: 100px;
        border-radius: 50%;
        background: var(--color-light-gray);
        border: 1px solid rgba(255, 255, 255, 0.18);

        img {
          width: 50%;
          height: 50%;
        }

        &:hover {
          border: 1px solid rgb(0, 204, 204, 0.18);
          box-shadow: 0 0 15px rgb(0, 204, 204, 0.3);
        }
      }

      @media screen and (min-width: 2000px) {
        margin: 1rem 2rem;

        p {
          margin-top: 1rem;
        }
      }
    }
  }
}

.card {
  display: grid;
  grid-auto-flow: row;
  grid-template: auto 1fr/ 1fr;
  max-width: 400px;
  width: 100%;
  text-align: center;
  align-items: stretch;
  background-color: var(--color-yellow);
  box-shadow: var(--box-shadow);
  border-radius: 8px;
  cursor: pointer;
  &_image {
    margin: 0 0 8px;
    padding: 0 0 60%;
    position: relative;
    overflow: hidden;
    cursor: pointer;
    height: 240px;
    border-radius: 8px 8px 0 0;
    img {
      object-fit: cover;
      width: 100%;
      transform: translateY(0);
      transition: 6s ease-out;
      &:hover {
        object-fit: cover;
        width: 100%;
        transform: translateY(calc(-100% + 240px));
        transition: 6s ease-out;
      }
    }
  }
  &_content {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    width: 100%;
  }
  &_title {
    font-size: larger;
    margin: 0.5rem 0 0 0;
    &:hover {
      color: var(--color-hover);
    }
  }
  &_text {
    padding-top: 0.5rem;
    font-weight: 400;
    line-height: 1.4;
  }
  &_links {
    display: flex;
    margin-top: 1rem;
    @media screen and (max-width: 767px) {
      flex-direction: column;
      align-items: center;
    }
  }
  &_link {
    display: flex;
    position: relative;
    align-items: center;
    svg {
      font-size: 1.25rem;
      margin-left: 0.25rem;
    }
  }
  &_link:not(:last-of-type) {
    margin-right: 1.5rem;
    @media screen and (max-width: 767px) {
      margin-right: 0;
    }
    svg:last-of-type {
      font-size: 1.125rem;
    }
  }
}
</style>
