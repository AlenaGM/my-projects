<template>
  <section class="notfound">
    <div class="notfound__content">
      <h1 class="notfound__content_title">404 Error</h1>
      <div>
        <p>The page you are looking for does not exist.</p>
        <p>It might have been moved or deleted.</p>
      </div>
      <RouterLink to="/">
        <ui-button type="link" to="#" mobileFullWidth role="link" aria-label="back to home page"
          >Back home</ui-button
        >
      </RouterLink>
    </div>
    <div class="notfound__image">
      <picture>
        <source
          srcset="@/assets/img/notfound.webp, @/assets/img/notfound@2x.webp 2x"
          type="image/webp"
        />
        <img
          src="@/assets/img/notfound.png"
          srcset="@/assets/img/notfound.png, @/assets/img/notfound@2x.png 2x"
          alt="404 page"
        />
      </picture>
    </div>
  </section>
</template>

<script setup>
import uiButton from '@/components/ui/Button.vue'
</script>

<style lang="scss" scoped>
.notfound {
  grid-column: 2;
  display: grid;
  grid-template-columns: 1fr minmax(auto, 560px);
  align-content: center;
  align-items: center;
  margin: 0;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    justify-items: center;
  }
  &__content {
    display: grid;
    @media screen and (max-width: 768) {
      justify-items: center;
    }
    &_title {
      color: var(--color-primary);
      font-family: var(--font-title);
      font-weight: 700;
      font-size: calc(2.375rem + 1vw);
      line-height: 1;
      letter-spacing: -4px;
      margin: 1.5rem 0;
      @media screen and (max-width: 768) {
        margin: 1rem 0;
        font-size: 32px;
        letter-spacing: -2px;
        text-align: center;
      }
    }
  }
  &__image {
    overflow: hidden;
    max-width: 560px;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
