<!-- eslint-disable vue/multi-word-component-names -->
<script setup></script>

<template>
  <section class="hero">
    <div class="hero__info">
      <div>Alena Guillaume</div>
      <h1>Frontend Developer</h1>
    </div>
    <div class="hero__image"><img src="@/assets/images/illustration.png" alt="illustration" /></div>
  </section>
</template>

<style lang="scss" scoped>
.hero {
  min-height: calc(100vh - 86px);
  display: grid;
  grid-template-columns: 1fr minmax(auto, 610px);
  gap: 4rem;
  align-content: center;
  align-items: end;
  @media screen and (max-width: 1023px) {
    grid-template-columns: 1fr;
    align-items: start;
    gap: 2rem;
  }
  border-bottom: solid 4px green;
  &__info {
    h1 {
      font-size: 48px;
      @media screen and (max-width: 1023px) {
        font-size: 32px;
      }
    }
    div {
      font-size: 24px;
      font-style: italic;
      font-family: 'Poppins', sans-serif;
      margin: 8rem 0 1.5rem;
      @media screen and (max-width: 1023px) {
        margin: 1rem 0;
        font-size: 18px;
      }
    }
  }
}
</style>
