<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="64"
    height="64"
    viewBox="0 0 24 24"
    role="img"
    :class="[
      'icon',
      {
        icon_black: color === 'black',
        icon_white: color === 'white'
      }
    ]"
  >
    <path fill="#1f1f1f" d="M3 4h18v2H3zm6 7h12v2H9zm-6 7h18v2H3z" />
  </svg>
</template>

<script setup>
const props = defineProps({
  color: {
    type: String,
    default: 'black'
  }
})
</script>

<style lang="scss" scoped>
.icon {
  width: 100%;
  height: 100%;
  path {
    transition: fill 0.35s ease;
  }
  &_black {
    path {
      fill: var(--color-black);
    }
  }
  &_white {
    path {
      fill: var(--color-white);
    }
  }
  @media (any-pointer: fine) {
    &:hover {
      path {
        fill: var(--color-hover);
        transition: fill 0.35s ease;
      }
    }
  }
}
</style>
