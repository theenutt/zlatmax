import { useDynamicAdapt } from './dynamicAdapt.js';
//import * as slicker from "./slick.min.js";
import Swiper, { Navigation, Pagination, Parallax, Autoplay } from 'swiper';
//import "../scss/swiper.scss";

//const swiper = new Swiper();


useDynamicAdapt()

$(document).ready(function() {
    $('.phones-header__arrow').click(function(event){
        $(this).toggleClass('active').next().slideToggle(300);
    });
});

//======================================================================================

$('.popup__open').click(function() {
    $('.popup').fadeIn(600);
    $('html').addClass('no-scroll');
});

$('.popup__close').click(function() {
    $('.popup').fadeOut(600);
    $('html').removeClass('no-scroll');
});

//=======================================================================================

document.addEventListener("click", documentActions);

const menuBlocks = document.querySelectorAll('.sub-menu-catalog__block');
if (menuBlocks.length) {
    menuBlocks.forEach(menuBlock => {
        const menuBlockItems = menuBlock.querySelectorAll('.sub-menu-catalog__category').length;
        menuBlock.classList.add(`sub-menu-catalog__block_${menuBlockItems}`);
    });
}

function documentActions(e) {
    const targetElement = e.target;
    if (targetElement.closest('[data-parent]')) {
        const subMenuId = targetElement.dataset.parent ? targetElement.dataset.parent : null;
        const subMenu = document.querySelector(`[data-submenu="${subMenuId}"]`);
        const catalogMenu = document.querySelector('.catalog-header');
        if (subMenu) {
            const activeLink = document.querySelector('._sub-menu-active');
            const activeBlock = document.querySelector('._sub-menu-open');

            if (activeLink && activeLink !== targetElement) {
                activeLink.classList.remove('_sub-menu-active');
                activeBlock.classList.remove('_sub-menu-open');
                document.documentElement.classList.remove('sub-menu-open');
            }

            document.documentElement.classList.toggle('sub-menu-open');
            targetElement.classList.toggle('_sub-menu-active');
            subMenu.classList.toggle('_sub-menu-open');
    } else {
        console.log('нет такого подменю')
    }
    e.preventDefault();
    }
    if (targetElement.closest('.menu-top-header__link_catalog')) {
        document.documentElement.classList.add('catalog-open');
        e.preventDefault();
    }
    if (targetElement.closest('.menu-catalog__back')) {
            document.documentElement.classList.remove('catalog-open');
            document.querySelector('._sub-menu-active')?document.querySelector('._sub-menu-active').classList.remove('_sub-menu-active'):null;
            document.querySelector('._sub-menu-open')?document.querySelector('._sub-menu-open').classList.remove('_sub-menu-open'):null;
            e.preventDefault();
    }

    if (targetElement.closest('.sub-menu-catalog__back')) {
        document.documentElement.classList.remove('sub-menu-open');
        document.querySelector('._sub-menu-active')?document.querySelector('._sub-menu-active').classList.remove('_sub-menu-active'):null;
        document.querySelector('._sub-menu-open')?document.querySelector('._sub-menu-open').classList.remove('_sub-menu-open'):null;
        e.preventDefault();
    }
    
}

//===============================================

const iconMenu = document.querySelector('.menu__icon');
if (iconMenu) {
    const menuBody = document.querySelector('.menu__body');
    iconMenu.addEventListener("click", function(e) {
        iconMenu.classList.toggle('menu-open');
        menuBody.classList.toggle('menu-open');
        if (document.documentElement.classList.contains('catalog-open')) {
                document.documentElement.classList.remove('catalog-open');
        }
        if (document.documentElement.classList.contains('sub-menu-open')) {
            document.documentElement.classList.remove('sub-menu-open');
    }
    });
}

//===============================================

tippy('[data-tippy-content]');
tippy('.media-main-block__tip', {
    theme: 'light',
  });

//===============================================
/*
$(document).ready(function(){
    $('.slide-main-block').slick({
        arrows: false,
        variableWidth: true,
        infinite: true,
        slidesToScroll: 1
    });
});
*/
//===============================================
function bildSliders() {
    let sliders = document.querySelectorAll('[class*="__swiper"]:not(.swiper-wrapper)');
    if (sliders) {
        sliders.forEach(slider => {
            slider.parentElement.classList.add('swiper');
            slider.classList.add('swiper-wrapper');
            for (const slide of slider.children) {
                slide.classList.add('swiper-slide');
            }
        });
    }
}

function initSliders() {
    //Подключаем модули слайдера
    //при необходимости отключить
    bildSliders();

    if(document.querySelector('.main-block__slider')) {
        new Swiper('.main-block__slider', {
            //подключаем модули слайдера
            //для конкретного случая
            modules: [Navigation,Pagination,Parallax,Autoplay],
            //effect: 'fade',
            autoplay: {
                delay: 3000,
                disableOnInteraction:false,
            },
        observer: true,
        observeParents: true,
        slidesPerView: 1,
        spaceBetween: 50,
        parallax: true,
        //autoHeight: true,
        speed: 800,
        //touchRatio: 0,
        //simulateTouch: false,
        loop: true,
        //preloadImages: false,
        //lazy: true,
        //Dotts
        pagination: {
            el: '.control-main-block__dotts',
            clickable: true,
        },
        //Arrows
        //navigation: {
        // nextEl: '.',
        // prevEl: '.',
        //},
        /*
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 0,
                autoHeight: true,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            1268: {
                slidesPerView: 4,
                spaceBetween: 30,
            },
        },
        */
        on: {
            init: function (swiper) {
                const allSlides = document.querySelector('.fraction-control__all');
                const allSlidesItems = document.querySelectorAll('.slide-main-block:not(.swiper-slide-duplicate)');
                allSlides.innerHTML = allSlidesItems.length < 10 ? `0${allSlidesItems.length}` : allSlidesItems.length;
            },
            slideChange: function (swiper) {
                const currentSlide = document.querySelector('.fraction-control__current');
                currentSlide.innerHTML = swiper.realIndex+1 < 10 ? `0${swiper.realIndex+1}` : swiper.realIndex+1;
            }
        }
        });
    }
}

window.addEventListener("load", function(e) {
    initSliders();
});
//===============================================
import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();

