<template>
  <section class="projects" id="projects">
    <h2><span class="h2-subtitle">Some of My Projects</span><span>Work</span></h2>
    <div>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia magnam veniam, ipsa sunt
        delectus reiciendis, exercitationem esse ad minima quibusdam aliquid aut facere non sint
        culpa blanditiis animi, velit consequatur.
      </p>
    </div>

    <div class="projects__filters">
      <ul>
        <li
          v-for="(filter, i) of filters"
          :key="i"
          @click="setActiveFilter(filter)"
          :class="['projects__filter filter', { filter_active: filter === activeFilter }]"
        >
          {{ filter }}
        </li>
      </ul>
    </div>
    <div class="projects__gallery gallery">
      <ProjectCard :projects="getProjects" />
    </div>
    <div>
      <ui-button
        type="link"
        to="https://github.com/AlenaGM"
        mobileFullWidth
        aria-label="More projects on github"
        role="link"
        rel="noreferrer noopener"
      >
        More projects on github
      </ui-button>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { projects } from '@/assets/data/projects'
import uiButton from '@/components/ui/Button.vue'
import ProjectCard from '@/components/ProjectCard.vue'

const filters = ref(['All', 'JavaScript', 'TypeScript', 'VueJS', 'NuxtJS', 'React', 'GSAP'])
const activeFilter = ref('All')

const setActiveFilter = (filter) => {
  activeFilter.value = filter
  //gsap.from('.work__gallery', {
  //  y: 150,
  //  opacity: 0,
  //  duration: 0.5,
  //  ease: 'power1.out'
  //})
}

const getProjects = computed(() => {
  if (activeFilter.value === 'All') {
    return projects
  }
  return projects.filter((project) => project.tags.includes(activeFilter.value))
})
</script>

<style lang="scss" scoped>
.projects {
  //z-index: 50;
  display: grid;
  &__filters {
    ul {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      margin-bottom: 4rem;
      column-gap: 1.5rem;
      row-gap: 0.5rem;
      @media screen and (max-width: 768px) {
        margin-bottom: 2.5rem;
      }
      .filter {
        cursor: pointer;
        transition: color 0.35s ease;
        &_active {
          color: var(--color-primary);
          transition: color 0.35s ease;
        }
        @media (any-pointer: fine) {
          &:hover {
            color: var(--color-primary);
            transition: color 0.35s ease;
          }
        }
      }
    }
  }
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
  row-gap: 4rem;
  justify-items: center;
}
</style>
