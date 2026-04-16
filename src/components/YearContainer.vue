<template>
    <div class="year-container">
        <h1 class="header year-header" style="color: #768CBF">{{ props.year }}</h1>
        <div class="year-art-container">
            <div class="year-art year-2022">
                <div class="year-art-grid">
                    <PictureFrame />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import PictureFrame from './PictureFrame.vue';

const props = defineProps({
    year: {
        type: String,
        required: true
    }
})
</script>

<style>
.year-container {
    padding: 1rem;
}
</style>