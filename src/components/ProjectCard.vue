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
    class="work__gallery_card card"
    v-for="{ id, title, info, tech, image, demo, code, bgColor } in projects"
    :key="id"
    :style="{ backgroundColor: bgColor }"
  >
    <a :href="demo" target="_blank" rel="noreferrer" class="card_image">
      <img :src="image" :alt="title" />
    </a>
    <div class="card_content">
      <div>
        <a class="card_title" :href="demo" :alt="title" target="_blank" rel="noreferrer">
          {{ title }}
        </a>
        <p class="card_tech tech-text"><span class="tech-text">Stack: </span>{{ tech }}</p>
      </div>
      <div class="card_text">{{ info }}</div>
      <div class="card_links">
        <a :href="demo" target="_blank" rel="noreferrer" class="card_link tech-text">
          View Project: <font-awesome-icon :icon="['fas', 'cat']" />
        </a>
        <a :href="code" target="_blank" rel="noreferrer" class="card_link tech-text">
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
