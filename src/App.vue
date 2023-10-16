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
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import About from '@/components/About.vue'
import Skills from '@/components/Skills.vue'
import Work from '@/components/Work.vue'
import Contact from '@/components/Contact.vue'
import SocialWidget from '@/components/ui/SocialWidget.vue'

import { onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

let mediaAnimation = gsap.matchMedia()

const tlHero = gsap.timeline({})
const tlAbout = gsap.timeline({})

onMounted(() => {
  mediaAnimation.add('(min-width: 1025px)', () => {
    tlHero
      .to('.hero__title span:first-child', {
        duration: 1.3,
        x: 0,
        ease: 'back.out(1.1)'
      })
      .to(
        '.hero__title span:last-child',
        {
          duration: 1.3,
          x: 0,
          ease: 'back.out(1.1)'
        },
        '<'
      )
      .from('.hero__image', {
        autoAlpha: 0,
        yPercent: 50,
        duration: 1,
        ease: 'back.out(2)'
      })
      .from(
        '.social a',
        {
          stagger: 0.3,
          autoAlpha: 0,
          xPercent: 100
        },
        '+=0.3'
      )

    const titles = document.querySelectorAll('h2 span:first-child')
    titles.forEach((title) => {
      gsap.set(title, { yPercent: 75 })

      gsap.to(title, {
        scrollTrigger: {
          trigger: title,
          start: 'top bottom',
          end: 'top 50%',
          scrub: 1
        },
        yPercent: 0
      })
    })

    gsap.set('.about__image img', {
      scale: 1.1,
      yPercent: 5
    })

    tlAbout.to('.about__image img', {
      yPercent: -5,
      autoAlpha: 1,
      scrollTrigger: {
        trigger: '.about__image',
        start: 'top 80%',
        end: 'bottom 20%',
        scrub: 1
      }
    })

    gsap.from('.skills__list_item', {
      stagger: 0.3,
      opacity: 0,
      yPercent: 100,
      scrollTrigger: {
        trigger: '.skills',
        start: 'top 50%',
        end: 'bottom 90%',
        markers: true
      }
    })

    gsap.set('.card__image img', {
      scale: 1.1,
      yPercent: 5
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
            yPercent: -5,
            autoAlpha: 1
          },
          '<'
        )
        .from(content, { yPercent: 10 }, '<')
        .from(deco, { yPercent: 10 }, '<')
    })

    gsap.from('.footer__to-top', {
      scrollTrigger: {
        trigger: '.about',
        start: 'bottom bottom',
        toggleActions: 'play none none reverse'
      },
      autoAlpha: 0,
      opacity: 0,
      y: '160px',
      duration: 0.8,
      ease: 'back.out(2.5)'
    })
  })

  mediaAnimation.add('(max-width: 1024px)', () => {
    gsap.to('.progressbar', {
      width: '100%',
      scrollTrigger: {
        trigger: 'body',
        start: 'top top',
        end: 'bottom bottom',
        scrub: true
      }
    })

    tlHero
      .to('.hero__title span:first-child', {
        duration: 1.3,
        x: 0,
        ease: 'back.out(1.1)'
      })
      .to(
        '.hero__title span:last-child',
        {
          duration: 1.3,
          x: 0,
          ease: 'back.out(1.1)'
        },
        '<'
      )
      .from('.hero__image', {
        autoAlpha: 0,
        yPercent: 100,
        duration: 0.8
      })
      .from(
        '.social a',
        {
          stagger: 0.3,
          autoAlpha: 0,
          xPercent: 100
        },
        '+=0.3'
      )

    const titles = document.querySelectorAll('h2 span:first-child')
    titles.forEach((title) => {
      gsap.set(title, { yPercent: 75 })

      gsap.to(title, {
        scrollTrigger: {
          trigger: title,
          start: 'top bottom',
          end: 'top 50%',
          scrub: 1
        },
        yPercent: 0
      })
    })

    gsap.set('.about__image img', {
      scale: 1.1,
      yPercent: 5
    })

    tlAbout.to('.about__image img', {
      yPercent: -5,
      autoAlpha: 1,
      scrollTrigger: {
        trigger: '.about__image',
        start: 'top 80%',
        end: 'bottom 20%',
        scrub: 1
      }
    })

    const cards = document.querySelectorAll('.card')
    cards.forEach((card) => {
      mediaAnimation.add('(max-width: 1024px)', () => {
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
        tlCard.from(content, { yPercent: 10 }, '<').from(deco, { yPercent: 10 }, '<')
      })
    })

    gsap.from('.footer__to-top', {
      scrollTrigger: {
        trigger: '.about',
        start: 'bottom bottom',
        toggleActions: 'play none none reverse'
      },
      autoAlpha: 0,
      opacity: 0,
      y: '80px',
      duration: 0.4,
      ease: 'power1.in'
    })
  })
})

onUnmounted(() => {
  tlHero.revert()
  tlAbout.revert()
})
</script>
