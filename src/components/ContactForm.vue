<template>
  <form class="contact__form form" ref="formRef" @submit.prevent="submitForm">
    <div>
      <div class="form__input">
        <input
          type="text"
          name="user_name"
          placeholder="Name"
          maxlength="71"
          v-model="valid.nameField.$model"
          @input="updateValue"
        />
        <Transition>
          <span class="form__error" v-if="valid.nameField.$error">
            {{ valid.nameField.$errors[0].$message }}
          </span>
        </Transition>
      </div>
      <div class="form__input">
        <input
          type="email"
          name="user_email"
          maxlength="254"
          placeholder="E-mail (optional)"
          v-model="valid.emailField.$model"
          @input="updateValue"
        />
        <Transition>
          <span class="form__error" v-if="valid.emailField.$error">{{
            valid.emailField.$errors[0].$message
          }}</span>
        </Transition>
      </div>
    </div>
    <div class="form__textarea">
      <textarea
        name="message"
        maxlength="1001"
        placeholder="Write me a message"
        v-model="valid.messageField.$model"
        @input="updateValue"
      />
      <Transition>
        <span class="form__error" v-if="valid.messageField.$error">{{
          valid.messageField.$errors[0].$message
        }}</span>
      </Transition>
    </div>
    <div>
      <ui-button :disabled="isButtonDisabled" type="submit" mobileFullWidth>Send</ui-button>
    </div>
  </form>

  <teleport to="body">
    <modal-content
      :open="isModalOpen"
      @close="isModalOpen = false"
      v-if="isError"
      title="An error has occurred!"
    >
      <div>
        <p>Your message was not sent. Please try again later.</p>
      </div>
    </modal-content>
    <modal-content
      :open="isModalOpen"
      @close="isModalOpen = false"
      v-else
      title="Your message has been sent!"
    >
      <div>
        <p>Thank you for reaching out! I will do my best to respond within 2-3 hours.</p>
      </div>
    </modal-content>
  </teleport>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { helpers, minLength, maxLength, required, email } from '@vuelidate/validators'
import emailjs from '@emailjs/browser'

import uiButton from './ui/Button.vue'
import ModalContent from '@/components/ui/Modal.vue'

const nameField = ref('')
const emailField = ref('')
const messageField = ref('')

const isModalOpen = ref(false)
const isError = ref(false)

const formRef = ref(null)
const myKey = import.meta.env.VITE_KEY

const rules = computed(() => ({
  nameField: {
    required: helpers.withMessage(`I would like to know your name, if you do not mind`, required),
    minLength: helpers.withMessage(
      `I would like to know your name, if you do not mind`,
      minLength(2)
    ),
    maxLength: helpers.withMessage(`That was long name. Any diminutive?`, maxLength(70))
  },
  emailField: {
    email: helpers.withMessage(
      `E-mail is optional, but please provide a valid e-mail address, if you want an answer. I will never share your personal details with anyone`,
      email
    )
  },
  messageField: {
    required: helpers.withMessage(`Are you sure you do not want to write me anything?`, required),
    minLength: helpers.withMessage(
      `I'm not sure I've got you well. Can you add more details?`,
      minLength(4)
    ),
    maxLength: helpers.withMessage(
      `That's too long! I've decided that the message couldn't be longer than 1000 characters`,
      maxLength(1000)
    )
  }
}))

const valid = useVuelidate(rules, {
  nameField,
  emailField,
  messageField
})

const isButtonDisabled = computed(() => {
  return nameField.value === '' || messageField.value === '' || valid.value.$error
})

const submitForm = async () => {
  valid.value.$touch()
  if (valid.value.$error) return
  sendEmail()
  resetForm()
}

const sendEmail = () => {
  emailjs.sendForm('contact_service', 'template_1guu3ga', formRef.value, myKey).then(
    (result) => {
      console.log(result.text)
      isError.value = false
      isModalOpen.value = true
    },
    (error) => {
      console.log(error.text)
      isError.value = true
      isModalOpen.value = true
    }
  )
}

const resetForm = () => {
  nameField.value = ''
  emailField.value = ''
  messageField.value = ''
  valid.value.$reset()
}
</script>

<style lang="scss" scoped>
.form {
  display: grid;
  position: relative;
  div {
    display: flex;
    width: 100%;
    @media screen and (max-width: 768px) {
      flex-direction: column;
    }
  }
  &__input,
  &__textarea {
    display: flex;
    flex-direction: column;
    input,
    textarea {
      font-family: inherit;
      font-size: 1rem;
      font-weight: inherit;
      line-height: 24px;
      color: var(--color-text);
      width: 100%;
      padding: 1rem 1.5rem;
      background-color: var(--color-light-gray);
      border: var(--border);
      outline: none;
      transition: border 0.1s ease;
      &:focus {
        border: 2px solid var(--color-black);
        outline: none;
        transition: border 0.1s ease;
      }
    }
  }
  &__textarea {
    margin: 1.5rem 0 4rem;
    @media screen and (max-width: 768px) {
      margin-bottom: 2.5rem;
    }
    textarea {
      min-height: 160px;
      resize: vertical;
    }
  }
  &__input {
    &:not(:last-of-type) {
      margin: 0 1.5rem 0 0;
      @media screen and (max-width: 768px) {
        margin: 0 0 1.5rem 0;
      }
    }
    @media screen and (max-width: 768px) {
      width: 100%;
    }
  }
  &__error {
    margin-top: 4px;
    font-size: 0.8125rem;
    color: var(--color-error);
  }
}
</style>
