<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import uiButton from './ui/Button.vue'
</script>

<template>
  <section class="about">
    <i id="about" />
    <h2>Who I Am?</h2>
    <div class="about__container">
      <div class="about__image">
        <img src="@/assets/images/alena-dev.jpg" alt="me coding" />
      </div>
      <div>
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
        <ui-button type="link" to="#" mobileFullWidth>Download My CV</ui-button>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.about {
  h2::after {
    background-image: url('@/assets/images/about-black.png');
  }
  &__container {
    display: grid;
    grid-template-columns: minmax(auto, 420px) 1fr;
    gap: 4rem;
    @media screen and (max-width: 1023px) {
      display: flex;
      flex-direction: column;
    }
  }
  &__image {
    position: relative;
    min-height: 525px;
    box-shadow: var(--box-shadow);
    img {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      object-fit: cover;
    }
  }
}
</style>
