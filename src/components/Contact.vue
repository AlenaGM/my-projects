<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import SocialMedia from './SocialMedia.vue'
import ContactForm from './ContactForm.vue'
</script>

<template>
  <div class="contact">
    <i id="contact" />
    <h2>Get In Touch</h2>
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
  h2::after {
    background-image: url('@/assets/img/contact-black.png');
  }
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
      gap: 40px;
    }
  }
  &__info p:last-of-type {
    margin-bottom: 4rem;
    @media screen and (max-width: 768px) {
      margin-bottom: 24px;
    }
  }
}
</style>
