<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const tlFooter = gsap.timeline({
  scrollTrigger: {
    trigger: '.contact',
    start: 'top 50%',
    end: 'bottom 80%',
    scrub: 1
  }
})

onMounted(() => {
  tlFooter.to('.social a', {
    stagger: 0.3,
    autoAlpha: 0,
    xPercent: 100
  })

  gsap.set('.footer__to-top', {
    opacity: 1
  })

  gsap.from('.footer__to-top', {
    scrollTrigger: {
      trigger: '.about',
      start: 'bottom bottom',
      toggleActions: 'play none play reverse'
    },
    autoAlpha: 0,
    opacity: 0,
    y: '160px',
    duration: 1,
    ease: 'back.out(2.5)'
  })
})

onUnmounted(() => {
  tlFooter.revert()
})
</script>

<template>
  <footer class="footer">
    <div class="footer__content">
      <div class="tech-text">
        ©️ 2023 Alena G., My portfolio is
        <a
          class="tech-text footer__content_link"
          href="https://github.com/AlenaGM/my-projects"
          role="link"
          aria-label="open source"
          target="_blank"
          rel="noreferrer noopener"
        >
          open source</a
        >
      </div>
      <div class="footer__to-top">
        <a href="#" aria-label="#">
          <label>back to top</label>
          <span class="footer__to-top_lines"></span>
          <font-awesome-icon :icon="['fas', 'chevron-up']" class="footer__to-top_icon" />
        </a>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  &__content {
    grid-column: 2;
    display: grid;
    align-items: center;
    padding: 1.5rem 0;
    &_link {
      font-weight: normal;
      text-transform: none;
    }
    @media screen and (max-width: 768px) {
      justify-items: center;
    }
    @media screen and (max-width: 500px) {
      justify-items: left;
      margin-right: 40px;
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
      z-index: 60;
      transition: transform 0.25s cubic-bezier(0.23, 0.24, 0, 0.99);
      &:hover {
        transform: translateY(-3px);
        transition: transform 0.25s cubic-bezier(0.23, 0.24, 0, 0.99);
      }
      a {
        position: relative;
        display: flex;
        width: 40px;
        transform: rotate(270deg);
        padding-bottom: 10px;
        color: var(--color-text);
        transition: 0.25s cubic-bezier(0.23, 0.24, 0, 0.99);
        @media (hover: hover) {
          &:hover,
          &:focus {
            color: var(--color-hover);
            .footer__to-top_lines {
              &::before {
                height: 23.5px;
                transform: rotate(-43deg);
                background-color: var(--color-hover);
                transition: 0.25s cubic-bezier(0.23, 0.24, 0, 0.99);
              }
              &::after {
                height: 23.5px;
                transform: rotate(43deg);
                background-color: var(--color-hover);
                transition: 0.25s cubic-bezier(0.23, 0.24, 0, 0.99);
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
          transition: 0.25s cubic-bezier(0.23, 0.24, 0, 0.99);
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
  @media (any-pointer: coarse), (max-width: 1024px) {
    &__to-top {
      position: fixed;
      right: 0.75rem;
      bottom: 0.75rem;
      z-index: 60;
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
