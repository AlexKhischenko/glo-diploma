$(document).ready(function(){

  //Инициализация слайдера секции Hero
  var heroSwiper = new Swiper('.swiper-container', {
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
  

  

});