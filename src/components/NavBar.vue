<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { ref } from 'vue'

const isOpenedMobileMenu = ref(false)

const onClickAway = () => {
  isOpenedMobileMenu.value = false
}

const menu = [
  {
    name: 'About',
    path: '#about'
  },
  {
    name: 'Skills',
    path: '#skills'
  },
  {
    name: 'Work',
    path: '#work'
  },
  {
    name: 'Contact',
    path: '#contact'
  }
]
</script>

<template>
  <div class="header__navbar navbar">
    <div class="navbar__logo">
      <a href="#">
        <!--<img src="@/assets/images/logo.png" alt="logo" />-->
        AG.
      </a>
    </div>
    <nav class="navbar__menu">
      <ul class="navbar__menu_links">
        <li v-for="(element, i) of menu" :key="i">
          <a :href="element.path">
            {{ element.name }}
          </a>
        </li>
      </ul>
      <div class="navbar__menu_open" v-if="!isOpenedMobileMenu" @click="isOpenedMobileMenu = true">
        <img src="@/assets/images/open.svg" alt="menu opening icon" />
      </div>
    </nav>
    <div
      class="navbar__dropdown"
      v-if="isOpenedMobileMenu"
      v-click-away="onClickAway"
      v-scroll-lock="isOpenedMobileMenu"
    >
      <div class="navbar__menu_close" @click="isOpenedMobileMenu = false">
        <img src="@/assets/images/close.svg" alt="menu closing icon" />
      </div>
      <ul>
        <li v-for="(element, i) of menu" :key="i">
          <a :href="element.path" @click="isOpenedMobileMenu = false">
            {{ element.name }}
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.navbar {
  display: grid;
  grid-column: 2;
  grid-template-columns: minmax(160px, auto) minmax(auto, 1120px);
  gap: 2.5rem;
  align-items: center;
  padding: 1.5rem 0;
  margin-bottom: -1px;
  z-index: 100;
  &__logo {
    grid-column: 1;
    a {
      display: flex;
      align-items: center;
      font-size: 1.5rem;
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
    grid-column: 2;
    display: flex;
    justify-content: flex-end;
    &_links {
      display: flex;
      flex-wrap: wrap;
      li {
        display: inline-block;
        &:not(:last-of-type) {
          margin-right: 2.5rem;
        }
        &::after {
          content: '';
          background: var(--color-black);
          position: absolute;
          bottom: -2px;
          left: 0;
          height: 2px;
          width: 0;
          transition: width 0.25s ease;
        }
        &:hover {
          cursor: pointer;
          &::after {
            width: 100%;
            transition: width 0.25s ease;
          }
        }
        a:hover {
          color: inherit;
        }
      }
      @media screen and (max-width: 767px) {
        display: none;
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
      font-size: 1.5rem;
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
        margin-top: 15vh;
        li {
          &:not(:last-of-type) {
            margin-bottom: 1.5rem;
          }
        }
      }
    }
  }
}
</style>
