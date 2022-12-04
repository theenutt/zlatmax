$(document).ready(function() {
    $('.phones-header__arrow').click(function(event){
        $(this).toggleClass('active').next().slideToggle(300);
    });
});

$('.popup__open').click(function() {
    $('.popup').fadeIn(600);
    $('html').addClass('no-scroll');
});

$('.popup__close').click(function() {
    $('.popup').fadeOut(600);
    $('html').removeClass('no-scroll');
});

import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();

import Swiper, { Navigation, Pagination } from 'swiper';

const swiper = new Swiper();

