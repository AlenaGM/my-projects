<script setup>
import { ref, computed } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { helpers, minLength, maxLength, required, email } from '@vuelidate/validators'
import emailjs from '@emailjs/browser'

import uiButton from './ui/Button.vue'

const nameField = ref('')
const emailField = ref('')
const messageField = ref('')

const rules = computed(() => ({
  nameField: {
    required: helpers.withMessage(`I would like to know your name, if you do not mind`, required),
    minLength: helpers.withMessage(
      `I would like to know your name, if you do not mind`,
      minLength(2)
    ),
    maxLength: helpers.withMessage(`That was long. Any diminutive?`, maxLength(70))
  },
  emailField: {
    required: helpers.withMessage(
      `Please provide a valid e-mail address, so that I can answer you. I will never share your personal details with anyone`,
      required
    ),
    email: helpers.withMessage(
      `Please provide a valid e-mail address, so that I can answer you. I will never share your personal details with anyone`,
      email
    )
  },
  messageField: {
    required: helpers.withMessage(`Are you sure you do not want to write me anything?`, required),
    minLength: helpers.withMessage(
      `I'm not sure I've got you well. Can you add more details?`,
      minLength(3)
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

const submitForm = () => {
  valid.value.$touch()
  if (valid.value.$error) return
  sendEmail()
  resetForm()
}

const formRef = ref(null)
const successMessage = ref('')

const sendEmail = () => {
  emailjs
    .sendForm('contact_service', 'template_1guu3ga', formRef.value, '0bqDQvGCW5ceicJh6')
    .then(
      (result) => {
        console.log(result.text)
        successMessage.value =
          'You message has been sent. Thank you! I will try to answer within 2 hours'
      },
      (error) => {
        console.log(error.text)
        successMessage.value = 'An error occurred. Please try again later.'
      }
    )
    .then(
      setTimeout(() => {
        successMessage.value = ''
      }, '10000')
    )
}

const resetForm = () => {
  nameField.value = ''
  emailField.value = ''
  messageField.value = ''
  valid.value.$reset()
}

const isButtonDisabled = computed(() => {
  return (
    nameField.value === '' ||
    emailField.value === '' ||
    messageField.value === '' ||
    valid.value.$error
  )
})
</script>

<template>
  <form class="contact__form form" ref="formRef" @submit.prevent="submitForm">
    <div>
      <div class="form__input">
        <input
          type="text"
          name="user_name"
          placeholder="Name"
          maxlength="71"
          tabindex="9"
          v-model="valid.nameField.$model"
          @input="updateValue"
        />
        <Transition v-if="valid.nameField.$error">
          <span class="form__error">
            {{ valid.nameField.$errors[0].$message }}
          </span>
        </Transition>
      </div>
      <div class="form__input">
        <input
          type="email"
          name="user_email"
          maxlength="254"
          placeholder="E-mail"
          tabindex="10"
          v-model="valid.emailField.$model"
          @input="updateValue"
        />
        <Transition v-if="valid.emailField.$error">
          <span class="form__error">{{ valid.emailField.$errors[0].$message }}</span>
        </Transition>
      </div>
    </div>

    <div class="form__textarea">
      <textarea
        name="message"
        maxlength="1001"
        placeholder="Write me a message"
        tabindex="11"
        v-model="valid.messageField.$model"
        @input="updateValue"
      />
      <Transition v-if="valid.messageField.$error">
        <span class="form__error">{{ valid.messageField.$errors[0].$message }}</span>
      </Transition>
      <Transition v-if="successMessage">
        <span class="form__success">{{ successMessage }}</span>
      </Transition>
    </div>

    <div>
      <ui-button :disabled="isButtonDisabled" type="submit" mobileFullWidth tabindex="12"
        >Send</ui-button
      >
    </div>
  </form>
</template>

<style lang="scss" scoped>
.form {
  display: grid;
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
      color: var(--color-gray);
      background-color: var(--color-light-gray);
      border: var(--border);
      outline: none;
      width: 100%;
      padding: 1rem 1.5rem;
      transition: border 0.1s ease;
      &:focus {
        border: 2px solid var(--color-primary);
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
  &__success {
    margin-top: 4px;
    font-size: inherit;
    color: var(--color-success);
  }
}
</style>
