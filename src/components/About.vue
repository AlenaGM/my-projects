<!-- eslint-disable vue/multi-word-component-names -->
<script setup></script>

<template>
  <div class="about">
    <div class="about__inner">
      <h2>About me</h2>
      <div>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, dolor rerum! Rem
        inventore beatae dicta nemo vero, dolorum rerum vitae mollitia qui obcaecati facere aperiam
        sed nulla? Voluptatibus, sapiente consectetur?
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.about {
  display: grid;
  grid-template-columns:
    minmax(1.5rem, 1fr) minmax(auto, 1280px)
    minmax(1.5rem, 1fr);
  padding: var(--section-gap) 0;
  &__inner {
    grid-column: 2;
  }
}
</style>
