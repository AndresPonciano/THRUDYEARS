import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

// let isInView = ScrollTrigger;

// get all year headers except for the first one
let headers = document.querySelectorAll(".year-header");
let art_sections = document.querySelectorAll(".year-art");
let art_sections_height = [];
let nav = document.querySelector("nav");
document.querySelectorAll(".year-container")[0].style.marginTop = nav.offsetHeight + "px";

console.log(nav.scrollHeight)
console.log(document.querySelectorAll(".year-container")[0].style);



// art_sections.forEach((currentValue, currentIndex, listObj) => {
//     console.log(currentValue.scrollHeight);
//     art_sections_height.push(currentValue.scrollHeight);
// }, );



// console.log(art_sections);

// get heights of year body sections

// gsap.to('.year-2025', {
// 	scrollTrigger: {
//         trigger: '.year-2025',
//         start: 'top top',
//         pin: true,
//         // end: 'bottom bottom',
//         scrub: true,
//         markers: true,
//     },
//     y: -art_sections_height[0],
//     duration: 5,
//     // ease: 'none',
// });