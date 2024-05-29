<template>
  <div class="social__links">
    <a
      class="social__link"
      href="https://github.com/AlenaGM"
      aria-label="github"
      rel="noreferrer noopener"
    >
      <ui-github color="white" /> view profile
    </a>
    <a
      class="social__link"
      href="https://www.linkedin.com/in/alena-guillaume/"
      aria-label="linkedin"
      rel="noreferrer noopener"
    >
      <ui-linkedin color="white" /> get in touch
    </a>
  </div>
</template>

<script setup>
import uiLinkedin from '@/components/ui/Linkedin.vue'
import uiGithub from '@/components/ui/Github.vue'
</script>

<style lang="scss" scoped>
.social {
  &__links {
    position: fixed;
    top: 26vh;
    right: 0;
    z-index: 60;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-end;
    gap: 0.5rem;
    @media screen and (max-width: 768px), (orientation: portrait) {
      top: 44vh;
    }
    a {
      display: inline-flex;
      align-items: center;
      justify-content: flex-start;
      width: 142px;
      height: 40px;
      padding: 4px;
      transform: translateX(100px);
      font-family: var(--font-title);
      font-size: 13px;
      font-weight: 600;
      text-decoration: none;
      text-transform: capitalize;
      white-space: nowrap;
      background-color: var(--color-primary);
      color: var(--color-white);
      box-shadow: var(--box-shadow);
      transition:
        transform 0.5s cubic-bezier(0.23, 0.24, 0, 0.99),
        color 0.35s ease,
        background-color 0.35s ease;
      svg {
        width: 32px;
        height: 32px;
        margin-right: 0.5rem;
        transform: none;
      }
      @media (any-pointer: fine) {
        &:hover {
          background-color: var(--color-white);
          color: var(--color-primary);
          transform: translateX(0px);
          transition:
            transform 0.5s cubic-bezier(0.23, 0.24, 0, 0.99),
            color 0.35s ease,
            background-color 0.35s ease;
        }
      }
    }
  }
}
</style>
