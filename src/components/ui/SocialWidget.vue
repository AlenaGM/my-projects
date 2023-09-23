<!-- eslint-disable vue/multi-word-component-names -->
<script setup></script>

<template>
  <div class="social">
    <a
      href="https://github.com/AlenaGM"
      aria-label="github"
      target="_blank"
      rel="noreferrer noopener"
      tabindex="14"
    >
      <font-awesome-icon :icon="['fab', 'github']" />
    </a>
    <a
      href="https://www.linkedin.com/in/alena-guillaume/"
      aria-label="linkedin"
      target="_blank"
      rel="noreferrer noopener"
      tabindex="15"
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
  z-index: 80;
  align-items: flex-end;
  @media screen and (max-width: 768px) {
    top: 43%;
  }
  a {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 0.5rem;
    height: 40px;
    inline-size: 40px;
    overflow: hidden;
    box-shadow: var(--box-shadow);
    text-align: left;
    color: var(--color-white);
    background-color: var(--color-primary);
    font-size: 1.75rem;
    transition:
      inline-size 0.5s ease,
      color 0.25s ease,
      background-color 0.25s ease;

    &::after {
      content: 'get in touch';
      text-transform: none;
      font-size: 1rem;
      padding-left: 8px;
      white-space: nowrap;
    }
    &:not(:last-of-type) {
      margin-bottom: 0.5rem;
      padding-left: 6px;
      &::after {
        content: 'view profile';
      }
    }
    @media (hover: hover) {
      &:hover,
      &:focus {
        color: var(--color-primary);
        background-color: var(--color-white);
        inline-size: 148px;
        transition:
          inline-size 0.5s ease,
          color 0.25s ease,
          background-color 0.25s ease;
      }
      &:focus {
        outline: none;
      }
    }
  }
}
</style>
