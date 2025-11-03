import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

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

const menu_tween = gsap.from(".dropdown-menu > a", { opacity: 0, y: 0, duration: 0.5, stagger: 0.05 });

dropdown_button.addEventListener("mouseenter", () => {
    menu_tween.play();
  });
  
dropdown.addEventListener("mouseleave", () => {
    menu_tween.reverse();
});

const link_containers = document.querySelectorAll('.link-container');

// link_containers.forEach((link_container) => {
    let main_link = link_containers[0].querySelector(".main_link")
    let transition_link = link_containers[0].querySelector(".hover-link")
    let tween_link = gsap.from(transition_link, { width: 0 })

    main_link.addEventListener("mouseenter", () => {
        tween_link.play();
        console.log("weee")
    })

// })