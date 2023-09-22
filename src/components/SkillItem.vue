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

  <!--TEST-->
  <div class="skills__list_item">
    <div class="skills__list_image">
      <img src="@/assets/img/React.png" alt="React" />
    </div>
    <label class="tech-text">React</label>
  </div>
  <div class="skills__list_item">
    <div class="skills__list_image">
      <img src="@/assets/img/VueJS.png" alt="VueJS" />
    </div>
    <label class="tech-text">VueJS</label>
  </div>
  <div class="skills__list_item">
    <div class="skills__list_image">
      <img src="@/assets/img/MobX.png" alt="MobX" />
    </div>
    <label class="tech-text">MobX</label>
  </div>
  <div class="skills__list_item">
    <div class="skills__list_image">
      <img src="@/assets/img/Pinia.png" alt="Pinia" />
    </div>
    <label class="tech-text">Pinia</label>
  </div>
  <div class="skills__list_item">
    <div class="skills__list_image">
      <img src="@/assets/img/JavaScript.png" alt="JavaScript" />
    </div>
    <label class="tech-text">JavaScript</label>
  </div>
  <div class="skills__list_item">
    <div class="skills__list_image">
      <img src="@/assets/img/TypeScript.png" alt="TypeScript" />
    </div>
    <label class="tech-text">TypeScript</label>
  </div>
  <div class="skills__list_item">
    <div class="skills__list_image">
      <img src="@/assets/img/HTML5.png" alt="HTML5" />
    </div>
    <label class="tech-text">HTML5</label>
  </div>
  <div class="skills__list_item">
    <div class="skills__list_image">
      <img src="@/assets/img/CSS3.png" alt="CSS3" />
    </div>
    <label class="tech-text">CSS3</label>
  </div>
  <div class="skills__list_item">
    <div class="skills__list_image">
      <img src="@/assets/img/Sass.png" alt="Sass" />
    </div>
    <label class="tech-text">Sass</label>
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
