<template>
  <header class="header" id="#header">
    <div class="header__logo">
      <RouterLink to="/">
        <picture>
          <source srcset="@/assets/img/logo.webp, @/assets/img/logo@2x.webp 2x" type="image/webp" />
          <img
            src="@/assets/img/logo.png"
            srcset="@/assets/img/logo.png, @/assets/img/logo@2x.png 2x"
            alt="logo"
          />
        </picture>
      </RouterLink>
    </div>
    <nav class="header__navbar">
      <ul class="header__navbar_links">
        <li v-for="(element, i) of menu" :key="i">
          <a :href="`#${element}`">
            {{ element }}
          </a>
        </li>
      </ul>
      <button
        class="header__dropdown_open"
        title="dropdown menu opening"
        v-if="!isMobileMenuOpen"
        @click="isMobileMenuOpen = true"
      >
        <ui-open />
      </button>
    </nav>
    <Transition name="dropdown" :duration="700">
      <div class="header__dropdown_wrapper" v-if="isMobileMenuOpen">
        <div class="header__dropdown_overlay" @click="isMobileMenuOpen = false">
          <nav class="header__dropdown" @click.stop v-scroll-lock="isMobileMenuOpen">
            <button
              class="header__dropdown_close"
              title="dropdown menu closing"
              @click="isMobileMenuOpen = false"
            >
              <ui-close color="white" />
            </button>
            <ul>
              <li v-for="(element, i) of menu" :key="i">
                <a :href="`#${element}`" @click="isMobileMenuOpen = false">
                  {{ element }}
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </Transition>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import uiClose from '@/components/ui/Close.vue'
import uiOpen from '@/components/ui/MenuOpen.vue'

const isMobileMenuOpen = ref(false)

const menu = ['about', 'skills', 'projects', 'contact']
</script>

<style lang="scss" scoped>
.header {
  align-items: center;
  padding: 1.5rem 0;
  margin-bottom: -1px;
  z-index: 70;
  &__logo {
    grid-column: 2;
    a {
      img {
        display: block;
        height: 48px;
        aspect-ratio: auto 48 / 125;
        max-width: 100%;
        transition: transform 0.35s cubic-bezier(0.23, 0.24, 0, 0.99);
        @media (any-pointer: fine) {
          &:hover {
            transform: scale(1.05);
            transition: transform 0.35s cubic-bezier(0.23, 0.24, 0, 0.99);
          }
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
          transition: width 0.35s cubic-bezier(0.23, 0.24, 0, 0.99);
        }
        @media (any-pointer: fine) {
          &:hover {
            cursor: pointer;
            &::after {
              width: 100%;
              transition: width 0.35s cubic-bezier(0.23, 0.24, 0, 0.99);
            }
          }
          a {
            &:hover {
              color: inherit;
            }
          }
        }
      }
      @media screen and (max-width: 768px) {
        display: none;
      }
    }
  }
  &__dropdown {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    height: 100%;
    width: 80%;
    font-size: 1.5rem;
    background-color: var(--color-black);
    color: var(--color-white);
    padding: 1.5rem 1.5rem 1.5rem 4.5rem;
    overflow-y: auto;
    @media screen and (max-width: 400px) {
      width: 100%;
    }
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
    &_overlay {
      position: fixed;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: flex-end;
      z-index: 80;
    }
    &_open,
    &_close {
      background: transparent;
      height: 32px;
      width: 32px;
      border: none;
      cursor: pointer;
    }
    &_open {
      display: none;
      @media screen and (max-width: 768px) {
        display: block;
      }
    }
    &_close {
      display: block;
    }
  }
}

.header__dropdown,
.header__dropdown_overlay {
  transition: all 0.5s ease;
}

.dropdown-enter-active .header__dropdown,
.dropdown-leave-active .header__dropdown_overlay {
  transition-delay: 0.2s;
}

.dropdown-enter-from .header__dropdown_overlay,
.dropdown-leave-to .header__dropdown_overlay {
  opacity: 0;
}

.dropdown-enter-from .header__dropdown,
.dropdown-leave-to .header__dropdown {
  -webkit-transform: translateX(100px);
  transform: translateX(100px);
  opacity: 0;
}
</style>
