<template>
  <Header />
  <main class="main">
    <SocialWidget />
    <About />
    <Skills />
    <Work />
    <Contact />
  </main>
  <Footer />
</template>

<script setup>
import { onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import About from '@/components/About.vue'
import Skills from '@/components/Skills.vue'
import Work from '@/components/Work.vue'
import Contact from '@/components/Contact.vue'
import SocialWidget from '@/components/ui/SocialWidget.vue'

gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  //About section
  gsap.set('.about__title span', {
    opacity: 1
  })

  gsap.set('.about__info', {
    opacity: 1
  })

  gsap.set('.about__image img', {
    scale: 1.1,
    yPercent: 5
  })

  const tlAbout = gsap.timeline({
    ease: 'power1.in',
    scrollTrigger: {
      trigger: '.about',
      start: 'top 80%',
      end: 'top 30%',
      scrub: 1
    }
  })

  tlAbout
    .from(
      '.about__title span',
      {
        autoAlpha: 0,
        opacity: 0,
        y: '40px'
      },
      '<'
    )
    .from(
      '.about__image',
      {
        y: '40px'
      },
      '<'
    )
    .from(
      '.about__image img',
      {
        autoAlpha: 0,
        opacity: 0
      },
      '<'
    )
    .to(
      '.about__image img',
      {
        yPercent: -5
      },
      '<'
    )
    .from(
      '.about__info',
      {
        autoAlpha: 0,
        opacity: 0,
        y: '40px'
      },
      '<'
    )

  //Skills section
  gsap.set('.skills__title span', {
    opacity: 1
  })

  gsap.set('.skills__info', {
    opacity: 1
  })

  const tlSkills = gsap.timeline({
    ease: 'power1.in',
    scrollTrigger: {
      trigger: '.skills',
      start: 'top 80%',
      end: 'top 30%',
      scrub: 1
    }
  })

  tlSkills
    .from(
      '.skills__title span',
      {
        autoAlpha: 0,
        opacity: 0,
        y: '40px'
      },
      '<'
    )
    .from(
      '.skills__info',
      {
        autoAlpha: 0,
        opacity: 0,
        y: '40px'
      },
      '<'
    )

  //Work section - title&intro
  gsap.set('.work__title span', {
    opacity: 1
  })

  gsap.set('.work__info', {
    opacity: 1
  })

  const tlWork = gsap.timeline({
    ease: 'power1.in',
    scrollTrigger: {
      trigger: '.work',
      start: 'top 80%',
      end: 'top 30%',
      scrub: 1
    }
  })

  tlWork
    .from(
      '.work__title span',
      {
        autoAlpha: 0,
        opacity: 0,
        y: '40px'
      },
      '<'
    )
    .from(
      '.work__info',
      {
        autoAlpha: 0,
        opacity: 0,
        y: '40px'
      },
      '<'
    )

  //Contact section
  gsap.set('.contact__title span', {
    opacity: 1
  })

  gsap.set('.contact__container', {
    opacity: 1
  })

  gsap.set('.contact__form', {
    opacity: 1
  })

  const tlContact = gsap.timeline({
    ease: 'power1.in',
    scrollTrigger: {
      trigger: '.contact',
      start: 'top 80%',
      end: 'top 30%',
      scrub: 1
    }
  })

  tlContact
    .from(
      '.contact__title span',
      {
        autoAlpha: 0,
        opacity: 0,
        y: '40px'
      },
      '<'
    )
    .from(
      '.contact__info',
      {
        autoAlpha: 0,
        opacity: 0,
        y: '40px'
      },
      '<'
    )
    .from(
      '.contact__form',
      {
        y: '40px',
        autoAlpha: 0,
        opacity: 0
      },
      '<'
    )

  //To top arrow
  gsap.set('.footer__to-top', {
    opacity: 1
  })

  gsap.from('.footer__to-top', {
    scrollTrigger: {
      trigger: '.about',
      start: 'bottom bottom',
      toggleActions: 'play none play reverse'
    },
    ease: 'power1.in',
    autoAlpha: 0,
    opacity: 0
  })
})

//onMounted(() => {
//  const titles = document.querySelectorAll('h2')
//  const subtitles = document.querySelectorAll('h2 span')
//  const intros = document.querySelectorAll('.section-intro')
//
//  subtitles.forEach((subtitle) => {
//    gsap.set(subtitle, {
//      opacity: 1
//    })
//
//    const tlSubtitles = gsap.timeline({
//      ease: 'power1.in',
//      scrollTrigger: {
//        trigger: subtitle,
//        start: 'top 80%',
//        end: 'top 30%',
//        scrub: true
//      }
//    })
//
//    tlSubtitles.from(subtitle, {
//      autoAlpha: 0,
//      opacity: 0,
//      y: '40px'
//    })
//  })
//
//  intros.forEach((intro) => {
//    gsap.set(intro, {
//      opacity: 1
//    })
//
//    const tlIntros = gsap.timeline({
//      ease: 'power1.in',
//      scrollTrigger: {
//        trigger: intro,
//        start: 'top 90%',
//        end: 'top 50%',
//        scrub: true
//      }
//    })
//
//    tlIntros.from(intro, {
//      autoAlpha: 0,
//      opacity: 0,
//      y: '40px'
//    })
//  })
//
//  gsap.set('.about__image img', {
//    scale: 1.1,
//    yPercent: 5
//  })
//
//  const tlAboutImg = gsap.timeline({
//    ease: 'power1.in',
//    scrollTrigger: {
//      trigger: '.about__image img',
//      start: 'top 90%',
//      end: 'top 50%',
//      scrub: true
//    }
//  })
//
//  tlAboutImg
//    .to('.about__image img', {
//      yPercent: -5,
//      autoAlpha: 1,
//      opacity: 1
//    })
//    .from(
//      '.about__image',
//      {
//        y: '40px'
//      },
//      '<'
//    )
//
//  const tlForm = gsap.timeline({
//    ease: 'power1.in',
//    scrollTrigger: {
//      trigger: '.form',
//      start: 'top 90%',
//      end: 'top 50%',
//      scrub: true
//    }
//  })
//
//  tlForm.from(
//    '.form',
//    {
//      autoAlpha: 0,
//      opacity: 0,
//      y: '40px'
//    },
//    '<'
//  )
//})
</script>
