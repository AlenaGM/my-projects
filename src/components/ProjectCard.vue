<script setup>
// eslint-disable-next-line no-unused-vars
const props = defineProps({
  projects: {
    required: true
  }
})

import { onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)
const mediaAnimation = gsap.matchMedia()

onMounted(() => {
  mediaAnimation.add('(min-width: 1025px)', () => {
    gsap.set('.card__image img', {
      scale: 1.15,
      yPercent: 7.5
    })

    const cards = document.querySelectorAll('.card')

    cards.forEach((card) => {
      const img = card.querySelector('img')
      const content = card.querySelector('.card__content')
      const deco = card.querySelector('.card__image_deco')

      const tlCard = gsap.timeline({
        scrollTrigger: {
          trigger: card,
          start: 'top 80%',
          end: 'top top',
          scrub: 1
        }
      })

      tlCard
        .to(
          img,
          {
            yPercent: -7.5,
            autoAlpha: 1
          },
          '<'
        )
        .from(content, { yPercent: 15 }, '<')
        .from(deco, { yPercent: 15 }, '<')
    })
  })

  mediaAnimation.add('(max-width: 1024px)', () => {
    const cards = document.querySelectorAll('.card')

    cards.forEach((card) => {
      const content = card.querySelector('.card__content')
      const deco = card.querySelector('.card__image_deco')

      const tlCard = gsap.timeline({
        scrollTrigger: {
          trigger: card,
          start: 'top 80%',
          end: 'top top',
          scrub: 1
        }
      })

      tlCard.from(content, { yPercent: 15 }, '<').from(deco, { yPercent: 15 }, '<')
    })
  })
})
</script>

<template>
  <article
    class="gallery__card card"
    v-for="{ id, title, info, tech, image, demo, code } in projects"
    :key="id"
  >
    <div class="card__image">
      <a :href="demo" target="_blank" rel="noreferrer" tabindex="-1">
        <img :src="`${image}.webp`" :alt="title" class="parallax" />
      </a>
      <div class="card__image_deco"></div>
    </div>
    <a class="card__title" :href="demo" target="_blank" rel="noreferrer" tabindex="-1">{{
      title
    }}</a>
    <div class="card__content">
      <div class="card__info">
        {{ info }}
      </div>
      <div class="card__tech">
        <p class="tech-text"><span class="tech-text">Stack: </span>{{ tech }}</p>
        <div class="card__links">
          <a :href="demo" target="_blank" rel="noreferrer" class="tech-text">
            View Project: <font-awesome-icon :icon="['fas', 'cat']" />
          </a>
          <a :href="code" target="_blank" rel="noreferrer" class="tech-text">
            View Code: <font-awesome-icon :icon="['fab', 'github']" />
          </a>
        </div>
      </div>
    </div>
  </article>
</template>

<style lang="scss" scoped>
.card {
  display: grid;
  grid-auto-flow: row;
  grid-template: auto minmax(32px, auto) 1fr/1fr;
  max-width: 400px;
  width: 100%;

  &__image {
    padding: 0 0 40%;
    position: relative;
    width: calc(100% - 4rem);
    aspect-ratio: 1;
    margin-left: 2rem;
    margin-right: 2rem;
    margin-bottom: -20%;
    filter: brightness(0.95);
    z-index: 1;
    cursor: pointer;
    a {
      display: block;
      box-sizing: border-box;
      overflow: hidden;
      width: initial;
      height: initial;
      background: none;
      opacity: 1;
      border: 0;
      margin: 0;
      padding: 0;
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
    }
    img {
      object-fit: cover;
      height: 100%;
      width: 100%;
    }
    &_deco {
      content: '';
      position: absolute;
      top: 1.5rem;
      left: 1rem;
      width: 100%;
      height: 100%;
      border: var(--border);
      z-index: -1;
    }
  }
  &__title {
    display: flex;
    justify-content: center;
    background-color: var(--color-primary);
    color: var(--color-white);
    margin: 0 auto -4rem 1rem;
    padding: 8px 28px 64px;
    font-family: var(--font-text);
    font-size: 13px;
    font-weight: 700;
    line-height: 2em;
    letter-spacing: -0.01em;
    transition: transform 0.25s ease;
    z-index: 2;
    cursor: pointer;
    @media (hover: hover) {
      &:hover {
        color: var(--color-white);
        transform: translateY(-8px);
        transition: transform 0.25s ease;
      }
    }
  }
  &__content {
    display: grid;
    grid-template-rows: 1fr minmax(120px, auto);
    align-content: space-between;
    justify-items: start;
    padding: 1rem;
    width: 100%;
    background-color: var(--color-white);
    box-shadow: var(--box-shadow);
    z-index: 3;
  }
  &__info {
    display: grid;
    text-align: left;
    margin: 0 0 1.5rem 0;
    p {
      padding: 0.5rem 0;
      margin: 0;
      &:last-of-type {
        border-top: solid 1px var(--color-text);
      }
    }
  }
  &__tech {
    display: grid;
    align-content: space-between;
    text-align: left;
    width: 100%;
    border-top: solid 1px var(--color-text);
    p {
      margin: 0.5rem 0 1.5rem;
    }
  }
  &__links {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    width: 100%;
    a {
      display: flex;
      align-items: flex-start;
      margin-top: 0.5rem;
      font-size: 14px;
      white-space: nowrap;
      transition:
        transform 0.125s ease,
        color 0.125s ease;
      svg {
        font-size: 1.125rem;
        margin-left: 0.25rem;
      }
      &:not(:last-of-type) {
        margin-right: 1.5rem;
      }
      &:last-of-type svg {
        font-size: 1.25rem;
      }
      @media (hover: hover) {
        &:hover {
          transform: translateY(-3px);
          transition:
            transform 0.125s ease,
            color 0.125s ease;
        }
        &:active {
          top: 3px;
        }
      }
    }
  }
}
</style>
