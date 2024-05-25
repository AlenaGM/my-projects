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
    <path
      fill="#1f1f1f"
      d="M6.94 5a2 2 0 1 1-4-.002a2 2 0 0 1 4 .002M7 8.48H3V21h4zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91z"
    />
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
