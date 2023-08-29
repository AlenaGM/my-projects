<script setup>
// eslint-disable-next-line no-unused-vars
const props = defineProps({
  projects: {
    required: true
  }
})
</script>

<template>
  <article
    class="gallery__card card"
    v-for="{ id, title, info, tech, image, demo, code } in projects"
    :key="id"
  >
    <a class="card__image" :href="demo" target="_blank" rel="noreferrer">
      <img :src="image" :alt="title" />
    </a>
    <div class="card__content">
      <div>
        <h3 class="card__title">
          <a :href="demo" target="_blank" rel="noreferrer">{{ title }}</a>
        </h3>
        <p class="card__tech tech-text"><span class="tech-text">Stack: </span>{{ tech }}</p>
      </div>
      <div class="card__text">{{ info }}</div>
      <div class="card__links">
        <a :href="demo" target="_blank" rel="noreferrer" class="tech-text">
          View Project: <font-awesome-icon :icon="['fas', 'cat']" />
        </a>
        <a :href="code" target="_blank" rel="noreferrer" class="tech-text">
          View Code: <font-awesome-icon :icon="['fab', 'github']" />
        </a>
      </div>
    </div>
  </article>
</template>

<style lang="scss" scoped>
.card {
  display: grid;
  grid-auto-flow: row;
  grid-template: auto 1fr/1fr;
  max-width: 410px;
  width: 100%;
  background-color: var(--color-light-gray);
  border: var(--border);
  //border-radius: 0.5rem;
  text-align: center;
  padding: 1rem;
  &__image {
    padding: 0 0 60%;
    position: relative;
    overflow: hidden;
    cursor: pointer;
    height: 226px;
    img {
      //border-radius: 0.5rem;
      //height: 100%;
      left: 0;
      object-fit: cover;
      //position: absolute;
      top: 0;
      width: 100%;
      transform: translateY(0);
      transition: 2s ease-out;
      &:hover {
        object-fit: cover;
        width: 100%;
        transform: translateY(calc(-100% + 226px));
        transition: 12s ease-out;
      }
    }
  }
  &__content {
    display: grid;
    align-content: space-between;
    justify-items: center;
    position: relative;
    width: 100%;
  }
  &__title {
    margin: 1rem 0 0.5rem;
    a {
      font-size: inherit;
      font-weight: inherit;
      line-height: inherit;
    }
  }
  &__tech {
    text-align: left;
    margin: 0.5rem 0;
  }
  &__text {
    text-align: left;
    margin: 0.5rem 0;
  }
  &__links {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    position: relative;
    justify-content: space-between;
    width: 100%;
    a {
      display: flex;
      position: relative;
      align-items: flex-start;
      font-size: 0.85rem;
      margin-top: 0.5rem;
      svg {
        font-size: 1.125rem;
        margin-left: 0.25rem;
      }
      &:not(:last-of-type) {
        margin-right: 1.5rem;
        @media screen and (max-width: 767px) {
          margin-right: 0;
        }
      }
      &:last-of-type svg {
        font-size: 1.25rem;
      }
    }
  }
}
</style>
