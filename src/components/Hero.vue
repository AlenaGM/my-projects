<!-- eslint-disable vue/multi-word-component-names -->
<script setup></script>

<template>
  <div class="header__hero hero">
    <div class="hero__title">
      <span>Alena Guillaume</span>
      <h1>Frontend Developer</h1>
    </div>
    <div class="hero__image">
      <picture>
        <source
          srcset="@/assets/images/illustration.webp, @/assets/images/illustration@2x.webp 2x"
          type="image/webp"
        />
        <img
          src="@/assets/images/illustration.png"
          srcset="i@/assets/images/illustration.png, @/assets/images/illustration@2x.png 2x"
          alt="girl web-developer"
        />
      </picture>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.hero {
  grid-column: 2;
  display: grid;
  grid-template-columns: 1fr minmax(auto, 610px);
  gap: 4rem;
  align-content: center;
  align-items: end;
  @media screen and (max-width: 1023px) {
    grid-template-columns: 1fr;
    gap: 0;
    align-items: start;
    justify-items: center;
  }
  &__title {
    display: flex;
    flex-direction: column;
    padding: 0 0 25%;
    @media screen and (max-width: 1023px) {
      padding: 1rem 0 0;
      text-align: center;
    }
    span {
      font-size: 24px;
      font-style: italic;
      font-family: var(--font-title);
      @media screen and (max-width: 767px) {
        font-size: 18px;
      }
      @media screen and (max-width: 500px) {
        font-size: 16px;
      }
    }
  }
}
</style>
