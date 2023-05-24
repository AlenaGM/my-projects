<script setup>
import { RouterLink, RouterView } from "vue-router";
import { ref } from "vue";
import ContactPopUp from "@/components/ContactPopUp.vue";

const isContactOpen = ref(false);
const clickOnContact = () => {
  isContactOpen.value = true;
};
</script>

<template>
  <header class="header">
    <nav>
      <RouterLink to="/" tabindex="1">Alena G.</RouterLink>
      <a tabindex="2" @click="clickOnContact">Contact</a>
    </nav>
  </header>
  <RouterView />
  <footer class="footer">
    <div>©️ 2023 | AG.</div>
    <div>
      <a
        href="https://www.linkedin.com/in/alena-guillaume/"
        target="_blank"
        rel="noreferrer noopener"
        tabindex="3"
      >
        <font-awesome-icon icon="fa-brands fa-linkedin-in" />
      </a>
      <a
        href="https://github.com/AlenaGM"
        target="_blank"
        rel="noreferrer noopener"
        tabindex="4"
      >
        <font-awesome-icon icon="fa-brands fa-github" />
      </a>
      <a
        href="https://t.me/alenagm"
        target="“_blank”"
        rel="noreferrer noopener"
        tabindex="5"
      >
        <font-awesome-icon icon="fa-brands fa-telegram" />
      </a>
      <a
        href="mailto:alena.guillaume4@gmail.com"
        target="_blank"
        rel="noreferrer noopener"
        tabindex="6"
      >
        <font-awesome-icon icon="fa-solid fa-envelope" />
      </a>
    </div>
  </footer>
  <teleport to="body">
    <ContactPopUp v-if="isContactOpen" @click="isContactOpen = false" />
  </teleport>
</template>

<style lang="scss" scoped>
.header,
.footer {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  line-height: 1.5;
  font-size: 20px;
  font-weight: 600;
  text-transform: capitalize;
}

.header {
  min-height: 50px;
  nav a {
    top: 16px;
    z-index: 3;
    padding: 8px 24px;
    border-radius: 50px;
    background: rgba(52, 62, 77, 0.75);
    backdrop-filter: blur(4px);
    position: fixed;
    &:first-of-type {
      left: 16px;
      cursor: default;
      pointer-events: none;
    }
    &:last-of-type {
      right: 16px;
      @media screen and (max-width: 1024px) {
        display: none;
      }
    }
    &:hover {
      transform: scale(1.1);
    }
  }
}

.footer {
  div {
    position: fixed;
    bottom: 16px;
    z-index: 3;
    padding: 8px 24px;
    border-radius: 50px;
    background: rgba(52, 62, 77, 0.75);
    backdrop-filter: blur(4px);
    &:first-of-type {
      font-size: 16px;
      left: 16px;
      @media screen and (max-width: 1024px) {
        display: none;
      }
    }
    &:last-of-type {
      font-size: 26px;
      right: 16px;
      a {
        &:not(:first-of-type) {
          margin-left: 1rem;
        }
        svg {
          transition: 0.2s;
          &:hover {
            transform: scale(1.2);
            color: var(--color-hover);
          }
        }
        &:last-of-type {
          @media screen and (min-width: 1025px) {
            display: none;
          }
        }
      }
    }
  }
}

.main-wrapper {
  height: 100%;
  display: flex;
  gap: var(--index);
  background-size: cover;
  background-position: center;
}
</style>
