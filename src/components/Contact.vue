<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { ref, computed } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { helpers, minLength, maxLength, required, email } from '@vuelidate/validators'
import emailjs from '@emailjs/browser'

const nameField = ref('')
const emailField = ref('')
const messageField = ref('')

const rules = computed(() => ({
  nameField: {
    required: helpers.withMessage(`I would like to know your name, if you do not mind`, required),
    minLength: helpers.withMessage(
      `I would like to know your name, if you do not mind`,
      minLength(2)
    )
  },
  emailField: {
    required: helpers.withMessage(
      `Please provide a valid e-mail address, so that I can answer you`,
      required
    ),
    email: helpers.withMessage(
      `Please provide a valid e-mail address, so that I can answer you. I do not share your personal details with anyone`,
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
  emailjs.sendForm('contact_service', 'template_1guu3ga', formRef.value, '0bqDQvGCW5ceicJh6').then(
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
  <section class="contact">
    <div class="contact__info">
      <h2>Contact</h2>
      <div>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia magnam veniam, ipsa sunt
        delectus reiciendis, exercitationem esse ad minima quibusdam aliquid aut facere non sint
        culpa blanditiis animi, velit consequatur.
      </div>
      <div class="contact__info_social">
        <a
          href="https://www.linkedin.com/in/alena-guillaume/"
          aria-label="linkedin"
          target="_blank"
          rel="noreferrer noopener"
        >
          linkedin
        </a>
        <a
          href="https://github.com/AlenaGM"
          aria-label="github"
          target="_blank"
          rel="noreferrer noopener"
        >
          github
        </a>
        <a
          href="https://t.me/alenagm"
          aria-label="telegram"
          target="“_blank”"
          rel="noreferrer noopener"
        >
          telegram
        </a>
        <a
          href="https://www.instagram.com/del.velorum/"
          aria-label="instagram"
          target="“_blank”"
          rel="noreferrer noopener"
        >
          instagram
        </a>
      </div>
    </div>

    <form class="contact__form" ref="formRef" @submit.prevent="submitForm">
      <div>
        <div class="contact__form_input">
          <input
            type="text"
            name="user_name"
            placeholder="Name"
            v-model="valid.nameField.$model"
            @input="updateValue"
          />
          <Transition v-if="valid.nameField.$error">
            <span class="contact__form_error">
              {{ valid.nameField.$errors[0].$message }}
            </span>
          </Transition>
        </div>
        <div class="contact__form_input">
          <input
            type="email"
            name="user_email"
            placeholder="E-mail"
            v-model="valid.emailField.$model"
            @input="updateValue"
          />
          <Transition v-if="valid.emailField.$error">
            <span class="contact__form_error">{{ valid.emailField.$errors[0].$message }}</span>
          </Transition>
        </div>
      </div>
      <div class="contact__form_textarea">
        <textarea
          name="message"
          placeholder="Write me a message"
          v-model="valid.messageField.$model"
          @input="updateValue"
        />
        <Transition v-if="valid.messageField.$error">
          <span class="contact__form_error">{{ valid.messageField.$errors[0].$message }}</span>
        </Transition>
        <Transition v-if="successMessage">
          <span class="contact__form_success">{{ successMessage }}</span>
        </Transition>
      </div>

      <div class="contact__form_buttons">
        <button class="button" :class="{ disabled: isButtonDisabled }" type="submit">Send</button>
      </div>
    </form>
  </section>
</template>

<style lang="scss" scoped>
.contact {
  display: grid;
  grid-template-columns:
    minmax(1.5rem, 1fr) minmax(auto, 640px) minmax(auto, 640px)
    minmax(1.5rem, 1fr);
  background-color: var(--color-coral-pink);
  color: var(--color-white);
  padding: var(--section-gap) 0;
  @media screen and (max-width: 1023px) {
    grid-template-columns:
      minmax(1.5rem, 1fr) minmax(auto, 975px)
      minmax(1.5rem, 1fr);
    padding: var(--section-gap-mobile) 0;
  }
  &__info {
    grid-column: 2;
    padding-right: 5rem;
    @media screen and (max-width: 1023px) {
      padding-right: 0;
    }
    &_social {
      margin-top: 2.25rem;
      @media screen and (max-width: 767px) {
        margin-top: 1.125rem;
      }
      a {
        font-size: 2rem;
        &:not(:last-of-type) {
          margin-right: 1rem;
        }
      }
    }
    @media screen and (max-width: 1023px) {
      margin-bottom: var(--section-gap-mobile);
    }
  }
  &__form {
    grid-column: 3;
    display: flex;
    flex-direction: column;
    @media screen and (max-width: 1023px) {
      grid-column: 2;
    }
    div {
      display: flex;
      width: 100%;
      @media screen and (max-width: 767px) {
        flex-direction: column;
      }
    }
    &_input,
    &_textarea {
      display: flex;
      flex-direction: column;
      input,
      textarea {
        color: var(--color-dark-gray);
        background-color: var(--color-light-gray);
        border: solid 1px var(--color-light-gray);
        outline: none;
        width: 100%;
        padding: 1rem 1.5rem;
        transition:
          color 0.2s ease-out,
          background-color 0.2s ease-out,
          border-color 0.2s ease-out;
        font-family: inherit;
        font-size: 1rem;
        font-weight: inherit;
        line-height: 24px;
        :focus {
          border: 1px solid var(--color-red);
          box-shadow: var(--box-shadow);
        }
      }
    }
    &_textarea {
      margin: 1.5rem 0 4.5rem;
      textarea {
        min-height: 160px;
        resize: vertical;
      }
    }
    &_input,
    .button {
      &:not(:last-of-type) {
        margin: 0 1.5rem 0 0;
        @media screen and (max-width: 767px) {
          margin: 0 0 1.5rem 0;
        }
      }
      @media screen and (max-width: 767px) {
        width: 100%;
      }
    }
    &_error {
      margin-top: 4px;
      font-size: 0.8125rem;
      color: var(--color-light-red);
    }
    &_success {
      margin-top: 4px;
      font-size: inherit;
      color: var(--color-success);
    }
  }
}
</style>
