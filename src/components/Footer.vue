<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import Contact from '@/components/Contact.vue'
</script>

<template>
  <footer class="footer">
    <div class="footer__content">
      <Contact />
      <div class="footer__down">
        <div class="tech-text">
          ©️ 2023 Alena G.,
          <a
            class="tech-text footer__down_link"
            href="https://github.com/AlenaGM/my-projects"
            aria-label="github"
            target="_blank"
            rel="noreferrer noopener"
          >
            My portfolio is open source</a
          >
        </div>
        <div class="footer__to-top">
          <a href="#">
            <label>back to top</label>
            <span class="footer__to-top_lines"></span>
            <font-awesome-icon :icon="['fas', 'chevron-up']" class="footer__to-top_icon" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  &__content {
    grid-column: 2;
    display: grid;
  }

  &__down {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    color: var(--color-text);
    padding: 0.5rem 0;
    align-items: center;
    @media screen and (max-width: 1023px) {
      grid-template-columns: 1fr;
    }
    &_link {
      font-weight: normal;
      text-transform: none;
    }
    @media screen and (max-width: 768px) {
      justify-items: center;
    }
  }

  &__to-top {
    position: fixed;
    right: 0.5rem;
    bottom: 1.5rem;
    z-index: 80;
    &:hover {
      transform: translateY(-3px);
    }
    a {
      position: relative;
      display: flex;
      width: 40px;
      transform: rotate(270deg);
      color: var(--color-text);
      white-space: nowrap;
      padding-bottom: 10px;
      font-size: 13px;
      &:hover {
        color: var(--color-hover);
      }
    }
    &_icon {
      display: none;
    }
    &_lines {
      display: block;
      width: 14px;
      height: 40px;
      position: absolute;
      left: 80px;
      bottom: 0;
      &::before,
      &::after {
        content: '';
        background-color: var(--color-text);
        width: 2px;
        height: 50%;
        position: absolute;
        right: 0;
        transition: 0.2s cubic-bezier(0.23, 0.24, 0, 0.99);
      }
      &::before {
        top: 0;
      }
      &::after {
        bottom: 0;
      }
    }
    &:hover {
      .footer__to-top_lines {
        &::before {
          height: 23.5px;
          transform: rotate(-43deg);
          background-color: var(--color-hover);
        }
        &::after {
          height: 23.5px;
          transform: rotate(43deg);
          background-color: var(--color-hover);
        }
      }
    }
  }

  @media screen and (pointer: coarse) and (max-width: 1024px) {
    &__to-top {
      position: fixed;
      right: 0.75rem;
      bottom: 0.75rem;
      z-index: 80;
      height: 40px;
      width: 40px;
      background-color: var(--color-white);
      border-radius: 100px;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: var(--box-shadow);
      a {
        position: relative;
        display: flex;

        font-size: 1.75rem;
        color: var(--color-primary);
      }
      &_icon {
        display: block;
      }
      &_lines,
      label {
        display: none;
      }
    }
  }
}
</style>
