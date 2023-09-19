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
    <div class="card__image">
      <a :href="demo" target="_blank" rel="noreferrer">
        <img :src="image" :alt="title" />
      </a>
      <div class="card__image_deco"></div>
    </div>
    <a class="card__title" :href="demo" target="_blank" rel="noreferrer">{{ title }}</a>
    <div class="card__content">
      <div class="card__info">
        {{ info }}
      </div>
      <div class="card__tech">
        <p class="tech-text"><span class="tech-text">Stack: </span>{{ tech }}</p>
        <div class="card__links">
          <a :href="demo" target="_blank" rel="noreferrer" class="tech-text">
            View Project: <font-awesome-icon :icon="['fas', 'cat']" />
          </a>
          <a :href="code" target="_blank" rel="noreferrer" class="tech-text">
            View Code: <font-awesome-icon :icon="['fab', 'github']" />
          </a>
        </div>
      </div>
    </div>
  </article>
</template>

<style lang="scss" scoped>
.card {
  display: grid;
  grid-auto-flow: row;
  grid-template: auto minmax(32px, auto) 1fr/1fr;
  max-width: 400px;
  width: 100%;
  &__image {
    padding: 0 0 40%;
    position: relative;
    aspect-ratio: 1;
    z-index: 1;
    filter: brightness(0.95);
    cursor: pointer;
    width: calc(100% - 4rem);
    margin-left: 2rem;
    margin-right: 2rem;
    margin-bottom: -20%;
    &_deco {
      content: '';
      position: absolute;
      top: 1.5rem;
      left: 1rem;
      border: var(--border);
      width: 100%;
      height: 100%;
      z-index: -1;
    }
    a {
      overflow: hidden;
      box-sizing: border-box;
      display: block;
      overflow: hidden;
      width: initial;
      height: initial;
      background: none;
      opacity: 1;
      border: 0;
      margin: 0;
      padding: 0;
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
    }
    img {
      position: absolute;
      top: 0;
      left: 0;
      object-fit: cover;
      height: 100%;
      width: 100%;
    }
  }
  &__content {
    display: grid;
    grid-template-rows: 1fr minmax(120px, auto);
    align-content: space-between;
    justify-items: start;
    position: relative;
    width: 100%;
    padding: 1rem;
    background-color: var(--color-white);
    box-shadow: var(--box-shadow);
    z-index: 3;
  }
  &__title {
    background-color: var(--color-primary);
    color: var(--color-white);
    display: flex;
    justify-content: center;
    font-family: var(--font-text);
    font-size: 13px;
    line-height: 2em;
    font-weight: 700;
    padding: 8px 28px;
    letter-spacing: -0.01em;
    margin: 0 auto -1.75rem 1rem;
    z-index: 2;
    transition: transform 0.25s ease;
    cursor: pointer;
    &:hover {
      transition: transform 0.25s ease;
      transform: translateY(-8px);
      color: var(--color-white);
    }
    &:active {
      top: 8px;
    }
  }
  &__tech {
    border-top: solid 1px var(--color-text);
    text-align: left;
    width: 100%;
    display: grid;
    align-content: space-between;
    p {
      margin: 0.5rem 0 1.5rem;
    }
  }
  &__info {
    text-align: left;
    margin: 0 0 1.5rem 0;
    display: grid;
    p {
      padding: 0.5rem 0;
      margin: 0;
      &:last-of-type {
        border-top: solid 1px var(--color-text);
      }
    }
  }
  &__links {
    display: flex;
    flex-direction: row;
    position: relative;
    justify-content: flex-end;
    width: 100%;
    a {
      display: flex;
      position: relative;
      align-items: flex-start;
      font-size: 14px;
      margin-top: 0.5rem;
      white-space: nowrap;
      transition:
        transform 0.2s ease,
        color 0.2s ease;
      svg {
        font-size: 1.125rem;
        margin-left: 0.25rem;
      }
      &:not(:last-of-type) {
        margin-right: 1.5rem;
      }
      &:last-of-type svg {
        font-size: 1.25rem;
      }
      &:hover {
        transform: translateY(-3px);
        transition:
          transform 0.2s ease,
          color 0.2s ease;
      }
      &:active {
        top: 3px;
      }
    }
  }
}
</style>
