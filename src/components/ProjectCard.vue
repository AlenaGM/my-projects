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
    v-for="{ id, title, info, tech, image, demo, code } in projects"
    :key="id"
  >
    <a class="card_image" :href="demo" target="_blank" rel="noreferrer">
      <img :src="image" :alt="title" />
    </a>
    <div class="card_content">
      <h3 class="card_title">
        <a class="card_title" :href="demo" target="_blank" rel="noreferrer">{{ info }}</a>
      </h3>
      <div class="card_tech tech-text"><span class="tech-text">Stack: </span>{{ tech }}</div>
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
  grid-template: auto 1fr/1fr;
  max-width: 400px;
  width: 100%;
  background-color: var(--color-light-gray);
  box-shadow: var(--box-shadow);
  border-radius: 0.5rem;
  text-align: center;
  padding: 1rem;
  transition: 6s ease-out;
  cursor: pointer;
  &_image {
    padding: 0 0 60%;
    position: relative;
    overflow: hidden;
    cursor: pointer;
    height: 200px;
    img {
      border-radius: 0.5rem;
      height: 100%;
      left: 0;
      object-fit: cover;
      opacity: 0.85;
      position: absolute;
      top: 0;
      width: 100%;
      transform: translateY(0);
      transition: 6s ease-out;
      &:hover {
        object-fit: cover;
        width: 100%;
        transform: translateY(calc(-100% + 200px));
        transition: 6s ease-out;
      }
    }
  }
  &_content {
    display: grid;
    align-content: space-between;
    justify-items: center;
    position: relative;
    width: 100%;
  }
  &_title {
    font-weight: 400;
    line-height: 1.4;
    font-size: 1.125rem;
    margin: 1rem 0 0.5rem;
    &:hover {
      color: var(--color-hover);
    }
  }
  &_tech {
    text-align: left;
    margin: 0.5rem 0;
  }
  &_links {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    position: relative;
    justify-content: space-between;
    width: 100%;
    @media screen and (max-width: 767px) {
      flex-direction: column;
      align-items: center;
    }
  }
  &_link {
    display: flex;
    position: relative;
    align-items: center;
    font-size: 0.85rem;
    margin-top: 0.5rem;
    &:not(:last-of-type) {
      margin-right: 1.5rem;
      @media screen and (max-width: 767px) {
        margin-right: 0;
      }
    }
    svg {
      font-size: 1.25rem;
      margin-left: 0.25rem;
      &:last-of-type {
        font-size: 1.125rem;
      }
    }
  }
}
</style>
