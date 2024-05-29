<template>
  <div class="progressbar"></div>
</template>

<script setup></script>

<style lang="scss" scoped>
.progressbar {
  //display: none;
  position: fixed;
  top: 0;
  left: 0;
  height: 5px;
  width: 100%;
  background-color: var(--color-primary);
  z-index: 60;
  @media screen and (max-width: 1024px) {
    display: block;
  }
}
</style>
