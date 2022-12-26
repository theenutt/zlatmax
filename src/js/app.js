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
            }
            targetElement.classList.toggle('_sub-menu-active');
            subMenu.classList.toggle('_sub-menu-open');
    } else {
        console.log('нет такого подменю')
    }
    e.preventDefault();
 }
}

//===============================================

import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();

import Swiper, { Navigation, Pagination } from 'swiper';

const swiper = new Swiper();

