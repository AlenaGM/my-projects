<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import SocialMedia from './SocialMedia.vue'
import ContactForm from './ContactForm.vue'
</script>

<template>
  <section class="contact">
    <h2>Contact</h2>
    <div class="contact__container">
      <div>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia magnam veniam, ipsa sunt
          delectus reiciendis, exercitationem esse ad minima quibusdam aliquid aut facere non sint
          culpa blanditiis animi, velit consequatur.
        </p>
        <SocialMedia />
      </div>
      <ContactForm />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.contact {
  &__container {
    display: grid;
    grid-template-columns: repeat(2, minmax(auto, 610px));
    gap: var(--section-gap-mobile);
    @media screen and (max-width: 1023px) {
      display: flex;
      flex-direction: column;
    }
  }
}
</style>
