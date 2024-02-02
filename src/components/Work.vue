<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { onMounted, onUnmounted, ref, computed } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import { projects } from '@/assets/data/projects'
import uiButton from '@/components/ui/Button.vue'
import ProjectCard from '@/components/ProjectCard.vue'

gsap.registerPlugin(ScrollTrigger)

const filters = ref(['All', 'Vanilla JS', 'VueJS', 'React', 'GSAP'])
const activeFilter = ref('All')

const setActiveFilter = (filter) => {
  activeFilter.value = filter
  gsap.from('.work__gallery', {
    y: 150,
    opacity: 0,
    duration: 0.5,
    ease: 'power1.out'
  })
}

const getProjects = computed(() => {
  if (activeFilter.value === 'All') {
    return projects
  }
  return projects.filter((project) => project.tags.includes(activeFilter.value))
})

const tlBg = gsap.timeline({})

onMounted(() => {
  ScrollTrigger.create({
    animation: tlBg,
    trigger: '.work',
    start: 'top center',
    end: 'bottom bottom',
    toggleActions: 'play reverse play reverse'
  })

  tlBg
    .to('body', {
      backgroundColor: 'var(--color-secondary)'
    })
    .to(
      '.h2-subtitle',
      {
        color: 'var(--color-primary)'
      },
      '<'
    )
    .to(
      '.card__image_deco',
      {
        borderColor: '#fff'
      },
      '<'
    )

  gsap.from('.work__gallery', {
    y: 150,
    opacity: 0,
    scrollTrigger: {
      trigger: '.work',
      start: 'top 50%',
      duration: 0.8,
      ease: 'power1.out',
      toggleActions: 'play none none reverse'
    }
  })
})

onUnmounted(() => {
  tlBg.revert()
})
</script>

<template>
  <section class="work">
    <i id="work" />
    <h2><span class="h2-subtitle">Some of My Projects</span><span>Work</span></h2>
    <div>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia magnam veniam, ipsa sunt
        delectus reiciendis, exercitationem esse ad minima quibusdam aliquid aut facere non sint
        culpa blanditiis animi, velit consequatur.
      </p>
    </div>

    <div class="work__filters">
      <ul>
        <li
          v-for="(filter, i) of filters"
          :key="i"
          @click="setActiveFilter(filter)"
          :class="{ active: filter === activeFilter }"
        >
          {{ filter }}
        </li>
      </ul>
    </div>
    <div class="work__gallery gallery">
      <ProjectCard :projects="getProjects" />
    </div>
    <div>
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
  &__filters {
    ul {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      margin-bottom: 4rem;
      @media screen and (max-width: 768px) {
        margin-bottom: 2.5rem;
      }
      li {
        cursor: pointer;
        transition: color 0.25s ease;
        &:hover {
          color: var(--color-primary);
          transition: color 0.25s ease;
        }
        &:not(last-of-type) {
          margin-right: 2.5rem;
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
.active {
  color: var(--color-primary);
  transition: color 0.25s ease;
}
</style>
