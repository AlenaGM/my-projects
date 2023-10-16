<!-- eslint-disable vue/multi-word-component-names -->
<script setup></script>

<template>
  <div class="header__hero hero">
    <h1 class="hero__title">
      <span>Hi! I'm Alëna Guillaume,</span>
      <span>Frontend Developer</span>
    </h1>
    <div class="hero__image">
      <picture>
        <source
          srcset="@/assets/img/illustration.webp, @/assets/img/illustration@2x.webp 2x"
          type="image/webp"
        />
        <img
          src="@/assets/img/illustration.png"
          srcset="@/assets/img/illustration.png, @/assets/img/illustration@2x.png 2x"
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
  grid-template-columns: 1fr minmax(auto, 640px);
  align-content: center;
  align-items: end;
  @media screen and (max-width: 1113px) {
    align-items: center;
  }
  @media screen and (max-width: 1023px) {
    grid-template-columns: 1fr;
    justify-items: center;
  }
  &__title {
    margin: 110px 0;
    @media screen and (max-width: 1023px) {
      margin: 0;
      text-align: center;
    }
    span {
      &:first-child {
        display: inline-block;
        transform: translateX(200%);
        overflow: hidden;
      }
      &:last-child {
        display: block;
        transform: translateX(-200%);
        text-overflow: initial;
      }
    }
  }
  &__image {
    overflow: hidden;
    visibility: hidden;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
