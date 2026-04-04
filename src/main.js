// ============================================
// IMPORTS & SETUP
// ============================================
import gsap from 'gsap';
import { ScrollTrigger, MotionPathPlugin } from 'gsap/all';

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
    width: "100%"
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
    let slides_length = slides.length;

    rotate(0,slides_length-1,slides);
    rotate(1,slides_length-1,slides);

    gsap.set(slides[0], {y: "0%"})
    gsap.set(slides[1], {y: "100%"})
}

const rotate = (start_index,end_index,slides) => {
    let i = start_index;
    while(i < end_index) {
        let temp = slides[i];
        slides[i] = slides[end_index];
        slides[end_index] = temp;

        i += 1;
        end_index -= 1;
    }
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
        
        link.addEventListener('mouseenter', () => animateLink(mainLink, hoverLink, true));
        link.addEventListener('mouseleave', () => animateLink(mainLink, hoverLink, false));
    });
};

// ============================================
// ART IMG 
// ============================================
const setupFrameParallax = () => {
    DOM.artImages.forEach((image, index) => {
        image.addEventListener('mousemove', (event) => {
            // MIGHT WANNA MAKE VARIALBES HERE BASED OFF IF HORIZONTAL OR VERTICAL IMG
            console.log(DOM.artImagesContainers[index].style);

            let mouseX = (event.clientX / window.innerWidth) * 5;
            let mouseY = (event.clientY / window.innerHeight) * 8; 
            console.log(mouseX, mouseY);

            let changeX = mouseX - CONFIG.prevMouse.x;
            let changeY = mouseY - CONFIG.prevMouse.y;
            // image.style.translate = `${changeX}px ${changeY}px`


            CONFIG.prevMouse.x = mouseX;
            CONFIG.prevMouse.y = mouseY;
        })
    })
}


// ============================================
// INITIALIZATION
// ============================================

const initScrollAnimations = () => {
    let test = DOM.artSections[0].offsetHeight;
    console.log(test)

    DOM.headers.forEach((header, index) => {
      let distance = DOM.artSections[index].offsetHeight;
      gsap.to(header, {
        scrollTrigger: {
          trigger: header,
          start: `top ${CONFIG.navHeight}px`,
          end: `+=${distance}`,
          toggleActions: "play none reset reset",
          scrub: true,
          duration: 100,
        },
        ...ANIMATIONS.headerScroll,
        color: CONFIG.colors.years[index+1]
      });
    });
  };

const hidePreloader = () => {
    gsap.to(DOM.preloader, ANIMATIONS.preloaderEnd);
}

const init = () => {
    initScrollAnimations();
    setupDropdownMenu();
    setupFrameParallax();
    // other setup functions...
};

window.addEventListener('load', () => {
    console.log('Everything loaded!');
    window.scrollTo(0, 0);

    init();
    // Hide preloader after a brief delay
    setTimeout(() => {
        hidePreloader();
        document.body.style.overflow = "scroll";
    }, 3000);
});
// ============================================
// PRELOADER ANIMATIONS
// ============================================
const setupPreloader= () => {
    let tl = gsap.timeline({});
    let slides = gsap.utils.toArray(".loading-header");
    // DOM.fakeButton.addEventListener("click", () => {
    //     next_preloader_year(slides)
    // });

    tl.add(() => next_preloader_year(slides), "+=1")
      .add(() => next_preloader_year(slides), "+=1")
      .add(() => next_preloader_year(slides), "+=1")
      .add(() => next_preloader_year(slides), "+=1")
    //   .repeat(5)

    gsap.to(DOM.preloaderLine, ANIMATIONS.preloaderLineExpand);
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