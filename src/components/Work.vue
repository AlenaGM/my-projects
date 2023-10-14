<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { projects } from '@/assets/data/projects'
import uiButton from './ui/Button.vue'
import ProjectCard from '@/components/ProjectCard.vue'
</script>

<template>
  <section class="work">
    <i id="work" />
    <h2 class="work__title"><span>Some of My Projects</span><span>Work</span></h2>
    <div class="work__info">
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia magnam veniam, ipsa sunt
        delectus reiciendis, exercitationem esse ad minima quibusdam aliquid aut facere non sint
        culpa blanditiis animi, velit consequatur.
      </p>
    </div>

    <div class="work__gallery gallery">
      <ProjectCard :projects="projects" />
    </div>
    <div class="work__link">
      <ui-button
        type="link"
        to="https://github.com/AlenaGM"
        mobileFullWidth
        aria-label="More projects on github"
        role="link"
        target="_blank"
        rel="noreferrer noopener"
      >
        More projects on github
      </ui-button>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.work {
  z-index: 50;
  display: grid;
  &__gallery {
    margin-bottom: 4rem;
    @media screen and (max-width: 768px) {
      margin-bottom: 2.5rem;
    }
  }
}
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-auto-rows: 1fr;
  column-gap: 2.5rem;
  row-gap: 5rem;
  justify-items: center;
}
</style>
