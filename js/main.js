$(function(){

  $(".menu a, .go-top").on("click", function (e) {
    e.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({
      scrollTop: top
    }, 2500);
  });

  $('.menu__btn, .menu a').click(function () {
    $('.menu__btn, .menu__list').toggleClass('active');
    $('body').toggleClass('lock');
  });


  var header = $(".header__top");
  var scrollChange = 30;
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll >= scrollChange) {
      header.addClass('header-fixed');
    } else {
      header.removeClass("header-fixed");
    }

  });


$('.slider__list').slick({

    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    speed: 300,
    adaptiveHeight: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="images/teachers/icon/slick-prev.svg" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="images/teachers/icon/slick-next.svg" alt=""></button>'

});




  });