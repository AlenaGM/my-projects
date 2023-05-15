<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Controller, Mousewheel, FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/mousewheel";
import "swiper/css/free-mode";
import "swiper/css/controller";
import { ref, onMounted, onUnmounted } from "vue";
import { projects } from "../assets/data/projects";
import ProjectDetails from "@/components/ProjectDetails.vue";

const firstSwiper = ref(null);
const secondSwiper = ref(null);
const thirdSwiper = ref(null);
const fourthSwiper = ref(null);

const isProjectOpen = ref(false);
let selectedProject = ref(null);

const setFirstSwiper = (swiper) => {
  firstSwiper.value = swiper;
};
const setSecondSwiper = (swiper) => {
  secondSwiper.value = swiper;
};
const setThirdSwiper = (swiper) => {
  thirdSwiper.value = swiper;
};
const setFourthSwiper = (swiper) => {
  fourthSwiper.value = swiper;
};

const clickOnButton = (e) => {
  isProjectOpen.value = true;
  selectedProject.value = e.target.id;
};

let projectsQuantity = ref(projects.length);
</script>

<template>
  <swiper
    class="slider slider1"
    :mousewheel="true"
    :freeMode="true"
    :centeredSlides="true"
    :direction="'vertical'"
    :slidesPerView="1.75"
    :slidesOffsetBefore="-125"
    :modules="[Mousewheel, FreeMode, Controller]"
    :controller="{ control: [secondSwiper, thirdSwiper, fourthSwiper] }"
    @swiper="setFirstSwiper"
  >
    <swiper-slide
      class="slider__item"
      v-for="{ title, demo, code, id, background } in projects.slice(
        0,
        Math.floor(projectsQuantity * 0.25)
      )"
    >
      <div
        class="slider__img"
        :style="background"
        :key="id"
        :id="id"
        @click="clickOnButton"
      >
        <div class="slider__img_title">
          <a :href="demo" target="_blank" rel="noreferrer noopener">
            <h2>{{ title }}</h2>
          </a>
        </div>
        <div class="slider__img_links">
          <a :href="demo" target="_blank" rel="noreferrer noopener"
            >View project: <font-awesome-icon icon="fa-solid fa-cat"
          /></a>
          <a :href="code" target="_blank" rel="noreferrer noopener"
            >View code: <font-awesome-icon icon="fa-brands fa-github" />
          </a>
        </div>
      </div>
    </swiper-slide>
  </swiper>
  <swiper
    class="slider slider1"
    :mousewheel="true"
    :freeMode="true"
    :centeredSlides="true"
    :direction="'vertical'"
    :slidesPerView="1.75"
    :slidesOffsetBefore="-125"
    :modules="[Mousewheel, FreeMode, Controller]"
    :controller="{ control: firstSwiper }"
    @swiper="setSecondSwiper"
  >
    <swiper-slide
      class="slider__item"
      v-for="{ title, demo, code, id, background } in projects.slice(
        Math.floor(projectsQuantity * 0.25),
        Math.floor(projectsQuantity * 0.5)
      )"
    >
      <div
        class="slider__img"
        :style="background"
        :key="id"
        :id="id"
        @click="clickOnButton"
      >
        <div class="slider__img_title">
          <a :href="demo" target="_blank" rel="noreferrer noopener">
            <h2>{{ title }}</h2>
          </a>
        </div>
        <div class="slider__img_links">
          <a :href="demo" target="_blank" rel="noreferrer noopener"
            >View project: <font-awesome-icon icon="fa-solid fa-cat"
          /></a>
          <a :href="code" target="_blank" rel="noreferrer noopener"
            >View code: <font-awesome-icon icon="fa-brands fa-github" />
          </a>
        </div>
      </div>
    </swiper-slide>
  </swiper>
  <swiper
    class="slider slider1"
    :mousewheel="true"
    :freeMode="true"
    :centeredSlides="true"
    :direction="'vertical'"
    :slidesPerView="1.75"
    :slidesOffsetBefore="-125"
    :modules="[Mousewheel, FreeMode, Controller]"
    :controller="{ control: firstSwiper }"
    @swiper="setThirdSwiper"
  >
    <swiper-slide
      class="slider__item"
      v-for="{ title, demo, code, id, background } in projects.slice(
        Math.floor(projectsQuantity * 0.5),
        Math.floor(projectsQuantity * 0.75)
      )"
    >
      <div
        class="slider__img"
        :style="background"
        :key="id"
        :id="id"
        @click="clickOnButton"
      >
        <div class="slider__img_title">
          <a :href="demo" target="_blank" rel="noreferrer noopener">
            <h2>{{ title }}</h2>
          </a>
        </div>
        <div class="slider__img_links">
          <a :href="demo" target="_blank" rel="noreferrer noopener"
            >View project: <font-awesome-icon icon="fa-solid fa-cat"
          /></a>
          <a :href="code" target="_blank" rel="noreferrer noopener"
            >View code: <font-awesome-icon icon="fa-brands fa-github" />
          </a>
        </div>
      </div>
    </swiper-slide>
  </swiper>
  <swiper
    class="slider slider1"
    :mousewheel="true"
    :freeMode="true"
    :centeredSlides="true"
    :direction="'vertical'"
    :slidesPerView="1.75"
    :slidesOffsetBefore="-125"
    :modules="[Mousewheel, FreeMode, Controller]"
    :controller="{ control: firstSwiper }"
    @swiper="setFourthSwiper"
  >
    <swiper-slide
      class="slider__item"
      v-for="{ title, demo, code, id, background } in projects.slice(
        Math.floor(projectsQuantity * 0.75),
        projectsQuantity
      )"
    >
      <div
        class="slider__img"
        :style="background"
        :key="id"
        :id="id"
        @click="clickOnButton"
      >
        <div class="slider__img_title">
          <a :href="demo" target="_blank" rel="noreferrer noopener">
            <h2>{{ title }}</h2>
          </a>
        </div>
        <div class="slider__img_links">
          <a :href="demo" target="_blank" rel="noreferrer noopener"
            >View project: <font-awesome-icon icon="fa-solid fa-cat"
          /></a>
          <a :href="code" target="_blank" rel="noreferrer noopener"
            >View code: <font-awesome-icon icon="fa-brands fa-github" />
          </a>
        </div>
      </div>
    </swiper-slide>
  </swiper>

  <teleport to="body">
    <ProjectDetails
      v-if="isProjectOpen"
      :title="projects[selectedProject - 1].title"
      :info="projects[selectedProject - 1].info"
      :tech="projects[selectedProject - 1].tech"
      :image="projects[selectedProject - 1].image"
      :demo="projects[selectedProject - 1].demo"
      :code="projects[selectedProject - 1].code"
      @click="isProjectOpen = false"
    />
  </teleport>
</template>

<style lang="scss" scoped>
.slider {
  transform: rotate(12.5deg);
  overflow: visible;
  //@media screen and (max-width: 1023px) {
  //  &:nth-child(3),
  //  &:nth-child(4) {
  //    display: none;
  //  }
  //}
  //@media screen and (max-width: 767px) {
  //  margin-top: 100px;
  //  &:nth-child(2) {
  //    display: none;
  //  }
  //}
  &:nth-child(odd) {
    transform: rotate(192.5deg);
    //@media screen and (max-width: 767px) {
    //  transform: none;
    //}
    .slider__img {
      transform: rotate(-180deg);
      //@media screen and (max-width: 767px) {
      //  transform: none;
      //}
    }
  }
  &__item {
    width: 21vw;
    margin-bottom: calc(var(--index) * 2.6);
    transition: transform var(--transition);
    will-change: transform;
    background-color: var(--color-card);
    border-radius: 8px;
    box-shadow: rgb(0 0 0 / 0.15) 0 0 30px 10px;
    padding: 0.75rem;
    cursor: pointer;
    &:hover {
      transform: scale(1.04);
      h2 {
        color: var(--color-hover);
      }
    }
    //@media screen and (max-width: 1023px) {
    //  width: 42vw;
    //}
    //@media screen and (max-width: 767px) {
    //  width: 84vw;
    //}
  }
  &__img {
    width: 100%;
    height: 100%;
    background-size: cover;
    border-radius: 8px;
    &_title,
    &_links {
      left: 0;
      right: 0;
      position: absolute;
      background-color: var(--color-card);
      a {
        font-size: 0.75rem;
        &:not(:last-of-type) {
          margin-right: 1rem;
        }
        &:hover {
          transform: scale(1.05);
        }
        svg {
          margin-left: 4px;
        }
      }
    }
    &_title {
      top: 0;
      padding: 0.25rem 0;
      margin-top: -0.25rem;
      h2 {
        font-size: 1.125rem;
        color: var(--color-text);
        &:hover {
          transform: none;
          color: #00ffb9;
        }
      }
    }
    &_links {
      bottom: 0;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;
      padding: 0.5rem 0;
      margin-bottom: -0.5rem;
    }
  }
}
</style>
