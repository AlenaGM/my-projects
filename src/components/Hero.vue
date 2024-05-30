<template>
  <section class="hero" id="hero">
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
    <SocialWidget />
  </section>
</template>

<script setup>
import SocialWidget from './ui/SocialWidget.vue'
</script>

<style lang="scss" scoped>
.hero {
  display: grid;
  grid-template-columns: 1fr minmax(auto, 640px);
  align-content: center;
  align-items: end;
  min-height: calc(100vh - 96px);
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    justify-items: center;
    min-height: calc(100vh - 80px);
  }
  &__title {
    margin: 110px 0;
    @media screen and (max-width: 768px) {
      margin: 0px;
      text-align: center;
    }
    span {
      &:first-child {
        display: inline-block;
        //transform: translateX(200%);
        overflow: hidden;
      }
      &:last-child {
        display: block;
        //transform: translateX(-200%);
        text-overflow: initial;
      }
    }
  }
  &__image {
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
