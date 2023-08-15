<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import uiButton from './Button.vue'
import { projects } from '@/assets/data/projects'
import ProjectCard from '@/components/ProjectCard.vue'
</script>

<template>
  <section class="work">
    <h2>Some of my projects</h2>
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia magnam veniam, ipsa sunt
      delectus reiciendis, exercitationem esse ad minima quibusdam aliquid aut facere non sint culpa
      blanditiis animi, velit consequatur.
    </p>
    <div class="work__gallery">
      <ProjectCard :projects="projects" />
    </div>
    <div class="work__github-link">
      <ui-button type="link" mobileFullWidth>
        <a
          href="https://github.com/AlenaGM"
          aria-label="github"
          target="_blank"
          rel="noreferrer noopener"
        >
          More projects on github
        </a>
      </ui-button>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.work {
  display: grid;
  &__gallery,
  &__github-link {
    margin-top: var(--section-gap-mobile);
    @media screen and (max-width: 767px) {
      margin-top: calc(var(--section-gap-mobile) * 0.5);
    }
  }
  &__gallery {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-auto-rows: 1fr;
    gap: 2.5rem;
    justify-items: center;
  }
}
</style>
