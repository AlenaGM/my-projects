<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import SocialMedia from './SocialMedia.vue'
import ContactForm from './ContactForm.vue'
</script>

<template>
  <section class="contact">
    <div class="contact__info">
      <h2>Contact</h2>
      <div>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia magnam veniam, ipsa sunt
        delectus reiciendis, exercitationem esse ad minima quibusdam aliquid aut facere non sint
        culpa blanditiis animi, velit consequatur.
      </div>
      <SocialMedia />
    </div>
    <ContactForm />
  </section>
</template>

<style lang="scss" scoped>
.contact {
  display: grid;
  grid-template-columns: repeat(2, minmax(auto, 610px));
  //background-color: var(--color-coral-pink);
  gap: var(--section-gap-mobile);
  @media screen and (max-width: 1023px) {
    display: flex;
    flex-direction: column;
  }
}
</style>
