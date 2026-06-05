<template>
  <main>
    <YearContainer
      id="year-2026"
      year="2026"
      color="#3052A1"
      :images="[
        { src: '/images/2026/horizontal1.jpg', orientation: 'horizontal', col: '1 / 2', row: 'span 5', title: 'title1', description: '' },
        { src: '/images/2026/vertical3.jpg', orientation: 'vertical',   col: '3', row: 'span 6', title: 'title3', description: '' },
        { src: '/images/2026/horizontal2.jpg', orientation: 'horizontal',   col: '2 / 3', row: 'span 6', title: 'title2', description: '' },
        { src: '/images/2026/vertical1.jpg', orientation: 'vertical',   col: '1', row: 'span 9', title: 'title3', description: '' },
        { src: '/images/2026/horizontal3.jpg', orientation: 'horizontal',   col: '2 /3', row: 'span 6', title: 'title3', description: '' },
      ]"
    />
    <YearContainer 
      id="year-2025" 
      year="2025" 
      color="#CB1D22"       
      :images="[
        { src: '/images/2026/horizontal1.jpg', orientation: 'horizontal', col: '1 / 2', row: 'span 5', title: 'title1', description: '' },
        { src: '/images/2026/vertical3.jpg', orientation: 'vertical',   col: '3', row: 'span 6', title: 'title3', description: '' },
        { src: '/images/2026/horizontal2.jpg', orientation: 'horizontal',   col: '2 / 3', row: 'span 6', title: 'title2', description: '' },
        { src: '/images/2026/vertical1.jpg', orientation: 'vertical',   col: '1', row: 'span 9', title: 'title3', description: '' },
        { src: '/images/2026/horizontal3.jpg', orientation: 'horizontal',   col: '2 /3', row: 'span 6', title: 'title3', description: '' },
      ]"
    />
    <YearContainer id="year-2024" year="2024" color="#398E2D" :images="[]"/>
    <YearContainer id="year-2023" year="2023" color="#768CBF" :images="[]"/>
    <YearContainer id="year-2022" year="2022" color="#768CBF" :images="[]"/>
  </main>
</template>

<script>
import YearContainer from './components/YearContainer.vue';
export default {
  name: 'App',
  components: { YearContainer }
}
</script>