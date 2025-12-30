import gsap from 'gsap';
import { ScrollTrigger, MotionPathPlugin } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(MotionPathPlugin);

// body.addEventListener("load", () => {
//     document.body.style.visibility = "visible";
// })

window.addEventListener('load', () => {
    console.log('Everything loaded!');
    document.body.style.overflow = "scroll";
    // document.querySelector(".preloader-container").style.visibility = "hidden";
});

const slides = gsap.utils.toArray(".loading-header");

// get all year headers except for the first one
let headers = document.querySelectorAll(".year-header");
let nav = document.querySelector("nav");

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

const menu_items = dropdown.querySelector('.dropdown-menu').children;
// const menu_items = dropdown_menu.children;
const link_containers = dropdown.querySelectorAll('.link-container');

dropdown.addEventListener("mouseenter", () => {
    let prevX = dropdown_button_width;

    Array.from(menu_items).forEach((link_c, index) => {
        gsap.to(link_c, {
            x: prevX,
        })
        prevX += link_c.offsetWidth
    })
})

dropdown.addEventListener("mouseleave", () => {
    Array.from(menu_items).forEach((link_c) => {
        gsap.to(link_c, {
            x: 0
        })
    })
})

link_containers.forEach((link_c) => {
    let main_link = link_c.querySelector(".main-link")
    let hover_link = link_c.querySelector(".hover-link")

    link_c.addEventListener('mouseenter', () => {
        gsap.to(hover_link, { 
            y: 0,           // translateY back to 0
            rotationX: 0,   // rotateX back to 0
            rotationY: 0,   // rotateY back to 0
            rotation: 0,    // rotate back to 0
            ease: 'power4.out',
            duration: 0.4,
        });
    
        gsap.to(main_link, { 
            x: 0, 
            y: '125%',  // Starting position
            rotationX: -28,
            rotationY: -28,
            rotation: 10,   // rotate back to 0
            ease: 'power2.out',
            duration: 0.4,
        });
    });
    
    link_c.addEventListener('mouseleave', () => {
        gsap.to(main_link, { 
            y: 0,           // translateY back to 0
            rotationX: 0,   // rotateX back to 0
            rotationY: 0,   // rotateY back to 0
            rotation: 0,    // rotate back to 0
            ease: 'power4.out',
            duration: 0.4,
        });
    
        gsap.to(hover_link, { 
            x: 0, 
            y: '125%',  // Starting position
            rotationX: -28,
            rotationY: -28,
            rotation: 10,   // rotate back to 0
            ease: 'power2.out',
            duration: 0.4,
        });
    });
})