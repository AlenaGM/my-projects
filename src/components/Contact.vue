<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import SocialMedia from './SocialMedia.vue'
import ContactForm from './ContactForm.vue'
</script>

<template>
  <div class="contact">
    <i id="contact" />
    <h2>Contact</h2>
    <div class="contact__container">
      <div class="contact__info">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia magnam veniam, ipsa sunt
          delectus reiciendis, exercitationem esse ad minima quibusdam aliquid aut facere non sint
          culpa blanditiis animi, velit consequatur.
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia magnam veniam, ipsa sunt
          delectus reiciendis.
        </p>
        <SocialMedia />
      </div>
      <ContactForm />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.contact {
  margin-bottom: calc(var(--section-gap) * 0.5);
  @media screen and (max-width: 1023px) {
    margin-bottom: calc(var(--section-gap-mobile) * 0.5);
  }
  &__container {
    display: grid;
    grid-template-columns: repeat(2, minmax(auto, 610px));
    gap: 4rem;
    @media screen and (max-width: 1023px) {
      display: flex;
      flex-direction: column;
    }
    @media screen and (max-width: 767px) {
      gap: 2.5rem;
    }
  }
  &__info p:last-of-type {
    margin-bottom: 2.5rem;
    @media screen and (max-width: 767px) {
      margin-bottom: 1.5rem;
    }
  }
}
</style>
