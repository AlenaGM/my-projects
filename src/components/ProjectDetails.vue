<script setup>
const props = defineProps({
  id: String,
  title: String,
  info: String,
  tech: String,
  image: String,
  code: String,
  demo: String,
});

const emit = defineEmits(["close"]);
const closeProject = () => {
  emit("close");
};
</script>

<template>
  <div class="modal" @click="closeProject">
    <div class="modal__dialog">
      <div class="modal__content">
        <a
          :href="demo"
          target="_blank"
          rel="noreferrer noopener"
          class="modal__image"
        >
          <img :src="image" :alt="title" />
        </a>

        <div class="modal__info">
          <div class="modal__info_close" @click="closeProject">
            <font-awesome-icon icon="fa-solid fa-xmark" />
          </div>

          <div>
            <a
              :href="demo"
              target="_blank"
              rel="noreferrer noopener"
              class="modal__info_title"
              @click="closeProject"
            >
              <h2>{{ title }}</h2>
            </a>
            <p class="modal__info_text">
              {{ info }}
            </p>
            <p class="modal__info_tech"><span>Tech stack: </span>{{ tech }}</p>
          </div>
          <div class="modal__info_links">
            <a
              :href="demo"
              target="_blank"
              rel="noreferrer noopener"
              @click="closeProject"
              >View project: <font-awesome-icon icon="fa-solid fa-cat"
            /></a>
            <a
              :href="code"
              target="_blank"
              rel="noreferrer noopener"
              @click="closeProject"
              >View code: <font-awesome-icon icon="fa-brands fa-github" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.75);
  z-index: 20;
  display: flex;
  align-items: center;
  &__dialog {
    width: 80vw;
    max-width: 800px;
    margin: 0 auto;
  }
  &__content {
    position: relative;
    width: 100%;
    height: 65vh;
    overflow-y: auto;
    font-family: "Space Grotesk";
    color: var(--color-text);
    background-color: var(--color-card);
    padding: 2rem;
    border-radius: 8px;
    box-shadow: rgb(0 0 0 / 0.15) 0 0 30px 10px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
  }
  &__image {
    position: relative;
    max-width: 350px;
    max-height: calc(65vh - 4rem);
    box-shadow: rgb(0 0 0 / 0.15) 0 0 30px 10px;
    cursor: pointer;
    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 8px;
    }
  }
  &__info {
    display: grid;
    align-content: space-between;
    justify-items: end;
    &_title {
      font-size: 1.125rem;
      cursor: pointer;
      text-transform: capitalize;
      &:hover {
        color: var(--color-hover);
      }
    }
    &_text {
      font-family: "Open Sans", sans-serif;
      font-size: 1rem;
      margin: 0.5rem 0;
    }
    &_tech {
      font-size: 0.75rem;
      margin: 2.5rem 0 0.5rem;
      span {
        font-weight: 700;
      }
    }
    &_links {
      font-size: 0.75rem;
      a {
        &:not(:last-of-type) {
          margin-right: 3rem;
        }
        svg {
          margin-left: 4px;
        }
      }
    }
    &_close {
      cursor: pointer;
      &:hover {
        color: var(--color-hover);
      }
    }
  }
}
</style>
