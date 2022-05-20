$(function () {
    $('.intro-slider, .slider__items').slick({
        arrows: false,
        dots: true,
        fade: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
    })
    $('.menu__btn').on('click', function () {
        $('.header__menu-list').toggleClass('header__menu-list--active');
        $('.menu__btn').toggleClass('menu__btn--active');
    });

});

// document.addEventListener('DOMContentLoaded', function () {

// });