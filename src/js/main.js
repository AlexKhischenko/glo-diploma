$(document).ready(function(){

  //Инициализация слайдера секции Hero
  var heroSwiper = new Swiper('.hero__swiper-container', {
    spaceBetween: 30,
    centeredSlides: true,
    // autoplay: {
    //   delay: 5000,
    //   disableOnInteraction: false,
    // },
    fadeEffect: {
      crossFade: true
    },
    effect: 'fade',  
    navigation: {
      nextEl: '.hero-swiper__control-next',
      prevEl: '.hero-swiper__control-prev',
    },
  });
  $('.hero-swiper__control-next').click( function () {
    if ($('.hero-swiper__control-next').is('[aria-disabled="true"]') && 
    $('.hero-swiper__control-prev').is('[aria-disabled="false"]')) {
      $('.hero-swiper__control-right').addClass('hero-swiper__active');
      $('.hero-swiper__control-left').removeClass('hero-swiper__active');
    } else if ($('.hero-swiper__control-next').is('[aria-disabled="false"]') && 
    $('.hero-swiper__control-prev').is('[aria-disabled="false"]')) {
      $('.hero-swiper__control-right').removeClass('hero-swiper__active');
      $('.hero-swiper__control-left').removeClass('hero-swiper__active');
    } 
  });
  $('.hero-swiper__control-prev').click( function () {
    if ($('.hero-swiper__control-prev').is('[aria-disabled="true"]') && 
    $('.hero-swiper__control-next').is('[aria-disabled="false"]')) {
      $('.hero-swiper__control-left').addClass('hero-swiper__active');
      $('.hero-swiper__control-right').removeClass('hero-swiper__active');
    } else if ($('.hero-swiper__control-prev').is('[aria-disabled="false"]') && 
    $('.hero-swiper__control-next').is('[aria-disabled="false"]')) {
      $('.hero-swiper__control-left').removeClass('hero-swiper__active');
      $('.hero-swiper__control-right').removeClass('hero-swiper__active');
    } 
  });

  // Инициализация слайдера многостраничного
  var wideSwiper = new Swiper('.services__swiper-container', {
    slidesPerView: 4,
    spaceBetween: 20,
    slidesPerGroup: 1,
    freeMode: true,
    // loop: false,
    // loopFillGroupWithBlank: true,
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      // when window width is >= 570px
      570: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      // when window width is >= 760px
      759: {
        slidesPerView: 2,
        spaceBetween: 60
      },
      // when window width is >= 992px
      991: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      // when window width is >= 1200px
      1199: {
        slidesPerView: 4,
        spaceBetween: 20
      }
    },
    navigation: {
      nextEl: '.wide-swiper__control-next',
      prevEl: '.wide-swiper__control-prev',
    },
  });
  $('.wide-swiper__control-next').click( function () {
    if ($('.wide-swiper__control-next').is('[aria-disabled="true"]') && 
    $('.wide-swiper__control-prev').is('[aria-disabled="false"]')) {
      $('.wide-swiper__control-right').addClass('wide-swiper__active');
      $('.wide-swiper__control-left').removeClass('wide-swiper__active');
    } else if ($('.wide-swiper__control-next').is('[aria-disabled="false"]') && 
    $('.wide-swiper__control-prev').is('[aria-disabled="false"]')) {
      $('.wide-swiper__control-right').removeClass('wide-swiper__active');
      $('.wide-swiper__control-left').removeClass('wide-swiper__active');
    } 
  });
  $('.wide-swiper__control-prev').click( function () {
    if ($('.wide-swiper__control-prev').is('[aria-disabled="true"]') && 
    $('.wide-swiper__control-next').is('[aria-disabled="false"]')) {
      $('.wide-swiper__control-left').addClass('wide-swiper__active');
      $('.wide-swiper__control-right').removeClass('wide-swiper__active');
    } else if ($('.wide-swiper__control-prev').is('[aria-disabled="false"]') && 
    $('.wide-swiper__control-next').is('[aria-disabled="false"]')) {
      $('.wide-swiper__control-left').removeClass('wide-swiper__active');
      $('.wide-swiper__control-right').removeClass('wide-swiper__active');
    } 
  });
  

  

});