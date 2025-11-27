import gsap from 'gsap';
import { ScrollTrigger, MotionPathPlugin } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(MotionPathPlugin);

// let isInView = ScrollTrigger;

// get all year headers except for the first one
let headers = document.querySelectorAll(".year-header");
let nav = document.querySelector("nav");
document.querySelectorAll(".year-container")[0].style.marginTop = nav.offsetHeight + "px";
headers.forEach((header) => header.style.top = nav.offsetHeight + "px")

// console.log(nav.offsetHeight)
// console.log(document.querySelectorAll(".year-container")[0].style.marginTop);

headers.forEach((header) => {
    gsap.to(header, {
        scrollTrigger: {
            trigger: header,
            start: 'top 64px',
            end: 'bottom 64px',
            toggleActions: "play none reset reset",
            scrub: true,
            duration: 0.5,
            // markers: true,
        },
        // backgroundColor: "#080807",
        backgroundColor: "#080807",
        color: "#fcfcfc",
        duration: 0.5,
        ease: "power3.out"
    });})


const dropdown = document.querySelector('.dropdown');
const dropdown_button = dropdown.querySelector('.dropdown-button');
const dropdown_button_width = dropdown_button.offsetWidth;

const link_containers = dropdown.querySelectorAll('.link-container');

dropdown.addEventListener("mouseenter", () => {
    let new_width = 0;

    link_containers.forEach((link_c) => {
        console.log("test",dropdown_button_width)
        gsap.to(link_c, {
            x: dropdown_button_width + new_width
        })
        new_width += link_c.offsetWidth
    })
})

dropdown.addEventListener("mouseleave", () => {
    link_containers.forEach((link_c) => {
        console.log("test",dropdown_button_width)
        gsap.to(link_c, {
            x: 0
        })
    })
})

// let main_link = link_containers[0].querySelector(".main-link")
// let hover_link = link_containers[0].querySelector(".hover-link")

// link_containers[0].addEventListener('mouseenter', () => {
//     gsap.to(hover_link, { 
//         motionPath: {
//             path: ""
//         },
//     duration: 0.4,
//     ease: 'power2.out'
//     });

//     gsap.to(main_link, { 
//         motionPath: {
//             path: ""
//         },
//     duration: 0.4,
//     ease: 'power2.out'
//     });
// });

// link_containers[0].addEventListener('mouseleave', () => {
//     gsap.to(hover_link, { 
//         motionPath: {
//             path: [
//                 { x: 0, y: 0 },
//                 { x: 0, y: -30 }  // Slide up 30px
//             ]
//         },
//     duration: 0.4,
//     ease: 'power2.out'
//     });

//     gsap.to(main_link, { 
//         motionPath: {
//             path: [
//                 { x: 0, y: -30 },
//                 { x: 0, y: -30 }  // Slide up 30px
//             ]
//         },
//     duration: 0.4,
//     ease: 'power2.out'
//     });
// })