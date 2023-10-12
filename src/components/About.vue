<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import uiButton from './ui/Button.vue'
</script>

<template>
  <section class="about">
    <i id="about" />
    <h2>Who I Am <span>About me</span></h2>
    <div class="about__container">
      <div class="about__image">
        <picture>
          <source
            srcset="@/assets/img/alena-dev.webp, @/assets/img/alena-dev@2x.webp 2x"
            type="image/webp"
          />
          <img
            src="@/assets/img/alena-dev.png"
            srcset="@/assets/img/alena-dev.png, @/assets/img/alena-dev@2x.png 2x"
            alt="me coding"
          />
        </picture>
      </div>
      <div class="section-intro">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, dolor rerum! Rem
          inventore beatae dicta nemo vero, dolorum rerum vitae mollitia qui obcaecati facere
          aperiam sed nulla? Voluptatibus, sapiente consectetur?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, dolor rerum! Rem
          inventore beatae dicta nemo vero, dolorum rerum vitae mollitia qui obcaecati facere
          aperiam sed nulla? Voluptatibus, sapiente consectetur?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, dolor rerum! Rem
          inventore beatae dicta nemo vero, dolorum rerum vitae mollitia qui obcaecati facere
          aperiam sed nulla? Voluptatibus, sapiente consectetur?
        </p>
        <ui-button
          type="link"
          to="#"
          mobileFullWidth
          role="link"
          aria-label="download my cv"
          target="_blank"
          rel="noreferrer noopener"
          >Download My CV</ui-button
        >
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.about {
  &__container {
    display: grid;
    grid-template-columns: minmax(auto, 420px) 1fr;
    gap: 4rem;
    justify-items: center;
    @media screen and (max-width: 1023px) {
      grid-template-columns: 1fr;
      gap: 40px;
    }
  }
  &__image {
    box-shadow: var(--box-shadow);
    max-width: 420px;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>
