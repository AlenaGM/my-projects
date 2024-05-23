<template>
  <section class="contact">
    <i id="contact" />
    <h2><span class="h2-subtitle">Get In Touch</span><span>Contact</span></h2>
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
        <div class="contact__social">
          <Linkedin />
          <Github />
          <Telegram />
          <Instagram />
        </div>
      </div>
      <ContactForm />
    </div>
  </section>
</template>

<script setup>
import ContactForm from '@/components/ContactForm.vue'
import Linkedin from '@/components/ui/Linkedin.vue'
import Github from '@/components/ui/Github.vue'
import Instagram from '@/components/ui/Instagram.vue'
import Telegram from '@/components/ui/Telegram.vue'
</script>

<style lang="scss" scoped>
.contact {
  margin-bottom: calc(var(--section-gap) * 0.5);
  min-height: calc(100vh - 367px);
  @media screen and (max-width: 1023px), (orientation: portrait) {
    margin-bottom: calc(var(--section-gap-mobile) * 0.5);
    min-height: auto;
  }
  &__container {
    display: grid;
    grid-template-columns: repeat(2, minmax(auto, 610px));
    gap: 4rem;
    @media screen and (max-width: 1023px), (orientation: portrait) {
      display: flex;
      flex-direction: column;
      gap: 2.5rem;
    }
  }
  &__info p:last-of-type {
    margin-bottom: 4rem;
    @media screen and (max-width: 768px) {
      margin-bottom: 1.5rem;
    }
  }
  &__social {
    display: flex;
    flex-wrap: wrap;
    gap: 18px;
    @media screen and (max-width: 768px) {
      gap: 16px;
    }
    @media screen and (max-width: 576px) {
      gap: 16px;
      justify-content: center;
    }
    a {
      width: 48px;
      height: 48px;
      @media screen and (max-width: 768px) {
        width: 36px;
        height: 36px;
      }
    }
  }
}
</style>
