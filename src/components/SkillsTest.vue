<!-- eslint-disable vue/multi-word-component-names -->
<script setup></script>

<template>
  <section class="skills">
    <i id="skills" />
    <h2>Things I Can Do</h2>
    <div>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, dolor rerum! Rem
        inventore beatae dicta nemo vero, dolorum rerum vitae mollitia qui obcaecati facere aperiam
        sed nulla? Voluptatibus, sapiente consectetur?
      </p>
    </div>
    <div class="skills__list">
      <div class="skills__list_item">
        <div class="skills__list_image">
          <img src="/icons/React.png" alt="React" />
        </div>
        <label class="tech-text">React</label>
      </div>
      <div class="skills__list_item">
        <div class="skills__list_image">
          <img src="/icons/VueJS.png" alt="VueJS" />
        </div>
        <label class="tech-text">VueJS</label>
      </div>
      <div class="skills__list_item">
        <div class="skills__list_image">
          <img src="/icons/MobX.png" alt="MobX" />
        </div>
        <label class="tech-text">MobX</label>
      </div>
      <div class="skills__list_item">
        <div class="skills__list_image">
          <img src="/icons/Pinia.png" alt="Pinia" />
        </div>
        <label class="tech-text">Pinia</label>
      </div>
      <div class="skills__list_item">
        <div class="skills__list_image">
          <img src="/icons/JavaScript.png" alt="JavaScript" />
        </div>
        <label class="tech-text">JavaScript</label>
      </div>
      <div class="skills__list_item">
        <div class="skills__list_image">
          <img src="/icons/TypeScript.png" alt="TypeScript" />
        </div>
        <label class="tech-text">TypeScript</label>
      </div>
      <div class="skills__list_item">
        <div class="skills__list_image">
          <img src="/icons/HTML5.png" alt="HTML5" />
        </div>
        <label class="tech-text">HTML5</label>
      </div>
      <div class="skills__list_item">
        <div class="skills__list_image">
          <img src="/icons/CSS3.png" alt="CSS3" />
        </div>
        <label class="tech-text">CSS3</label>
      </div>
      <div class="skills__list_item">
        <div class="skills__list_image">
          <img src="/icons/Sass.png" alt="Sass" />
        </div>
        <label class="tech-text">Sass</label>
      </div>
      <div class="skills__list_item">
        <div class="skills__list_image">
          <img src="/icons/Firebase.png" alt="Firebase" />
        </div>
        <label class="tech-text">Firebase</label>
      </div>
      <div class="skills__list_item">
        <div class="skills__list_image">
          <img src="/icons/NodeJS.png" alt="NodeJS" />
        </div>
        <label class="tech-text">NodeJS</label>
      </div>
      <div class="skills__list_item">
        <div class="skills__list_image">
          <img src="/icons/Rest API.png" alt="Rest API" />
        </div>
        <label class="tech-text">Rest API</label>
      </div>
      <div class="skills__list_item">
        <div class="skills__list_image">
          <img src="/icons/GraphQL.png" alt="GraphQL" />
        </div>
        <label class="tech-text">GraphQL</label>
      </div>
      <div class="skills__list_item">
        <div class="skills__list_image">
          <img src="/icons/Git.png" alt="Git" />
        </div>
        <label class="tech-text">Git</label>
      </div>
      <div class="skills__list_item">
        <div class="skills__list_image">
          <img src="/icons/GSAP.png" alt="GSAP" />
        </div>
        <label class="tech-text">GSAP</label>
      </div>
      <div class="skills__list_item">
        <div class="skills__list_image">
          <img src="/icons/TailwindCSS.png" alt="TailwindCSS" />
        </div>
        <label class="tech-text">TailwindCSS</label>
      </div>
      <div class="skills__list_item">
        <div class="skills__list_image">
          <img src="/icons/MUI.png" alt="MUI" />
        </div>
        <label class="tech-text">MUI</label>
      </div>
      <div class="skills__list_item">
        <div class="skills__list_image">
          <img src="/icons/WordPress.png" alt="WordPress" />
        </div>
        <label class="tech-text">WordPress</label>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.skills {
  h2::after {
    background-image: url('@/assets/img/subtitles/skills.png') type('image/png');
  }
  &__list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: 1.125rem;
    grid-auto-rows: 1fr;
    @media screen and (max-width: 450px) {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(90px, 1fr));
    }
    &_item {
      display: grid;
      grid-template: 1fr auto / 1fr;
      grid-auto-flow: row;
      justify-items: center;
      align-items: end;
      padding: 0.75rem;
      background: var(--color-white);
      border: var(--border);
      box-shadow: var(--box-shadow);
    }
    &_image {
      position: relative;
      margin: auto;
      padding-bottom: 60%;
      aspect-ratio: 1/1;
      display: flex;
      justify-content: center;
      img {
        position: absolute;
        top: 0;
        height: 100%;
        object-fit: contain;
        z-index: 2;
      }
    }
    label {
      text-align: center;
      padding-top: 0.75rem;
      @media screen and (max-width: 500px) {
        font-size: 10px;
      }
    }
  }
}
</style>
