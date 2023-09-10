<!-- eslint-disable vue/multi-word-component-names -->
<script setup></script>

<template>
  <div class="social">
    <a
      href="https://github.com/AlenaGM"
      aria-label="github"
      target="_blank"
      rel="noreferrer noopener"
    >
      <font-awesome-icon :icon="['fab', 'github']" />
    </a>
    <a
      href="https://www.linkedin.com/in/alena-guillaume/"
      aria-label="linkedin"
      target="_blank"
      rel="noreferrer noopener"
    >
      <font-awesome-icon :icon="['fab', 'linkedin-in']" />
    </a>
  </div>
</template>

<style lang="scss" scoped>
.social {
  position: fixed;
  display: flex;
  flex-direction: column;
  right: 0.5rem;
  top: 25vh;
  z-index: 2;
  align-items: flex-end;
  a {
    font-size: 1.75rem;
    text-align: left;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 0.5rem;
    inline-size: 40px;
    overflow: hidden;
    height: 40px;
    box-shadow: var(--box-shadow);
    color: var(--color-white);
    background-color: var(--color-red);
    transition:
      inline-size 0.4s ease,
      color 0.4s ease-in-out;
    &::after {
      content: 'get in touch';
      text-transform: none;
      font-size: 1rem;
      padding-left: 0.5rem;
      white-space: nowrap;
    }
    &:not(:last-of-type) {
      margin-bottom: 0.5rem;
      padding-left: 6px;
      &::after {
        content: 'view profile';
      }
    }
    &:hover {
      color: var(--color-red);
      background-color: var(--color-white);
      inline-size: 148px;
    }
  }
}
</style>
