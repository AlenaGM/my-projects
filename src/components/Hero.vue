<!-- eslint-disable vue/multi-word-component-names -->
<script setup></script>

<template>
  <section class="hero">
    <div class="hero__inner">
      <div>I'm Hero</div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.hero {
  display: grid;
  grid-template-columns:
    minmax(1.5rem, 1fr) minmax(auto, 1280px)
    minmax(1.5rem, 1fr);
  min-height: calc(100vh - 84px);
  padding: 1.5rem 0;
  //background-color: var(--color-misty-rose);
  &__inner {
    grid-column: 2;
  }
}
</style>
