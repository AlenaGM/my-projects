<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'

import { onMounted, onUnmounted, ref } from 'vue'
import gsap from 'gsap'

const main = ref()
let tl
let ctx

function toggleTimeline() {
  tl.reversed(!tl.reversed())
}

onMounted(() => {
  ctx = gsap.context((self) => {
    const boxes = self.selector('.box')
    tl = gsap
      .timeline()
      .to(boxes[0], { x: 120, rotation: 360 })
      .to(boxes[1], { x: -120, rotation: -360 }, '<')
      .to(boxes[2], { y: -166 })
      .reverse()
  }, main.value) // <- Scope!
})

onUnmounted(() => {
  ctx.revert() // <- Easy Cleanup!
})
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
      <section class="boxes-container" ref="main">
        <h1>Use the button to toggle a Timeline</h1>
        <div>
          <button @click="toggleTimeline">Toggle Timeline</button>
        </div>
        <div class="box">Box 1</div>
        <div class="box">Box 2</div>
        <div class="box">Box 3</div>
      </section>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
