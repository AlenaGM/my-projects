<template>
  <footer class="footer">
    <div class="footer__content">
      <div class="footer__content_link">
        <p class="tech-text">© {{ year }} Alena G.</p>
        <p class="tech-text">
          My portfolio is
          <a
            class="tech-text"
            href="https://github.com/AlenaGM/my-projects"
            role="link"
            aria-label="open source"
            rel="noreferrer noopener"
          >
            open source</a
          >.
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
const date = new Date()
const year = date.getFullYear() || '2024'
</script>

<style lang="scss" scoped>
.footer {
  &__content {
    grid-column: 2;
    display: grid;
    align-items: center;
    padding: 1.5rem 0;
    @media screen and (max-width: 768px) {
      justify-items: center;
    }
    @media screen and (max-width: 576px) {
      justify-items: left;
      margin-right: 40px;
    }
    &_link {
      display: inline-flex;
      @media screen and (max-width: 576px) {
        display: flex;
        flex-direction: column;
        line-height: 1.4;
      }
      .tech-text {
        margin-bottom: 0;
        &:not(:last-of-type) {
          padding-right: 0.5rem;
        }
        a {
          font-weight: normal;
          text-transform: none;
          text-decoration: underline;
        }
      }
    }
  }
}
</style>
