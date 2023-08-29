<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { RouterLink } from 'vue-router'
import { ref } from 'vue'

const isOpenedMobileMenu = ref(false)

const onClickAway = () => {
  isOpenedMobileMenu.value = false
}

const menu = [
  {
    name: 'Work',
    path: '/'
  },
  {
    name: 'About',
    path: '/about'
  },
  {
    name: 'Blog',
    path: '/blog'
  },
  {
    name: 'Contact',
    path: '/contact'
  }
]
</script>

<template>
  <header class="header">
    <div class="header__logo">
      <RouterLink to="/"><img src="@/assets/images/logo.png" alt="logo" /> Alëna G. </RouterLink>
    </div>
    <nav class="header__menu">
      <ul class="header__menu_links">
        <li>
          <RouterLink v-for="(element, i) of menu" :to="element.path" :key="i">
            {{ element.name }}
          </RouterLink>
        </li>
      </ul>
      <div class="header__menu_open" v-if="!isOpenedMobileMenu" @click="isOpenedMobileMenu = true">
        <img src="@/assets/images/open.svg" alt="menu opening icon" />
      </div>
    </nav>
    <div
      class="header__dropdown"
      v-if="isOpenedMobileMenu"
      v-click-away="onClickAway"
      v-scroll-lock="isOpenedMobileMenu"
    >
      <div class="header__menu_close" @click="isOpenedMobileMenu = false">
        <img src="@/assets/images/close.svg" alt="menu closing icon" />
      </div>
      <ul>
        <li v-for="(element, i) of menu" :key="i">
          <RouterLink :to="element.path" @click="isOpenedMobileMenu = false">
            {{ element.name }}
          </RouterLink>
        </li>
      </ul>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  display: grid;
  grid-template-columns: minmax(1.5rem, 1fr) minmax(160px, auto) minmax(auto, 1120px) minmax(
      1.5rem,
      1fr
    );
  padding: 1.5rem 0;
  justify-content: space-between;
  align-items: center;
  margin-bottom: -1px;
  z-index: 3;
  &__logo {
    grid-column: 2;
    a {
      display: flex;
      align-items: center;
      font-family: var(--font-title);
      font-weight: 700;
      font-size: 1.5rem;
      color: var(--color-black);
      letter-spacing: -0.04em;
      cursor: pointer;
      &:hover {
        text-decoration: none;
        color: var(--color-hover);
      }
      img {
        display: block;
        height: 32px;
        max-width: 100%;
        margin-right: 0.5rem;
      }
    }
  }
  &__menu {
    grid-column: 3;
    display: inline-flex;
    justify-content: flex-end;
    flex-wrap: wrap;
    &_links {
      a {
        display: inline-block;
        margin-left: 2.5rem;
      }
      @media screen and (max-width: 767px) {
        display: none;
      }
      .router-link-exact-active {
        color: var(--color-red);
      }
    }
    &_open,
    &_close {
      display: none;
      @media screen and (max-width: 767px) {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        min-height: 48px;
        min-width: 48px;
      }
    }
    &_open {
      background-color: var(--color-black);
    }
    &_close {
      background-color: var(--color-white);
    }
  }
  &__dropdown {
    display: none;
    @media screen and (max-width: 767px) {
      display: flex;
      position: fixed;
      top: 0;
      right: 0;
      height: 100vh;
      width: 80vw;
      font-size: 18px;
      background-color: var(--color-black);
      color: var(--color-white);
      padding: 1.5rem 1.5rem 1.5rem 4.5rem;
      flex-direction: column;
      align-items: flex-end;
      ul {
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        margin-top: 40%;
        li:not(:last-of-type) {
          margin-bottom: 1.5rem;
        }
      }
    }
  }
}
</style>
