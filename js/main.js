$(function(){

  $(".menu a, .go-top").on("click", function (e) {
    e.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({
      scrollTop: top
    }, 2500);
  });

var ESC_KEYCODE = 27;
var body = document.querySelector('body');
var headerOpen = document.querySelector('#button-open');
var headerClose = document.querySelector('#button-close');

function closeHeaderMenu() {
  headerOpen.addEventListener('click', openHeaderMenu);
  headerClose.removeEventListener('click', closeHeaderMenu);
  document.removeEventListener('keydown', onEscPress);
  body.classList.add('closed-menu-js');
  body.classList.remove('opened-menu-js');
}

function openHeaderMenu() {
  headerOpen.removeEventListener('click', openHeaderMenu);
  headerClose.addEventListener('click', closeHeaderMenu);
  document.addEventListener('keydown', onEscPress);
  body.classList.remove('closed-menu-js');
  body.classList.add('opened-menu-js');
}

function onEscPress(evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    closeHeaderMenu();
  }
}

closeHeaderMenu();

let header = document.querySelector('.js-header'),
    headerH = document.querySelector('.js-header').clientHeight;

document.onscroll = function () {
  let scroll = window.scrollY;

  if (scroll > headerH) {
    header.classList.add('fixed');
    document.body.style.paddingTop = headerH + 'px';
  } else {
    header.classList.remove('fixed');
    document.body.removeAttribute('style');
  } 
}


$('.slider__list').slick({

    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    speed: 300,
    adaptiveHeight: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="images/teachers/icon/slick-prev.svg" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="images/teachers/icon/slick-next.svg" alt=""></button>',
    responsive: [
      {
        breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3
          }
        }, 
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
        
});
});
