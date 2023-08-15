<script setup>
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
    <a :href="demo" target="_blank" rel="noreferrer" class="card_image">
      <img :src="image" :alt="title" />
    </a>
    <div class="card_content">
      <h3 class="card_title">
        <a :href="demo" :alt="title" target="_blank" rel="noreferrer">
          {{ title }}
        </a>
      </h3>
      <p class="card_tech tech-text"><span class="tech-text">Stack:</span>{{ tech }}</p>
      <p class="pcard_text">{{ info }}</p>
      <div class="card_links">
        <a :href="demo" target="_blank" rel="noreferrer" class="card_link"> View Project: CAT </a>
        <a :href="code" target="_blank" rel="noreferrer" class="card_link"> View Code: GITHUB </a>
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
  padding: 1rem;
  //background-color: $color-bg-card-dark;
  //color: $color-text-light;
  //border: 1px solid hsla(0, 0%, 100%, 0.18);
  //border-radius: 0.25rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &_image {
    margin: 0 0 8px;
    padding: 0 0 70%;
    position: relative;
    //border-radius: 0.25rem;
    img {
      //border-radius: 0.25rem;
      height: 100%;
      left: 0;
      object-fit: cover;
      opacity: 0.85;
      position: absolute;
      top: 0;
      width: 100%;
      &:hover {
        opacity: 1;
      }
    }
  }
  &_content {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem;
    width: 100%;
  }
  &_title {
    margin: 0.5rem 0;
    &:hover {
      //color: $color-hover;
    }
  }
  &_text {
    margin: 0.5rem 0;
    font-size: 20px;
    font-weight: 400;
    line-height: 1.4;
  }
  &_tags {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    padding: 0.5rem 1rem;
    border-radius: 10px;
    //background-color: $color-bg-card-dark;
    top: -45px;
  }
  &_links {
    display: flex;
  }
  &_link {
    //color: $color-text-light;
    display: flex;
    font-family: 'Red Hat Mono', monospace;
    font-size: 0.85rem;
    padding-top: 0.5rem;
    position: relative;
    svg {
      margin-left: 0.25rem;
    }
  }
  &_link:not(:last-of-type) {
    padding-right: 1.5rem;
  }
}
</style>
