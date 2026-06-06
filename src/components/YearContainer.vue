<template>
  <div class="year-container">
    <h1 ref="headerRef" class="header year-header" :style="{ color }">
      {{ year }}
    </h1>
    <div class="year-art-container">
      <div ref="artRef" class="year-art">
        <div class="year-art-grid">
          <PictureFrame
            v-for="(image, i) in images"
            :key="i"
            :imageSrc="image.src"
            :orientation="image.orientation"
            :title="image.title"
            :description="image.description"
            :style="{ gridColumn: image.col, gridRow: image.row }"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import PictureFrame from './PictureFrame.vue';

gsap.registerPlugin(ScrollTrigger);

const props = defineProps({
  year: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    default: '#768CBF',
  },
  images: {
    type: Array,
    default: () => [],
  },
  navHeight: {
    type: Number,
    default: 120.4,
  },
  scrollToColor: {
    type: String,
    default: null,
  },
});

const headerRef = ref(null);
const artRef = ref(null);
let scrollTriggerInstance = null;

const initScrollAnimation = () => {
  console.log(props);
  if (!headerRef.value || !artRef.value) return;
  const animProps = {
    scrollTrigger: {
      trigger: headerRef.value,
      start: `top ${props.navHeight}px`,
      end: `+=${artRef.value.offsetHeight}`,
      toggleActions: 'play none reset reset',
      scrub: true,
    },
    ...(props.scrollToColor ? { color: props.scrollToColor } : {}),
  };
  scrollTriggerInstance = gsap.to(headerRef.value, animProps);
};

onMounted(() => {
  initScrollAnimation();
});

onUnmounted(() => {
  scrollTriggerInstance?.scrollTrigger?.kill();
});
</script>

<style scoped>
.year-container {
  width: 100%;
  padding: 0 var(--site-margin-main);
}

.year-header {
  position: sticky;
  top: 120.4px;
  background-color: var(--swatch-white);
  filter: saturate(100%);
}

.year-art-container {
  position: relative;
  margin-top: 120.4px;
}

.year-art {
  display: block;
  position: static;
  overflow: scroll;
  scrollbar-width: none;
}

.year-art-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 100px;
  gap: 16px;
  max-width: var(--max-width-full);
}
</style>