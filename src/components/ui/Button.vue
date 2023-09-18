<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <button
    v-if="type === 'submit'"
    :class="[
      'button',
      {
        button_black: color === 'black',
        button_primary: color === 'primary',
        button_white: color === 'white',
        button_fullwidth: mobileFullWidth,
        button_disabled: disabled
      }
    ]"
  >
    <slot />
  </button>
  <a
    v-else
    :href="to"
    :class="[
      'button',
      {
        button_black: color === 'black',
        button_primary: color === 'primary',
        button_white: color === 'white',
        button_fullwidth: mobileFullWidth,
        button_disabled: disabled
      }
    ]"
  >
    <slot />
  </a>
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
    default: 'black'
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
  cursor: pointer;
  &:not(:last-of-type) {
    margin: 0 1.5rem 0 0;
    @media screen and (max-width: 768px) {
      margin: 0 0 1.5rem 0;
    }
  }
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    border: solid 1.75px transparent;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
  &:hover {
    transform: translate(-8px, -8px);
    &::after {
      border: solid 1.75px var(--color-black);
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
  &_black {
    color: var(--color-white);
    background: var(--color-black);
    border: 1.75px solid var(--color-black);
  }
  &_primary {
    color: var(--color-white);
    background: var(--color-primary);
    border: 1.75px solid var(--color-primary);
  }
  &_white {
    color: var(--color-black);
    background: var(--color-white);
    border: 1.75px solid var(--color-black);
  }
  &_fullwidth {
    @media screen and (max-width: 500px) {
      width: 100%;
    }
  }
  &_disabled {
    color: var(--color-gray);
    background: transparent;
    border: 1.75px solid var(--color-gray);
    pointer-events: none;
  }
}
</style>
