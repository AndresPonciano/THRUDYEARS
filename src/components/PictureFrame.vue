<template>
  <div>
    <div ref="wrapper" :class="['picture-wrapper', `picture-wrapper--${orientation}`]">
        <div class="picture-border">
        <img :src="imageSrc" />
        </div>
    </div>
    <p>{{ title }}</p>
    <p>{{ description }}</p>
  </div>
</template>

<script setup>
import { gsap } from 'gsap';
import { ref, onMounted, onUnmounted } from 'vue';

const props = defineProps({
  imageSrc: { type: String, required: true },
  title: { type: String, default: '' },
  description: { type: String, default: '' },
  orientation: { type: String, required: true }, // 'horizontal' | 'vertical'
});

const wrapper = ref(null);
// Store handlers so they can be removed on unmount
let onEnter, onMove, onLeave;
const setupFrameParallax = () => {
  const el = wrapper.value;
  const image = el.querySelector('img');

  const isHorizontal = props.orientation === 'horizontal';
  const scaleX = isHorizontal ? 0.95 : 0.94;
  const scaleY = isHorizontal ? 0.92 : 0.96;

  onEnter = () => {
    gsap.to(image, { scaleX, scaleY, duration: 0.2, ease: 'power2.out' });
  };

  onMove = (event) => {
    const rect = el.getBoundingClientRect();
    const normX = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    const normY = ((event.clientY - rect.top) / rect.height) * 2 - 1;

    gsap.to(image, {
      x: -normX * 20,
      y: -normY * 20,
      duration: 0.1,
    });
  };

  onLeave = () => {
    gsap.to(image, {
      x: 0,
      y: 0,
      scaleX: 1,
      scaleY: 1,
      duration: 0.4,
      ease: 'power2.out',
    });
  };

  el.addEventListener('mouseenter', onEnter);
  el.addEventListener('mousemove', onMove);
  el.addEventListener('mouseleave', onLeave);
};

onMounted(() => setupFrameParallax());

onUnmounted(() => {
  const el = wrapper.value;
  if (!el) return;
  el.removeEventListener('mouseenter', onEnter);
  el.removeEventListener('mousemove', onMove);
  el.removeEventListener('mouseleave', onLeave);
});
</script>

<style scoped>
.picture-border {
  display: flex;
}

.picture-wrapper {
  overflow: hidden;
}

.picture-wrapper:hover .picture-border {
  border: 1px solid var(--swatch-black);
}

/* GSAP controls img transforms — no CSS transition needed here */
</style>