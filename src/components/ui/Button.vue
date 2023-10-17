<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <button
    v-if="type === 'submit' || type === 'button'"
    :class="[
      'button',
      {
        button_black: color === 'black',
        button_red: color === 'red',
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
        button_red: color === 'red',
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
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 13px 40px;
  font-family: var(--font-text);
  font-size: 13px;
  font-weight: 700;
  text-decoration: none;
  line-height: 2em;
  white-space: nowrap;
  letter-spacing: -0.01em;
  transition: transform 0.25s ease-in-out;
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
    transition: all 0.25s ease-in-out;
  }
  @media (hover: hover) {
    &:hover,
    &:focus {
      transform: translate(-8px, -8px);
      transition: transform all 0.25s ease-in-out;
      &::after {
        border-color: initial;
        transform: translate(8px, 8px);
        transition: all 0.25s ease-in-out;
      }
    }
    &:active {
      transition: transform 0.25s ease-in-out;
      transform: translate(8px, 8px);
      &::after {
        transition: all 0.25s ease-in-out;
        transform: translate(-8px, -8px);
      }
    }
    &:focus {
      outline: none;
    }
  }
  &_black {
    color: var(--color-white);
    background: var(--color-black);
    border: 1.75px solid var(--color-black);
    @media (hover: hover) {
      &:hover::after,
      &:focus::after {
        border-color: var(--color-black);
      }
    }
  }
  &_red {
    color: var(--color-white);
    background: var(--color-primary);
    border: 1.75px solid var(--color-primary);
    @media (hover: hover) {
      &:hover::after,
      &:focus::after {
        border-color: var(--color-primary);
      }
    }
  }
  &_fullwidth {
    @media screen and (max-width: 500px) {
      width: 100%;
    }
  }
  &_disabled {
    color: var(--color-gray);
    background: transparent;
    border: var(--border);
    pointer-events: none;
    &:focus {
      border: var(--border);
      outline: none;
      transform: none;
      &::after {
        border: none;
        border-color: inherit;
        top: 0;
        left: 0;
      }
    }
  }
}
</style>
