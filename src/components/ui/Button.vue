<template>
  <button
    v-if="type === 'submit' || type === 'button'"
    :class="[
      'button',
      {
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
        button_fullwidth: mobileFullWidth,
        button_disabled: disabled
      }
    ]"
  >
    <slot />
  </a>
</template>

<script setup>
const props = defineProps({
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
  color: var(--color-white);
  background: var(--color-black);
  border: solid 1.75px transparent;
  transition: transform 0.35s cubic-bezier(0.23, 0.24, 0, 0.99);
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
    bottom: 0;
    right: 0;
    border: solid 1.75px transparent;
    width: 100%;
    height: 100%;
    z-index: -1;
    transition: all 0.35s cubic-bezier(0.23, 0.24, 0, 0.99);
  }
  &:focus-visible {
    border: 2px solid var(--color-primary);
    outline: none;
    transition: border 0.1s ease;
  }
  @media (any-pointer: fine) {
    &:hover {
      transform: translate(-8px, -8px);
      transition: transform 0.35s cubic-bezier(0.23, 0.24, 0, 0.99);
      &::after {
        border-color: var(--color-black);
        transform: translate(8px, 8px);
        transition: all 0.35s cubic-bezier(0.23, 0.24, 0, 0.99);
      }
    }
    &:active {
      transform: translate(0px, 0px);
      transition: transform 0.35s cubic-bezier(0.23, 0.24, 0, 0.99);
      &::after {
        transform: translate(0px, 0px);
        transition: transform 0.35s cubic-bezier(0.23, 0.24, 0, 0.99);
      }
    }
  }
  &_fullwidth {
    @media screen and (max-width: 576px) {
      width: 100%;
    }
  }
  &_disabled {
    color: var(--color-gray);
    background: transparent;
    border: solid 1.75px #eeeeee;
    pointer-events: none;
    &:focus-visible {
      border: solid 1.75px #eeeeee;
      pointer-events: none;
      outline: none;
    }
  }
}
</style>
