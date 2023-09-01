<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <button
    v-if="type === 'submit'"
    :class="[
      'button',
      {
        button_darkprimary: color === 'dark-primary',
        button_secondary: color === 'secondary',
        button_lightgray: color === 'light-gray',
        button_white: color === 'white',
        button_fullwidth: mobileFullWidth,
        button_disabled: disabled
      }
    ]"
  >
    <slot />
  </button>
  <router-link
    v-else
    :to="to"
    :class="[
      'button',
      {
        button_darkprimary: color === 'dark-primary',
        button_secondary: color === 'secondary',
        button_lightgray: color === 'light-gray',
        button_white: color === 'white',
        button_fullwidth: mobileFullWidth,
        button_disabled: disabled
      }
    ]"
  >
    <slot />
  </router-link>
</template>

<script setup>
// eslint-disable-next-line no-unused-vars
const props = defineProps({
  background: {
    type: String,
    required: false
  },
  color: {
    type: String,
    default: 'dark-primary'
  },
  type: {
    type: String,
    default: 'button'
  },
  to: {
    type: String,
    required: false
  },
  mobileFullWidth: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  }
})
</script>

<style lang="scss" scoped>
.button {
  padding: 13px 40px;
  opacity: 1;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  font-family: var(--font-text);
  font-size: 13px;
  line-height: 2em;
  font-weight: 700;
  //height: 56px;
  white-space: nowrap;
  text-decoration: none;
  letter-spacing: -0.01em;
  position: relative;
  transition:
    color 0.2s ease-in-out,
    background-color 0.2s ease-in-out,
    border-color 0.2s ease-in-out;
  cursor: pointer;
  &:not(:last-of-type) {
    margin: 0 1.5rem 0 0;
    @media screen and (max-width: 767px) {
      margin: 0 0 1.5rem 0;
    }
  }
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    border: solid 2px var(--color-black);
    width: 100%;
    height: 100%;
    z-index: -1;
  }
  &:hover {
    transform: translate(-8px, -8px);
    &::after {
      top: 8px;
      left: 8px;
    }
  }
  &:active {
    top: 8px;
    left: 8px;
    &::after {
      top: 0;
      left: 0;
    }
  }
  &_darkprimary {
    color: var(--color-white);
    background: var(--color-black);
    border: 2px solid var(--color-black);
  }
  &_secondary {
    color: var(--color-white);
    background: var(--color-red);
    border: 2px solid var(--color-red);
  }
  &_lightgray {
    color: var(--color-dark-gray);
    background: var(--color-light-gray);
    border: 2px solid var(--color-light-gray);
  }
  &_white {
    color: var(--color-dark-gray);
    background: var(--color-white);
    border: 2px solid var(--color-dark-gray);
  }
  &_fullwidth {
    @media screen and (max-width: 767px) {
      width: 100%;
    }
  }
  &_disabled {
    color: var(--color-black);
    background: var(--color-white);
    border: 2px solid var(--color-black);
    pointer-events: none;
  }
}
</style>
