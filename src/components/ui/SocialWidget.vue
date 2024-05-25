<template>
  <div class="social">
    <a
      href="https://github.com/AlenaGM"
      aria-label="github"
      target="_blank"
      rel="noreferrer noopener"
    >
      🐈‍⬛
    </a>
    <a
      href="https://www.linkedin.com/in/alena-guillaume/"
      aria-label="linkedin"
      target="_blank"
      rel="noreferrer noopener"
    >
      🦸
    </a>
  </div>
</template>

<style lang="scss" scoped>
.social {
  position: fixed;
  right: 0;
  top: 26vh;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  z-index: 60;
  @media screen and (max-width: 768px), (orientation: portrait) {
    top: 44vh;
  }
  a {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 1.75rem;
    text-align: left;
    height: 40px;
    inline-size: 40px;
    padding: 0 0.5rem;
    overflow: hidden;
    color: var(--color-white);
    background-color: var(--color-primary);
    box-shadow: var(--box-shadow);
    visibility: hidden;
    transition:
      inline-size 0.35s ease,
      color 0.05s ease,
      background-color 0.05s ease;
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
      &:focus-visible {
        color: var(--color-primary);
        background-color: var(--color-white);
        inline-size: 148px;
        transition:
          inline-size 0.35s ease,
          color 0.05s ease,
          background-color 0.05s ease;
      }
      &:focus-visible {
        outline: none;
      }
    }
  }
}
</style>
