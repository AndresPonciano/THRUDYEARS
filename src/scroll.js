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
headers.forEach((header) => header.style.top = nav.offsetHeight + "px")

console.log(nav.offsetHeight)
console.log(document.querySelectorAll(".year-container")[0].style.marginTop);



// art_sections.forEach((currentValue, currentIndex, listObj) => {
//     console.log(currentValue.scrollHeight);
//     art_sections_height.push(currentValue.scrollHeight);
// }, );



// console.log(art_sections);

// get heights of year body sections

headers.forEach((header) => {
    gsap.to(header, {
        scrollTrigger: {
            trigger: header,
            start: 'top 64px',
            end: 'bottom 100px',
            toggleActions: "none reverse",
            markers: true,
        },
        backgroundColor: "red"
    });
})

// headers.forEach((header) => {
//     gsap.to(header, {
//         scrollTrigger: {
//             trigger: header,
//             // start: 'top 64px',
//             // end: 'bottom 64px',
//             markers: true,
//         },
//         backgroundColor: "white"
//     });
// })