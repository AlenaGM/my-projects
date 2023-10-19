<template>
  <Header />
  <main class="main">
    <div class="progressbar"></div>
    <SocialWidget />
    <About />
    <Skills />
    <Work />
    <Contact />
  </main>
  <Footer />
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'
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

let mediaAnimation = gsap.matchMedia()
let ctx

onMounted(() => {
  ctx = gsap.context(() => {
    //Progressbar animation
    mediaAnimation.add('(max-width: 1024px)', () => {
      gsap.set('.progressbar', { width: 0 })
      gsap.to('.progressbar', {
        width: '100%',
        scrollTrigger: {
          trigger: 'body',
          start: 'top top',
          end: 'bottom bottom',
          scrub: true
        }
      })
    })

    //Hero animation
    const tlHero = gsap.timeline({})

    gsap.set('.hero__image', { opacity: 1 })

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
    })

    mediaAnimation.add('(max-width: 1024px)', () => {
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
    })

    //Titles animation
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
  })

  //About Animation
  const tlAbout = gsap.timeline({})
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

  //Skills Animation
  mediaAnimation.add('(min-width: 1025px)', () => {
    gsap.from('.skills__list_item', {
      stagger: 0.3,
      opacity: 0,
      xPercent: 100,
      scrollTrigger: {
        trigger: '.skills__list',
        start: 'top 90%',
        end: 'bottom 50%',
        toggleActions: 'play resume none none'
      }
    })
  })

  //Work Animation
  const tlBg = gsap.timeline({})
  ScrollTrigger.create({
    animation: tlBg,
    trigger: '.work',
    start: 'top center',
    end: 'bottom center',
    duration: 0.8,
    toggleActions: 'play reverse play reverse'
  })

  tlBg
    .to('.main', {
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

  //Project card animation
  gsap.set('.card__image img', {
    scale: 1.1,
    yPercent: 5
  })

  const cards = document.querySelectorAll('.card')

  cards.forEach((card) => {
    const img = card.querySelector('img')

    gsap.to(img, {
      yPercent: -5,
      autoAlpha: 1,
      scrollTrigger: {
        trigger: card,
        start: 'top 80%',
        end: 'bottom 20%',
        scrub: 1
      }
    })
  })

  //Footer animation
  const tlToTop = gsap.timeline({})
  ScrollTrigger.create({
    animation: tlToTop,
    trigger: '.about',
    start: 'bottom bottom',
    toggleActions: 'play none none reverse'
  })

  mediaAnimation.add('(min-width: 1025px)', () => {
    tlToTop.from('.footer__to-top', {
      autoAlpha: 0,
      opacity: 0,
      y: '160px',
      duration: 0.8,
      ease: 'back.out(2.5)'
    })
  })

  mediaAnimation.add('(max-width: 1024px)', () => {
    tlToTop.from('.footer__to-top', {
      autoAlpha: 0,
      opacity: 0,
      y: '80px',
      duration: 0.4,
      ease: 'power1.in'
    })
  })
})

onUnmounted(() => {
  ctx.revert() // <- Easy Cleanup!
})
</script>
