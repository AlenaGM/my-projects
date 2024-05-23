<template>
  <article
    class="gallery__card card"
    v-for="{ id, title, info, tech, image, demo, code } in projects"
    :key="id"
  >
    <div class="card__image">
      <a :href="demo" target="_blank" rel="noreferrer" tabindex="-1">
        <img :src="`${image}.webp`" :alt="title" />
      </a>
      <div class="card__image_deco"></div>
    </div>
    <a class="card__title" :href="demo" target="_blank" rel="noreferrer" tabindex="-1">{{
      title
    }}</a>
    <div class="card__content">
      <div class="card__info">
        {{ info }}
      </div>
      <div class="card__tech">
        <p class="tech-text"><span class="tech-text">Stack: </span>{{ tech }}</p>
        <div class="card__links">
          <a :href="demo" target="_blank" rel="noreferrer" class="tech-text"> View Demo: 🐈‍⬛ </a>
          <a :href="code" target="_blank" rel="noreferrer" class="tech-text"> View Code: ⚛️ </a>
        </div>
      </div>
    </div>
  </article>
</template>

<script setup>
const props = defineProps({
  projects: {
    required: true
  }
})
</script>

<style lang="scss" scoped>
.card {
  display: grid;
  grid-auto-flow: row;
  grid-template: auto minmax(32px, auto) 1fr/1fr;
  max-width: 400px;
  width: 100%;
  &__image {
    position: relative;
    margin: 0 2rem -20%;
    width: calc(100% - 4rem);
    padding: 0 0 40%;
    aspect-ratio: 1;
    z-index: 1;
    cursor: pointer;
    a {
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      overflow: hidden;
      width: initial;
      height: initial;
      background: none;
      opacity: 1;
      border: 0;
    }
    img {
      object-fit: cover;
      height: 100%;
      width: 100%;
    }
    &_deco {
      content: '';
      position: absolute;
      top: 1.5rem;
      left: 1rem;
      width: 100%;
      height: 100%;
      border: var(--border);
      z-index: -1;
    }
  }
  &__title {
    display: flex;
    justify-content: center;
    margin: 0 auto -4rem 1rem;
    padding: 8px 28px 64px;
    color: var(--color-white);
    background-color: var(--color-primary);
    font-family: var(--font-text);
    font-size: 13px;
    font-weight: 700;
    line-height: 2em;
    letter-spacing: -0.01em;
    transition: transform 0.35s ease;
    z-index: 2;
    cursor: pointer;
    @media (hover: hover) {
      &:hover {
        color: var(--color-white);
        transform: translateY(-8px);
        transition: transform 0.35s ease;
      }
    }
  }
  &__content {
    display: grid;
    grid-template-rows: 1fr minmax(120px, auto);
    align-content: space-between;
    justify-items: start;
    width: 100%;
    padding: 1rem;
    background-color: var(--color-white);
    box-shadow: var(--box-shadow);
    z-index: 3;
  }
  &__info {
    display: grid;
    text-align: left;
    margin: 0 0 1.5rem 0;
  }
  &__tech {
    display: grid;
    align-content: space-between;
    text-align: left;
    width: 100%;
    border-top: solid 1px var(--color-text);
    p {
      margin: 0.5rem 0 1.5rem;
    }
  }
  &__links {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    width: 100%;
    a {
      display: flex;
      align-items: flex-start;
      margin-top: 0.5rem;
      font-size: 14px;
      font-weight: 500;
      white-space: nowrap;
      transition:
        transform 0.125s ease,
        color 0.125s ease;
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
      @media (hover: hover) {
        &:hover {
          transform: translateY(-3px);
          transition:
            transform 0.125s ease,
            color 0.125s ease;
        }
        &:active {
          top: 3px;
        }
      }
    }
  }
}
</style>
