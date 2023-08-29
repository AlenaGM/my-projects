<!-- eslint-disable vue/multi-word-component-names -->
<script setup></script>

<template>
  <section class="hero">
    <div>Alena Guillaume</div>
    <h1>Frontend Developer</h1>
  </section>
</template>

<style lang="scss" scoped>
.hero {
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 84px);
  align-items: center;
  justify-content: center;
  margin-top: 0;
  div {
    font-size: 24px;
    font-style: italic;
    font-family: 'Poppins', sans-serif;
    margin-bottom: 4.5rem;
  }
  h1 {
    font-size: 48px;
    font-family: 'Poppins', sans-serif;
  }
}
</style>
