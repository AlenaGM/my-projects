<template>
  <header class="header" id="#header">
    <div class="header__logo">
      <a href="#">
        <picture>
          <source srcset="@/assets/img/logo.webp, @/assets/img/logo@2x.webp 2x" type="image/webp" />
          <img
            src="@/assets/img/logo.png"
            srcset="@/assets/img/logo.png, @/assets/img/logo@2x.png 2x"
            alt="logo"
          />
        </picture>
      </a>
    </div>
    <nav class="header__navbar">
      <ul class="header__navbar_links">
        <li v-for="(element, i) of menu" :key="i">
          <a :href="element.path">
            {{ element.name }}
          </a>
        </li>
      </ul>
      <button
        class="header__dropdown_open"
        title="dropdown menu opening"
        v-if="!isOpenedMobileMenu"
        @click="isOpenedMobileMenu = true"
      >
        <font-awesome-icon :icon="['fas', 'bars-staggered']" />
      </button>
    </nav>
    <nav
      class="header__dropdown"
      v-if="isOpenedMobileMenu"
      v-click-away="onClickAway"
      v-scroll-lock="isOpenedMobileMenu"
    >
      <button
        class="header__dropdown_close"
        title="dropdown menu closing"
        @click="isOpenedMobileMenu = false"
      >
        X
      </button>
      <ul>
        <li v-for="(element, i) of menu" :key="i">
          <a :href="element.path" @click="isOpenedMobileMenu = false">
            {{ element.name }}
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
import { flattenDiagnosticMessageText } from 'typescript'
import { ref } from 'vue'

const isOpenedMobileMenu = ref(false)

//const onClickAway = () => {
//  isOpenedMobileMenu.value = false
//}

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
    name: 'Projects',
    path: '#projects'
  },
  {
    name: 'Contact',
    path: '#contact'
  }
]
</script>

<style lang="scss" scoped>
.header {
  align-items: center;
  padding: 1.5rem 0;
  margin-bottom: -1px;
  z-index: 90;
  &__logo {
    grid-column: 2;
    a {
      img {
        display: block;
        height: 48px;
        aspect-ratio: auto 48 / 125;
        max-width: 100%;
        transition: transform 0.35s ease;
        &:hover {
          transform: scale(1.05);
          transition: transform 0.35s ease;
        }
        @media screen and (max-width: 768px) {
          height: 32px;
        }
      }
    }
  }
  &__navbar {
    grid-column: 3;
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
          transition: width 0.35s ease;
        }
        &:hover {
          cursor: pointer;
          &::after {
            width: 100%;
            transition: width 0.35s ease;
          }
        }
        a {
          &:hover {
            color: inherit;
          }
        }
      }
      @media screen and (max-width: 768px) {
        display: none;
      }
    }
  }
  &__dropdown {
    display: none;
    @media screen and (max-width: 768px) {
      position: fixed;
      right: 0;
      top: 0;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      height: 100%;
      min-height: 100vh;
      width: 80vw;
      font-size: 1.5rem;
      background-color: var(--color-black);
      color: var(--color-white);
      padding: 1.5rem 1.5rem 1.5rem 4.5rem;
      ul {
        height: 100%;
        width: 100%;
        overflow: auto;
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
    &_open,
    &_close {
      display: none;
      @media screen and (max-width: 768px) {
        display: flex;
        justify-content: flex-end;
        align-items: flex-start;
        height: 32px;
        font-size: 2rem;
        border: none;
        background-color: transparent;
      }
    }
    &_open {
      color: var(--color-black);
    }
    &_close {
      color: var(--color-white);
    }
  }
}
</style>
