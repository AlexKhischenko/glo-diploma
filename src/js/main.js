$(document).ready(function(){

  // Lazy load для картинок
  [].forEach.call(document.querySelectorAll('img[data-src]'), function(img) {
    img.setAttribute('src', img.getAttribute('data-src'));
    img.onload = function() {
    img.removeAttribute('data-src');
    };
  });

  //Drop down menu
  let dropDown = $('.dropdown');
  let dropDownList = $('.dropdown__list');
  dropDown.click( function(event) {
    event.preventDefault();
    dropDownList.toggleClass('dropdown__list--active');
  });
  $(document).mouseup( function(e) {
    if (!dropDown.is(e.target) && !dropDownList.is(e.target) && dropDownList.has(e.target).length === 0) {
      dropDownList.removeClass('dropdown__list--active');
    };
  });
  
  //Drop down mobile-menu
  let dropDownMobile = $('.dropdown-mobile');
  let dropDownMobileList = $('.dropdown-mobile__list');
  dropDownMobile.click( function(event) {
    dropDownMobile.toggleClass('dropdown-mobile--active');
    dropDownMobileList.toggleClass('dropdown-mobile__list--active');
  });
  $(document).mouseup( function(e) {
    if (dropDownMobile.has(e.target).length === 0) {
      dropDownMobile.removeClass('dropdown-mobile--active');
      dropDownMobileList.removeClass('dropdown-mobile__list--active');
    };
  });

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
  
  // Инициализация слайдера многостраничного секции LikeMore
  var likeMoreSwiper = new Swiper('.likemore__swiper-container', {
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
      nextEl: '.likemore-swiper__control-next',
      prevEl: '.likemore-swiper__control-prev',
    },
  });
  $('.likemore-swiper__control-next').click( function () {
    if ($('.likemore-swiper__control-next').is('[aria-disabled="true"]') && 
    $('.likemore-swiper__control-prev').is('[aria-disabled="false"]')) {
      $('.likemore-swiper__control-right').addClass('likemore-swiper__active');
      $('.likemore-swiper__control-left').removeClass('likemore-swiper__active');
    } else if ($('.likemore-swiper__control-next').is('[aria-disabled="false"]') && 
    $('.likemore-swiper__control-prev').is('[aria-disabled="false"]')) {
      $('.likemore-swiper__control-right').removeClass('likemore-swiper__active');
      $('.likemore-swiper__control-left').removeClass('likemore-swiper__active');
    } 
  });
  $('.likemore-swiper__control-prev').click( function () {
    if ($('.likemore-swiper__control-prev').is('[aria-disabled="true"]') && 
    $('.likemore-swiper__control-next').is('[aria-disabled="false"]')) {
      $('.likemore-swiper__control-left').addClass('likemore-swiper__active');
      $('.likemore-swiper__control-right').removeClass('likemore-swiper__active');
    } else if ($('.likemore-swiper__control-prev').is('[aria-disabled="false"]') && 
    $('.likemore-swiper__control-next').is('[aria-disabled="false"]')) {
      $('.likemore-swiper__control-left').removeClass('likemore-swiper__active');
      $('.likemore-swiper__control-right').removeClass('likemore-swiper__active');
    } 
  });
  
  // Mobile menu
  let mobileMenuBtn = $('.mobile-menu__btn');
  let menu = $('.menumobile');
  let closeMobileMenu = $('.mobile-menu__close-btn');
  mobileMenuBtn.click( function() {
		menu.toggleClass('mobile-menu__active');
  });
  closeMobileMenu.click(function() {
		menu.toggleClass('mobile-menu__active');
  });
  
  // Закрытие мобильного меню кликом на пустой области
  menu.click( function(e) {
    if (menu.is(e.target) && menu.has(e.target).length === 0) {
      menu.removeClass('mobile-menu__active');
    };
  });

  // Закрытие мобильного меню клавишей Esc
  $(document).keydown( function(event) {
    if (menu.hasClass('mobile-menu__active')) {
      if (event.which == 27) {
        menu.removeClass('mobile-menu__active');
      };
    };
  });
   
  // Разворачивание категорий в секции Categories
  let categoriesBtn = $('.btn-more');
  let categoriesItem = $('.categories__item--hidden');
  categoriesBtn.click( function (event) {    
    event.preventDefault();
    categoriesItem.toggleClass('categories__item--visible');   
  });

  // Смена картинки в секции Product
  let productImageBig = $('.product-order__image');
  let productImageSmall = $('.product-order__element');
  productImageSmall.click( function() {
    productImageBig.removeClass('product-order__image--active');
    productImageSmall.removeClass('product-order__element--active');
    $('.product-order__image[data-image='+$(this).attr('data-image')+']')
    .addClass('product-order__image--active');
    $(this).addClass('product-order__element--active');    
  });

  // Выбор цвета в секции Product
  let colorPicker = $('.color-item');
  colorPicker.click( function() {
    colorPicker.removeClass('color-item--active');
    $(this).addClass('color-item--active');
  });

  // Выбор способа доставки в секции Product
  let deliveryTab = $('.delivery__tab');
  let deliveryClick = $('.delivery-click');
  let deliveryTabContent = $('.delivery__tab-content');
  deliveryClick.click( function() {
    deliveryTab.removeClass('delivery__tab--active');
    deliveryTabContent.removeClass('delivery__tab-content--active');
    $('.delivery__tab-content[data-delivery-tab='+$(this).attr('data-delivery-tab')+']')
    .addClass('delivery__tab-content--active');
    $('.delivery__tab[data-delivery-tab='+$(this).attr('data-delivery-tab')+']')
    .addClass('delivery__tab--active');
  });

  // Выбор пункта самовывоза
  let tabContentLabel = $('.tab-content__label');
  tabContentLabel.click( function () {
    tabContentLabel.removeClass('tab-content--active');
    $(this).addClass('tab-content--active');
  });

  // Описание товара в секции Product
  let tableHeaderItem = $('.table__header-item');
  let tableBodyItem =$('.table__body-item');  
  tableHeaderItem.click( function (){
    tableHeaderItem.removeClass('table__header-item--active');
    tableBodyItem.removeClass('table__body-item--active');
    $('.table__body-item[data-table-tab='+$(this).attr('data-table-tab')+']')
    .addClass('table__body-item--active');
    $(this).addClass('table__header-item--active');
  });

  let modal = $('.modal');
  let modalBtn = $('[data-toggle=modal]');
  let modalCloseBtn = $('.modal__close');
  let modalSuccessMessage = $('.modal__success-message');
  let modalTitle = $('.modal__title');
  let modalForm = $('.modal__form');

  // Вызов модального окна любой из кнопок
  modalBtn.click( function (event) {
    event.preventDefault();
    modal.toggleClass('modal--visible');
  });

  // Сброс полей модального окна после закрытия
  function resetModalFormInputs () {
    $('.modal__form')[0].reset();
    if (modalSuccessMessage.hasClass('modal__success-message--visible')) {
      modalSuccessMessage.removeClass('modal__success-message--visible');
    };
    if (modalTitle.hasClass('modal__title--hidden')) {
      modalTitle.removeClass('modal__title--hidden');
    };
    if (modalForm.hasClass('modal__form--hidden')) {
      modalForm.removeClass('modal__form--hidden');
    };
    modal.toggleClass('modal--visible');
  };

  // Закрытие модального окна крестиком
  modalCloseBtn.click( function () {
    resetModalFormInputs();
  });

  // Закрытие модального окна клавишей Esc
  $(document).keydown( function(event) {
    if (modal.hasClass('modal--visible')) {
      if (event.which == 27) {
        resetModalFormInputs();
      };
    };
  });

  // Закрытие модального окна кликом вне модального окна
  modal.click( function(e) {
    if (modal.is(e.target) && modal.has(e.target).length === 0) {
      resetModalFormInputs();
    };
  });

  //Развернуть все категроии товаров
  let categoryButton = $('.category__button');
  let categoryList = $('.category-list');  
  categoryButton.click( function() {
    event.preventDefault();
    categoryList.toggleClass('category-list--visible');
  });

  // Маска для номера телефона модального окна
  $(function() {
    $('#modal-user-phone').data('holder', $('#modal-user-phone').attr('placeholder'));    
    $('#modal-user-phone').focusin(function(){
      $('#modal-user-phone').mask('+7(000) 000-00-00', {placeholder: "+7 (___) ___-__-__"});
      $(this).attr('placeholder','+7 (___) ___-__-__');
    });
    $('#modal-user-phone').focusout(function(){
      $(this).attr('placeholder', $(this).data('holder'));
      $('#modal-user-phone').cleanVal();
    });    
  }); 

  // Modal Form
  $('.modal__form').validate({
    errorElement: "div",
    errorClass: "invalid",
    rules: {
      // simple rule, converted to {required:true}
      modalUserName: {
        required: true,
        minlength: 2,
      },
      modalUserPhone: {
        required: true,
        minlength: 17,
      },
      // compound rule
      modalUserEmail: {
        required: true,
        email: true
      },
      modalCheckbox: {
        required: true,
      },
    },
    messages: {
      modalUserName: {
        required: "Заполните поле",
        minlength: "Введите не менее 2 символов",
      },
      modalUserPhone: {
        required: "Заполните поле",
        minlength: "Введите не менее 10 цифр"
      },
      modalUserEmail: {
        required: "Заполните поле",
        email: "Введите корректный email"
      },
      modalCheckbox: "Подтвердите соглашение",
    },
    submitHandler: function(form) {
      $.ajax({
        type: "POST",
        url: "modalSend.php",
        data: $(form).serialize(),
        success: function (response) {
          $(form)[0].reset();          
          modalTitle.addClass('modal__title--hidden');
          modalForm.addClass('modal__form--hidden');
          modalSuccessMessage.addClass('modal__success-message--visible');
          ym('61639852', 'reachGoal', 'callback'); return true;
        }
      });
    }
  });
  
  // Таймер на сайте
  const second = 1000,
  minute = second * 60,
  hour = minute * 60,
  day = hour * 24;
  let countDown = new Date('Apr 10, 2020 00:00:00').getTime(),
  x = setInterval(function() {    
  let now = new Date().getTime(),
      distance = countDown - now;
  document.getElementById('days').innerText = Math.floor(distance / (day)),
    document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour)),
    document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute)),
    document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);
  }, second)
});