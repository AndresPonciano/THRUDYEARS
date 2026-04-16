<template>
    <div class="picture-wrapper picture-wrapper--horizontal">
        <div class="picture-border">
            <img src="../images/horizontal2.jpg"/>
        </div>
        <p>title</p>
        <p>this is the description</p>
    </div>
</template>

<script>
import { gsap } from 'gsap';
import { onMounted } from 'vue';

export default {
  name: 'PictureCard'
}

const setupFrameParallax = () => {
    const wrappers = document.querySelector('.picture-wrapper');

    wrappers.forEach((wrapper) => {
        const image = wrapper.querySelector('img');
        const isHorizontal = wrapper.classList.contains('picture-wrapper--horizontal');
        const scaleX = isHorizontal ? 0.95 : 0.94;
        const scaleY = isHorizontal ? 0.92 : 0.96;

        wrapper.addEventListener('mouseenter', () => {
            gsap.to(image, { scaleX, scaleY, duration: 0, ease: 'power2.out' });
        });

        wrapper.addEventListener('mousemove', (event) => {
            const rect = wrapper.getBoundingClientRect();

            const normX = ((event.clientX - rect.left) / rect.width) * 2 - 1;
            const normY = ((event.clientY - rect.top) / rect.height) * 2 - 1;

            const moveX = -normX * 20;
            const moveY = -normY * 20;

            gsap.to(image, {
                x: moveX,
                y: moveY,
                duration: 0,
            });
        });

        wrapper.addEventListener('mouseleave', () => {
            gsap.to(image, {
                x: 0,
                y: 0,
                scaleX: 1,
                scaleY: 1,
                duration: 0.4,
                ease: 'power2.out'
            });
        });
    });
}

onMounted(() => {
    // TODO: im guessing well have to pass in the specific wrapper
    setupFrameParallax();
})
</script>

<style>
.picture-border {
  display: flex;
}

.picture-wrapper {
  overflow: hidden;
}

.picture-wrapper img{
  transition: transform 0.3s ease;
}

.picture-wrapper:hover .picture-border{
  border: solid;
  border-color: var(--swatch-black);
  border-width: 1px;
}

.picture-wrapper--horizontal:hover img{
  /* transform: scale(95%, 92%) */
}

.picture-wrapper--vertical:hover img{
  /* transform: scale(94%, 96%) */
}
</style>