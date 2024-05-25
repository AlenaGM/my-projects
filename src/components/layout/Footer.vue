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
            target="_blank"
            rel="noreferrer noopener"
          >
            open source</a
          >.
        </p>
      </div>
      <div class="footer__content_to-top">
        <a href="#" aria-label="#">
          <label>back to top</label>
          <span></span>
        </a>
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
    &_to-top {
      position: fixed;
      right: 0.5rem;
      bottom: 1.5rem;
      transition: transform 0.35s cubic-bezier(0.23, 0.24, 0, 0.99);
      z-index: 60;
      a {
        position: relative;
        display: flex;
        width: 40px;
        transform: rotate(270deg);
        padding-bottom: 10px;
        label {
          cursor: pointer;
          font-size: 13px;
          white-space: nowrap;
          color: var(--color-text);
          transition: color 0.35s cubic-bezier(0.23, 0.24, 0, 0.99);
        }
        span {
          display: block;
          width: 14px;
          height: 40px;
          position: absolute;
          left: 80px;
          bottom: 0;
          &::before,
          &::after {
            content: '';
            background-color: var(--color-text);
            width: 2px;
            height: 50%;
            position: absolute;
            right: 0;
            transition: all 0.35s cubic-bezier(0.23, 0.24, 0, 0.99);
          }
          &::before {
            top: 0;
          }
          &::after {
            bottom: 0;
          }
        }
      }
      @media (any-pointer: fine) {
        &:hover {
          transform: translateY(-3px);
          transition: transform 0.35s cubic-bezier(0.23, 0.24, 0, 0.99);
          a {
            span {
              &::before {
                height: 23.5px;
                transform: rotate(-43deg);
                background-color: var(--color-hover);
                transition: all 0.35s cubic-bezier(0.23, 0.24, 0, 0.99);
              }
              &::after {
                height: 23.5px;
                transform: rotate(43deg);
                background-color: var(--color-hover);
                transition: all 0.35s cubic-bezier(0.23, 0.24, 0, 0.99);
              }
            }
            label {
              color: var(--color-hover);
              transition: color 0.35s cubic-bezier(0.23, 0.24, 0, 0.99);
            }
          }
        }
      }
      @media (any-pointer: coarse) {
        a {
          span {
            &::before {
              height: 23.5px;
              transform: rotate(-43deg);
            }
            &::after {
              height: 23.5px;
              transform: rotate(43deg);
            }
          }
        }
      }
      @media screen and (max-width: 576px) {
        a {
          label {
            display: none;
          }
          span {
            left: 1rem;
            &::before,
            &::after {
              background-color: var(--color-hover);
            }
            &::before {
              height: 23.5px;
              transform: rotate(-43deg);
            }
            &::after {
              height: 23.5px;
              transform: rotate(43deg);
            }
          }
        }
      }
    }
  }
}
</style>
