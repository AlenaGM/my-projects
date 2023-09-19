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
  right: 0;
  top: 26%;
  z-index: 90;
  align-items: flex-end;
  @media screen and (max-width: 768px) {
    top: 43%;
  }
  @media screen and (min-width: 1600px) {
    right: calc((100vw - 1280px) * 0.5);
  }
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
    background-color: var(--color-primary);
    transition: inline-size 0.5s ease;
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
      color: var(--color-primary);
      background-color: var(--color-white);
      inline-size: 148px;
      transition: inline-size 0.5s ease;
    }
    @media (pointer: fine) {
      &:hover {
        color: var(--color-primary);
        background-color: var(--color-white);
        inline-size: 148px;
        transition: inline-size 0.5s ease;
      }
    }
  }
}
</style>
