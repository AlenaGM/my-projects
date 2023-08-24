<template>
  <div class="contact__social-media social-media">
    <a
      href="https://www.linkedin.com/in/alena-guillaume/"
      aria-label="linkedin"
      target="_blank"
      rel="noreferrer noopener"
    >
      <font-awesome-icon :icon="['fab', 'linkedin-in']" />
    </a>
    <a
      href="https://github.com/AlenaGM"
      aria-label="github"
      target="_blank"
      rel="noreferrer noopener"
    >
      <font-awesome-icon :icon="['fab', 'github']" />
    </a>
    <a
      href="https://t.me/alenagm"
      aria-label="telegram"
      target="“_blank”"
      rel="noreferrer noopener"
    >
      <font-awesome-icon :icon="['fab', 'telegram']" />
    </a>
    <a
      href="https://www.instagram.com/del.velorum/"
      aria-label="instagram"
      target="“_blank”"
      rel="noreferrer noopener"
    >
      <font-awesome-icon :icon="['fab', 'instagram']" />
    </a>
  </div>
</template>

<style lang="scss" scoped>
.social-media {
  a {
    font-size: 2.5rem;
    @media screen and (max-width: 767px) {
      font-size: 2rem;
    }
    &:not(:last-of-type) {
      margin-right: 1.125rem;
      @media screen and (max-width: 767px) {
        margin-right: 1rem;
      }
    }
  }
}
</style>
