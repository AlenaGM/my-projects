<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import Contact from '@/components/Contact.vue'
</script>

<template>
  <footer class="footer">
    <div class="footer__content">
      <Contact />
      <div class="footer__down">
        <div>©️ Alena G., 2023</div>
        <div class="footer__to-top">
          <a href="#">
            back to top
            <span class="footer__to-top_lines"></span>
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
    grid-template-columns: repeat(2, 1fr);
    color: var(--color-text);
    padding: 0.5rem 0;
    align-items: center;
    @media screen and (max-width: 1023px) {
      grid-template-columns: 1fr;
    }
  }
  &__to-top {
    position: fixed;
    right: 0.5rem;
    bottom: 1.5rem;
    z-index: 10;
    &:hover {
      transform: translateY(-3px);
    }
    @media screen and (min-width: 1600px) {
      right: calc((100vw - 1280px) * 0.5 + 0.5rem);
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
    &_text {
      white-space: nowrap;
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
}
</style>
