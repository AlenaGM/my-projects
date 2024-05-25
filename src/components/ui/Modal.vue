<template>
  <Transition name="modal" :duration="700">
    <div class="modal_wrapper" v-if="open">
      <div class="modal_overlay" @click="$emit('close')">
        <div class="modal_container" @click.stop v-scroll-lock="open">
          <div class="modal_header">
            <h2 class="modal_header__title">{{ title }}</h2>
            <div class="modal_header__close" @click="$emit('close')">
              <ui-close />
            </div>
          </div>
          <div class="modal_body">
            <slot></slot>
          </div>
          <div class="modal_footer">
            <ui-button @click="$emit('close')" type="button" mobileFullWidth>
              {{ btn }}
            </ui-button>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import uiButton from '@/components/ui/Button.vue'
import uiClose from '@/components/ui/Close.vue'

const props = defineProps({
  open: {
    type: Boolean
  },
  title: {
    type: String,
    required: false
  },
  btn: {
    type: String,
    default: 'OK'
  }
})
</script>

<style lang="scss">
.modal {
  &_overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin-left: calc(100vw - 100%);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    background: rgb(31, 31, 31, 0.8);
    z-index: 70;
  }
  &_container {
    position: relative;
    display: grid;
    grid-template: auto 1fr minmax(56px, auto) / 1fr;
    align-content: space-between;
    justify-items: center;
    width: 80%;
    max-width: 640px;
    padding: 32px;
    margin: 24px;
    background: var(--color-white);
    @media screen and (max-width: 768px) {
      width: 100%;
      min-width: auto;
      padding: 24px;
    }
  }
  &_header {
    display: grid;
    grid-template-columns: 1fr auto;
    width: 100%;
    align-items: center;
    margin: 0 0 24px;
    @media screen and (max-width: 576px) {
      margin: 0 0 16px;
    }
    &__title {
      text-align: center;
      padding-left: 18px;
      color: var(--color-primary);
      margin: 0px;
      @media screen and (max-width: 768px) {
        text-align: left;
        padding-left: 0;
      }
      @media screen and (max-width: 576px) {
        font-size: 20px;
      }
    }
    &__close {
      cursor: pointer;
      width: 24px;
      height: 24px;
      @media screen and (max-width: 576px) {
        width: 20px;
        height: 20px;
      }
    }
  }
}

.modal_container,
.modal_overlay {
  transition: all 0.5s ease;
}

.modal-enter-active .modal_container,
.modal-leave-active .modal_overlay {
  transition-delay: 0.2s;
}

.modal-enter-from .modal_overlay,
.modal-leave-to .modal_overlay {
  opacity: 0;
}

.modal-enter-from .modal_container,
.modal-leave-to .modal_container {
  -webkit-transform: translateY(-30px);
  transform: translateY(-30px);
  opacity: 0;
}
</style>
