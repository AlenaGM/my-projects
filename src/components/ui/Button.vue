<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <button
    v-if="type === 'submit'"
    class="btn"
    :class="[
      'btn',
      {
        btn_darkprimary: color === 'dark-primary',
        btn_secondary: color === 'secondary',
        btn_lightgray: color === 'light-gray',
        btn_white: color === 'white',
        btn_fullwidth: mobileFullWidth,
        btn_disabled: disabled
      }
    ]"
  >
    <slot />
  </button>
  <router-link
    v-else
    :to="to"
    class="btn"
    :class="[
      'btn',
      {
        btn_darkprimary: color === 'dark-primary',
        btn_secondary: color === 'secondary',
        btn_lightgray: color === 'light-gray',
        btn_white: color === 'white',
        btn_fullwidth: mobileFullWidth,
        btn_disabled: disabled
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
.btn {
  padding: 0 40px;
  opacity: 1;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  font-family: var(--font-text);
  font-size: 13px;
  line-height: 2em;
  font-weight: 700;
  height: 56px;
  white-space: nowrap;
  text-decoration: none;
  letter-spacing: -0.01em;
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
  &:hover {
    opacity: 0.8;
    color: var(--color-red);
    border: 2px solid var(--color-red);
    background-color: transparent;
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
    opacity: 0.6;
    pointer-events: none;
  }
}
</style>
