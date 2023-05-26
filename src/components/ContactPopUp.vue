<script setup>
const emit = defineEmits(["close"]);
const closeContact = () => {
  emit("close");
};
</script>

<template>
  <div class="modal" @click="closeContact">
    <div class="modal__content" v-click-away="closeContact">
      <div class="modal__content_close" @click="closeContact">
        <font-awesome-icon icon="fa-solid fa-xmark" />
      </div>
      <div>
        <h2>Get in Touch</h2>
        <p class="modal__content_text">
          If you'd like to collaborate, please fill out the form below with as
          much details as possible and I'll be in touch.
        </p>
      </div>
      <div class="modal__content_form">
        <form>
          <div>
            <input
              type="text"
              v-model="name"
              name="name"
              placeholder="Your Name"
            />
            <input
              type="email"
              v-model="email"
              name="email"
              placeholder="Your Email"
            />
          </div>
          <div>
            <textarea
              name="message"
              v-model="message"
              cols="30"
              rows="5"
              placeholder="Message"
            >
            </textarea>
          </div>
          <input type="submit" value="Send" />
        </form>
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
  &__content {
    position: relative;
    width: 80vw;
    max-width: 800px;
    margin: 0 auto;
    height: 65vh;
    overflow-y: auto;
    font-family: "Space Grotesk";
    color: var(--color-text);
    background-color: var(--color-card);
    padding: 2rem;
    border-radius: 8px;
    box-shadow: rgb(0 0 0 / 0.15) 0 0 30px 10px;
    display: grid;
    grid-template-columns: 1fr;
    gap: 3rem;
    text-align: center;
    justify-items: center;
    &_close {
      cursor: pointer;
      justify-self: end;
      &:hover {
        color: var(--color-hover);
      }
    }
    &_title {
      font-size: 1.125rem;
      text-transform: capitalize;
    }
    &_text {
      font-family: "Open Sans", sans-serif;
      font-size: 1rem;
      margin: 0.5rem 0;
      max-width: 525px;
    }
    &_social {
      font-size: 0.75rem;
      margin: 2.5rem 0 0.5rem;
    }
    &_links {
      font-size: 0.75rem;
      a {
        &:not(:last-of-type) {
          margin-right: 3rem;
        }
      }
    }
  }
}
</style>
