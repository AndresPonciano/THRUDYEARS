<template>
    <div class="year-container">
        <h1 class="header year-header" style="color: #768CBF">{{ props.year }}</h1>
        <div class="year-art-container">
            <div class="year-art year-2022">
                <div class="year-art-grid">
                    <PictureFrame imageSrc="src/images/horizontal1.jpg" 
                                  orientation="horizontal" title="Image Title" description="Image Description" />
                    <PictureFrame imageSrc="src/images/horizontal2.jpg" 
                                  orientation="horizontal" title="Image Title" description="Image Description" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import PictureFrame from './PictureFrame.vue';
import { onMounted } from 'vue';

const props = defineProps({
    year: {
        type: String,
        required: true
    }
})

const initScrollAnimations = () => {
    // DOM.headers.forEach((header, index) => {
    //   let distance = DOM.artSections[index].offsetHeight;
    //   gsap.to(header, {
    //     scrollTrigger: {
    //       trigger: header,
    //       start: `top ${CONFIG.navHeight}px`,
    //       end: `+=${distance}`,
    //       toggleActions: "play none reset reset",
    //       scrub: true,
    //       duration: 100,
    //     },
    //     ...ANIMATIONS.headerScroll,
    //     color: CONFIG.colors.years[index+1]
    //   });
    // });
};

onMounted(() => {
    initScrollAnimations();
})
</script>

<style>
.year-container {
  width: 100%;
  padding: 0 var(--site-margin-main);
}

.year-header {
  position: sticky;
  top: 59px;
  background-color: var(--swatch-white);
  filter: saturate(100%);
}

.wrapper, .year-container > .year-2025 {
  margin-top: 59px;
}

.year-art-container {
  position: relative;
}

.year-art{
  display: block;
  position: static;
  overflow: scroll;
  scrollbar-width: none;
}

.year-art-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 100px;  /* Set a base row height */
  gap: 16px;  /* Add spacing */
  max-width: var(--max-width-full);
}

.year-art-grid img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.year-art-grid div:nth-child(6n+1) {
  grid-column: 1 / 2;
  grid-row: span 4;  /* Takes 1 row (100px) */
}

.year-art-grid div:nth-child(6n+2) {
  grid-column: 3;
  grid-row: span 9;  /* Takes 4 rows (400px) */
}

.year-art-grid div:nth-child(6n+3) {
  grid-column: 2 / 3;
  grid-row: span 8;
}

.year-art-grid div:nth-child(6n+4) {
  grid-column: 1;
  grid-row: span 5;
}

.year-art-grid div:nth-child(6n+5) {
  grid-column: 2 / 3;
  grid-row: span 8;
}

.year-art-grid div:nth-child(6n+6) {
  grid-column: 1 / 2;
  grid-row: span 4;
}
</style>