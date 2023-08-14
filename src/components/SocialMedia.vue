<template>
  <div class="contact__info_social">
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
.contact__info_social {
  margin-top: 2.25rem;
  @media screen and (max-width: 1023px) {
    margin-top: 1.125rem;
  }
  a {
    font-size: 2rem;
    &:not(:last-of-type) {
      margin-right: 1rem;
    }
  }
}
</style>
