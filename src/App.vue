<script setup>
import YearContainer from './components/YearContainer.vue';

const navHeight = 120.4;

const years = [
  {
    year: '2026',
    color: '#3052A1',
    images: [
      { src: '/images/2026/horizontal1.jpg', orientation: 'horizontal', col: '1 / 2',  row: 'span 5', title: 'title1', description: '' },
      { src: '/images/2026/vertical3.jpg',   orientation: 'vertical',   col: '3',      row: 'span 6', title: 'title3', description: '' },
      { src: '/images/2026/horizontal2.jpg', orientation: 'horizontal', col: '2 / 3',  row: 'span 6', title: 'title2', description: '' },
      { src: '/images/2026/vertical1.jpg',   orientation: 'vertical',   col: '1',      row: 'span 9', title: 'title3', description: '' },
      { src: '/images/2026/horizontal3.jpg', orientation: 'horizontal', col: '2 / 3',  row: 'span 6', title: 'title3', description: '' },
    ],
  },
  {
    year: '2025',
    color: '#CB1D22',
    images: [
      { src: '/images/2025/horizontal1.jpg', orientation: 'horizontal', col: '1 / 2',  row: 'span 5', title: 'title1', description: '' },
      { src: '/images/2025/vertical3.jpg',   orientation: 'vertical',   col: '3',      row: 'span 6', title: 'title3', description: '' },
      { src: '/images/2025/horizontal2.jpg', orientation: 'horizontal', col: '2 / 3',  row: 'span 6', title: 'title2', description: '' },
      { src: '/images/2025/vertical1.jpg',   orientation: 'vertical',   col: '1',      row: 'span 9', title: 'title3', description: '' },
      { src: '/images/2025/horizontal3.jpg', orientation: 'horizontal', col: '2 / 3',  row: 'span 6', title: 'title3', description: '' },
    ],
  },
  { year: '2024', color: '#398E2D', images: [] },
  { year: '2023', color: '#768CBF', images: [] },
  { year: '2022', color: '#768CBF', images: [] },
];
</script>

<template>
  <main>
    <YearContainer
      v-for="(entry, i) in years"
      :key="entry.year"
      :id="`year-${entry.year}`"
      :year="entry.year"
      :color="entry.color"
      :images="entry.images"
      :navHeight="navHeight"
      :scrollToColor="years[i + 1]?.color ?? entry.color"
    />
  </main>
</template>