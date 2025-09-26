import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

// let isInView = ScrollTrigger;

gsap.to('.year-2025', {
	scrollTrigger: {
        trigger: '.year-2025',
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
        markers: true,
    },
    y: -500,
    duration: 5
});