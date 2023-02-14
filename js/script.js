// Hamburger

const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

// Skills

const counters = document.querySelectorAll('.skills__ratings-counter'),
    lines = document.querySelectorAll('.skills__ratings-line span');

counters.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
});

// Hamburger-color

window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 700 || document.documentElement.scrollTop < 700) {
    document.getElementById("logo").style.background = "#fff";
    document.getElementById("logo_a").style.background = "#fff";
    document.getElementById("logo_b").style.background = "#fff";

  } else {
    document.getElementById("logo").style.background = "#000";
    document.getElementById("logo_a").style.background = "#000";
    document.getElementById("logo_b").style.background = "#000";
  }
}

// Slider

let slideIndex = 1,
  slides = document.querySelectorAll('.slider-item'),
  prev = document.querySelector('.prev'),
  next = document.querySelector('.next'),
  dotsWrap = document.querySelector('.slider-dots'),
  dots = document.querySelectorAll('.dot');

showSlides(slideIndex);

function showSlides(n) {
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  slides.forEach((item) => item.style.display = 'none');
  dots.forEach((item) => item.classList.remove('dot-active'));
  slides[slideIndex - 1].style.display = 'block';
  dots[slideIndex - 1].classList.add('dot-active');
}

function plusSlides(n) {
  showSlides(slideIndex += n);
}
function currentSlide(n) {
  showSlides(slideIndex = n);
}
prev.addEventListener('click', function() {
  plusSlides(-1);
  makeTimer();
});
next.addEventListener('click', function() {
  plusSlides(1);
  makeTimer();
});
dotsWrap.addEventListener('click', function(event) {
  for (let i = 0; i < dots.length + 1; i++) {
    if (event.target.classList.contains('dot') && event.target == dots[i-1]) {
      currentSlide(i);
    }
  }
});
let timer = 0;
makeTimer();
function makeTimer(){
  clearInterval(timer)
  timer = setInterval(function(){
    slideIndex++;
    showSlides(slideIndex);
  },6000);
}

// Form

$(document).ready(function(){
  $('form').submit(function(e) {
    e.preventDefault();
    $.ajax({
      type: "POST",
      url: "mailer/smart.php",
      data: $(this).serialize()
    }).done(function() {
      $(this).find("input").val("");
      $('form').trigger('reset');
    });
    return false;
  });
});