// ============================================
// IMPORTS & SETUP
// ============================================
import gsap from 'gsap';
import { ScrollTrigger, MotionPathPlugin } from 'gsap/all';
import { createApp } from 'vue'
import App from './App.vue'
import "./style.css"

createApp(App).mount('#app')

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(MotionPathPlugin);

// ============================================
// CONFIGURATION
// ============================================
const CONFIG = {
    navHeight: 59,
    colors: {
        dark: '#080807',
        light: '#fcfcfc',
        years: ['#3052A1','#CB1D22','#398E2D','#768CBF','#768CBF']
    },
    prevMouse: {x: 0, y: 0}
};

const ANIMATIONS = {
linkReset: {
    y: 0,
    rotationX: 0,
    rotationY: 0,
    rotation: 0,
    ease: 'power4.out',
    duration: 0.4
},
linkHide: {
    y: '125%',
    rotationX: -28,
    rotationY: -28,
    rotation: 10,
    ease: 'power2.out',
    duration: 0.4
},
headerScroll: {
    // color: CONFIG.colors.years[1],
    // filter: "saturate(0%)",
    ease: 'linear'
},
preloaderLineExpand: {
    ease: "power1.out",
    duration: 0.3
},
preloaderEnd: {
    yPercent: -120,
    ease: 'power2.out',
    duration: 1
}
};
// ============================================
// DOM REFERENCES
// ============================================
const DOM = {
    preloader: document.querySelector('.preloader-container'),
    preloaderLine: document.querySelector('.preloader-line'),
    fakeButton: document.querySelector('.fake-button'),
    headers: document.querySelectorAll('.year-header'),
    artSections: document.querySelectorAll('.year-container'),
    nav: document.querySelector('nav'),
    artImages: document.querySelectorAll('.picture-border > img'),
    artImagesContainers: document.querySelectorAll('.picture-border'),
    dropdown: {
      container: document.querySelector('.dropdown'),
      get button() { return this.container.querySelector('.dropdown-button'); },
      get menu() { return this.container.querySelector('.dropdown-menu'); },
      get links() { return this.container.querySelectorAll('.link-container'); }
    }
};

// ============================================
// UTILITY FUNCTIONS
// ============================================
const next_preloader_year = (slides) => {
    slides.push(slides.shift());

    gsap.set(slides[0], {y: "0%"})
    gsap.set(slides[1], {y: "100%"})
}
// ============================================
// DROPDOWN MENU
// ============================================

const animateLink = (mainLink, hoverLink, isHovering) => {
    if (isHovering) {
      gsap.to(hoverLink, ANIMATIONS.linkReset);
      gsap.to(mainLink, ANIMATIONS.linkHide);
    } else {
      gsap.to(mainLink, ANIMATIONS.linkReset);
      gsap.to(hoverLink, ANIMATIONS.linkHide);
    }
  };
  
const setupDropdownMenu = () => {
    const { container, button, menu, links } = DOM.dropdown;
    const buttonWidth = button.offsetWidth;

    container.addEventListener('mouseenter', () => {
        let prevX = buttonWidth;
        Array.from(menu.children).forEach((item) => {
            gsap.to(item, { x: prevX });
            prevX += item.offsetWidth;
        });
    });

    container.addEventListener('mouseleave', () => {
        Array.from(menu.children).forEach((item) => {
        gsap.to(item, { x: 0 });
        });
    });

    links.forEach((link) => {
        const mainLink = link.querySelector('.main-link');
        const hoverLink = link.querySelector('.hover-link');
        
        link.addEventListener('click', () => {
            const target = document.querySelector(`.${link.dataset.target}`);
            if (target) target.scrollIntoView({ behavior: 'smooth' });
            console.log("test")
        })
        link.addEventListener('mouseenter', () => animateLink(mainLink, hoverLink, true));
        link.addEventListener('mouseleave', () => animateLink(mainLink, hoverLink, false));
    });
};

// ============================================
// INITIALIZATION
// ============================================
const hidePreloader = () => {
    gsap.to(DOM.preloader, ANIMATIONS.preloaderEnd);
}

const init = () => {
    setupDropdownMenu();
    // other setup functions...
};

window.addEventListener('load', () => {
    window.scrollTo(0, 0);
    init();
});
// ============================================
// PRELOADER ANIMATIONS
// ============================================
const setupPreloader = () => {
    let tl = gsap.timeline({});
    let slides = gsap.utils.toArray(".loading-header");

    tl.add(() => next_preloader_year(slides), "+=1")
      .add(() => next_preloader_year(slides), "+=1")
      .add(() => next_preloader_year(slides), "+=1")
      .add(() => next_preloader_year(slides), "+=1")

    // Track image load progress
    const images = Array.from(document.querySelectorAll('.year-art-grid img'));
    const total = images.length;
    let loaded = 0;
    let imagesDone = false;

    const tryHide = () => {
        if (!imagesDone) return;
        setTimeout(() => {
            hidePreloader();
            document.body.style.overflow = "scroll";
        }, 2000);
    };

    const onImageSettle = () => {
        loaded++;
        const progress = loaded / total;
        gsap.to(DOM.preloaderLine, {
            ...ANIMATIONS.preloaderLineExpand,
            width: `${progress * 100}%`,
        });

        if (loaded === total) {
            imagesDone = true;
            tryHide();
        }
    };

    images.forEach(img => {
        if (img.complete) {
            onImageSettle();
        } else {
            img.addEventListener('load', onImageSettle);
            img.addEventListener('error', onImageSettle);
        }
    });
}
setupPreloader();


// ============================================
// SCROLL ANIMATIONS
// ============================================

// ============================================
// DROPDOWN MENU
// ============================================

// ============================================
// INITIALIZATION
// ============================================