<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import Contact from '@/components/Contact.vue'
</script>

<template>
  <footer class="footer">
    <div class="footer__content">
      <Contact />
      <div class="footer__bottom">
        <div class="tech-text">
          ©️ 2023 Alena G., My portfolio is
          <a
            class="tech-text footer__bottom_link"
            href="https://github.com/AlenaGM/my-projects"
            aria-label="github"
            target="_blank"
            rel="noreferrer noopener"
            tabindex="13"
          >
            open source</a
          >
        </div>
        <div class="footer__to-top">
          <a href="#" tabindex="16">
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
  &__bottom {
    display: grid;
    padding: 0 0 0.5rem;
    align-items: center;
    &_link {
      font-weight: normal;
      text-transform: none;
    }
    @media screen and (max-width: 768px) {
      justify-items: center;
    }
    .tech-text a {
      text-decoration: underline;
      &:focus {
        color: var(--color-primary);
        outline: none;
      }
    }
  }
  @media only screen {
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
        padding-bottom: 10px;
        color: var(--color-text);
        @media (hover: hover) {
          &:hover,
          &:focus {
            color: var(--color-hover);
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
        label {
          cursor: pointer;
          font-size: 13px;
          white-space: nowrap;
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
      &_icon {
        display: none;
      }
    }
  }
  @media (any-pointer: coarse) {
    &__to-top {
      position: fixed;
      right: 0.75rem;
      bottom: 0.75rem;
      z-index: 80;
      height: 40px;
      width: 40px;
      border-radius: 100px;
      background-color: var(--color-white);
      box-shadow: var(--box-shadow);
      a {
        padding: 0;
        margin: 0;
        display: flex;
        align-items: center;
        justify-content: flex-start;
      }
      &_lines,
      label {
        display: none;
      }
      &_icon {
        display: block;
        transform: rotate(-270deg);
        font-size: 1.75rem;
        color: var(--color-primary);
      }
    }
  }
}
</style>
