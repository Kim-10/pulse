// $(document).ready(function(){
//     $('.carousel__inner').slick({
//         speed: 300,
//         adaptiveHeight: true,
//         autoplay: true,
//         autoplaySpeed: 2000,
//         prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.svg"></button>',
//         nextArrow: '<button type="button" class="slick-next"><img src="icons/right.svg"></button>'
//       });
//   });


document.addEventListener('DOMContentLoaded', function () {
    // инициализация слайдера
    var slider = new ItcSimpleSlider('.itcss', {
      loop: true,
      autoplay: true,
      swipe: true
    });
  });

// Открыть нужны попап
$(document).ready(function(){ 
  $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
    $(this)
      .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
      .closest('div.container-catalog').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });

  $('.catalog-item__link').each(function(i) {
    $(this).on('click', function(e) {
      e.preventDefault();
      $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
      $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
    })
  });

  $('.catalog-item__link_back').each(function(i) {
    $(this).on('click', function(e) {
      e.preventDefault();
      $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
      $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
    })
  });

  // Modal

  $('[data-modal=consultation]').on('click', function() {
    $('.overlay, #consultation').fadeIn();
  });
  $('.modal__close').on('click', function() {
    $('.overlay, #consultation, #thanks, #order').fadeOut();
  });
  $('.catalog-item__btn').on('click', function() {
    $('.overlay, #order').fadeIn();
  });

  // Маска номера телефона
  $('input[name=phone]').mask("+38 (999) 999-99-99");

  // Smooth croll for pageUp
  $(window).scroll(function() {
    if ($(this).scrollTop() > 1000) {
      $('.pageup').fadeIn();
    } else {
      $('.pageup').fadeOut();
    }
  });
});