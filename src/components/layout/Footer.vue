<!-- eslint-disable vue/multi-word-component-names -->
<script setup></script>

<template>
  <footer class="footer">
    <div class="footer__content">
      <div>©️ Alena G., 2023</div>
      <a href="#">Up ⬆️</a>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  &__content {
    grid-column: 2;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    color: var(--color-white);
    padding: 1.5rem 0;
    align-items: center;
    @media screen and (max-width: 1023px) {
      grid-template-columns: 1fr;
    }
    a {
      justify-self: end;
    }
  }
}
</style>
