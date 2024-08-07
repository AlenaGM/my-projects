<template>
  <section class="contact" id="contact">
    <h2><span class="h2-subtitle">Get In Touch</span><span>Contact</span></h2>
    <div class="contact__container">
      <div class="contact__info">
        <p>
          Let's connect! If you'd like to collaborate, have a question, or just want to chat, please
          don't hesitate to send a message.
        </p>
        <p>Or find me online:</p>
        <div class="contact__social">
          <a
            href="https://www.linkedin.com/in/alena-guillaume/"
            aria-label="linkedin"
            rel="noreferrer noopener"
          >
            <ui-linkedin />
          </a>
          <a href="https://github.com/AlenaGM" aria-label="github" rel="noreferrer noopener">
            <ui-github
          /></a>
          <a href="https://t.me/alenagm" aria-label="telegram" rel="noreferrer noopener">
            <ui-telegram />
          </a>
          <a
            href="https://www.instagram.com/alena.guillaume/"
            aria-label="instagram"
            rel="noreferrer noopener"
          >
            <ui-instagram
          /></a>
        </div>
      </div>
      <ContactForm />
    </div>
  </section>
</template>

<script setup>
import ContactForm from '@/components/ContactForm.vue'
import uiLinkedin from '@/components/ui/Linkedin.vue'
import uiGithub from '@/components/ui/Github.vue'
import uiInstagram from '@/components/ui/Instagram.vue'
import uiTelegram from '@/components/ui/Telegram.vue'
</script>

<style lang="scss" scoped>
.contact {
  margin-bottom: calc(var(--section-gap) * 0.5);
  min-height: calc(100vh - 367px);
  @media screen and (max-width: 1024px) {
    min-height: auto;
  }
  &__container {
    display: grid;
    grid-template-columns: repeat(2, minmax(auto, 610px));
    gap: 4rem;
    @media screen and (max-width: 1024px) {
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
    gap: 1rem;
    @media screen and (max-width: 768px) {
      gap: 0.75rem;
    }
    @media screen and (max-width: 576px) {
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
