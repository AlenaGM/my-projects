<!-- eslint-disable vue/multi-word-component-names -->
<script setup></script>

<template>
  <footer class="footer">
    <div class="footer__inner">
      <div>I'm footer</div>
      <div>Right</div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  display: grid;
  grid-template-columns:
    minmax(1.5rem, 1fr) minmax(auto, 1280px)
    minmax(1.5rem, 1fr);
  background-color: var(--color-black);
  color: var(--color-white);
  padding: 1rem 0 1.5rem;
  &__inner {
    grid-column: 2;
  }
}
</style>
