<!-- eslint-disable vue/multi-word-component-names -->
<script setup></script>

<template>
  <section class="skills">
    <div class="skills__inner">
      <h2>My skills</h2>
      <div>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, dolor rerum! Rem
        inventore beatae dicta nemo vero, dolorum rerum vitae mollitia qui obcaecati facere aperiam
        sed nulla? Voluptatibus, sapiente consectetur?
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.skills {
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
