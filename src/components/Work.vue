<!-- eslint-disable vue/multi-word-component-names -->
<script setup></script>

<template>
  <section class="work">
    <div class="work__inner">
      <h2>Some of my projects</h2>
      <div>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia magnam veniam, ipsa sunt
        delectus reiciendis, exercitationem esse ad minima quibusdam aliquid aut facere non sint
        culpa blanditiis animi, velit consequatur.
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.work {
  display: grid;
  grid-template-columns:
    minmax(1.5rem, 1fr) minmax(auto, 1280px)
    minmax(1.5rem, 1fr);
  background-color: var(--color-misty-rose);
  padding: var(--section-gap) 0;
  &__inner {
    grid-column: 2;
  }
}
</style>
