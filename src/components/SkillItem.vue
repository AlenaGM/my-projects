<script setup>
// eslint-disable-next-line no-unused-vars
const props = defineProps({
  skills: {
    required: true
  }
})
</script>

<template>
  <div class="skills__list_item" v-for="(skill, i) in skills" :key="i">
    <div class="skills__list_image">
      <img :src="`/img/${skill}.png`" :alt="skill" />
    </div>
    <label class="tech-text">{{ skill }}</label>
  </div>
</template>

<style lang="scss" scoped>
.skills__list {
  &_item {
    display: grid;
    grid-template: 1fr auto / 1fr;
    grid-auto-flow: row;
    justify-items: center;
    padding: 0.75rem;
    border: var(--border);
    box-shadow: var(--box-shadow);
    align-items: end;
  }
  &_image {
    position: relative;
    margin: auto;
    padding-bottom: 60%;
    aspect-ratio: 1/1;
    display: flex;
    justify-content: center;
    img {
      position: absolute;
      top: 0;
      height: 100%;
      object-fit: contain;
    }
  }
  label {
    text-align: center;
    padding-top: 0.75rem;
    @media screen and (max-width: 500px) {
      font-size: 10px;
    }
  }
}
</style>
