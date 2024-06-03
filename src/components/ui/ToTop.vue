<template>
  <div class="to-top">
    <RouterLink to="/">
      <label>back to top</label>
      <span></span>
    </RouterLink>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

let toTopAnimCtx

onMounted(() => {
  toTopAnimCtx = gsap.context(() => {
    gsap.from('.to-top', {
      scrollTrigger: {
        trigger: '.about',
        start: 'bottom bottom',
        toggleActions: 'play none none reverse'
      },
      autoAlpha: 0,
      opacity: 0,
      y: '160px',
      duration: 1,
      ease: 'back.out(3)'
    })
  })
})

onUnmounted(() => {
  toTopAnimCtx.revert()
})
</script>

<style lang="scss" scoped>
.to-top {
  position: fixed;
  right: 0.5rem;
  bottom: 1.5rem;
  transition: transform 0.35s cubic-bezier(0.23, 0.24, 0, 0.99);
  z-index: 60;
  &_hover {
    transform: translateY(-23px);
  }
  a {
    position: relative;
    display: flex;
    width: 40px;
    transform: rotate(270deg);
    padding-bottom: 10px;
    label {
      cursor: pointer;
      font-size: 13px;
      white-space: nowrap;
      color: var(--color-text);
      transition: color 0.35s cubic-bezier(0.23, 0.24, 0, 0.99);
    }
    span {
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
        transition: all 0.35s cubic-bezier(0.23, 0.24, 0, 0.99);
      }
      &::before {
        top: 0;
      }
      &::after {
        bottom: 0;
      }
    }
  }
  @media (any-pointer: fine) {
    &:hover {
      transform: translateY(-3px) !important;
      transition: transform 0.35s cubic-bezier(0.23, 0.24, 0, 0.99);
      a {
        span {
          &::before {
            height: 23.5px;
            transform: rotate(-43deg);
            background-color: var(--color-hover);
            transition: all 0.35s cubic-bezier(0.23, 0.24, 0, 0.99);
          }
          &::after {
            height: 23.5px;
            transform: rotate(43deg);
            background-color: var(--color-hover);
            transition: all 0.35s cubic-bezier(0.23, 0.24, 0, 0.99);
          }
        }
        label {
          color: var(--color-hover);
          transition: color 0.35s cubic-bezier(0.23, 0.24, 0, 0.99);
        }
      }
    }
  }
  @media (any-pointer: coarse) {
    a {
      span {
        &::before {
          height: 23.5px;
          transform: rotate(-43deg);
        }
        &::after {
          height: 23.5px;
          transform: rotate(43deg);
        }
      }
    }
  }
  @media screen and (max-width: 576px) {
    a {
      label {
        display: none;
      }
      span {
        left: 1rem;
        &::before,
        &::after {
          background-color: var(--color-hover);
        }
        &::before {
          height: 23.5px;
          transform: rotate(-43deg);
        }
        &::after {
          height: 23.5px;
          transform: rotate(43deg);
        }
      }
    }
  }
}
</style>
