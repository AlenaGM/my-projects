<template>
  <section class="projects" id="projects">
    <h2><span class="h2-subtitle">Some of My Projects</span><span>Works</span></h2>
    <div>
      <p>
        Here are some projects I've put together. They're not work-related, but include personal
        projects, learning projects, and some freelance work. You can find more of my projects on
        <a
          href="https://github.com/AlenaGM"
          aria-label="g=it girl school website"
          target="_blank"
          rel="noreferrer noopener"
          >GitHub.</a
        >
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
import { onMounted, onUnmounted, ref, computed } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import { projects } from '@/assets/data/projects'
import uiButton from '@/components/ui/Button.vue'
import ProjectCard from '@/components/ProjectCard.vue'

gsap.registerPlugin(ScrollTrigger)

const filters = ref(['All', 'JavaScript', 'TypeScript', 'Vue', /*'Nuxt', 'React',*/ 'GSAP'])
const activeFilter = ref('All')

const setActiveFilter = (filter) => {
  activeFilter.value = filter

  gsap.from('.projects__gallery', {
    y: 150,
    autoAlpha: 0,
    duration: 1,
    ease: 'power2.out',
    onComplete: () => {
      ScrollTrigger.refresh()
    }
  })
}

const getProjects = computed(() => {
  if (activeFilter.value === 'All') {
    return projects.slice(0, 6)
  }
  return projects.filter((project) => project.tags.includes(activeFilter.value))
})

let projAnimCtx

onMounted(() => {
  projAnimCtx = gsap.context(() => {
    const tlBg = gsap.timeline({})

    ScrollTrigger.create({
      animation: tlBg,
      trigger: '.projects',
      start: 'top center',
      end: 'bottom center',
      ease: 'power2.inOut',
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
          border: 'solid 1.5px #ffffff'
        },
        '<'
      )

    gsap.from('.projects__gallery', {
      y: 150,
      autoAlpha: 0,
      scrollTrigger: {
        trigger: '.projects',
        start: 'top 75%',
        end: 'top 25%',
        scrub: 1
      }
    })
  })
})

onUnmounted(() => {
  projAnimCtx.revert()
})
</script>

<style lang="scss" scoped>
.projects {
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
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-auto-rows: 1fr;
  column-gap: 2.5rem;
  row-gap: 4rem;
  justify-items: center;
}
</style>
