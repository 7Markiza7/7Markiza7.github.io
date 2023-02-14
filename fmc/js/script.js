window.addEventListener('DOMContentLoaded', function() {
    'use strict';

    // Slider Mobile

    let mobileSlideIndex = 1,
        mobileSlides = document.querySelectorAll('.slider-item'),
        mobilePrev = document.querySelector('.slider-prev'),
        mobileNext = document.querySelector('.slider-next'),
        dotsWrap = document.querySelector('.slider-dots'),
        dots = document.querySelectorAll('.dot');

    showSlidesMobile(mobileSlideIndex);

    function showSlidesMobile(n) {
        if (n > mobileSlides.length) {
            mobileSlideIndex = 1;
        }
        if (n < 1) {
            mobileSlideIndex = mobileSlides.length;
        }
        mobileSlides.forEach((item) => item.style.display = 'none');
        dots.forEach((item) => item.classList.remove('dot-active'));
        mobileSlides[mobileSlideIndex - 1].style.display = 'block';
        dots[mobileSlideIndex - 1].classList.add('dot-active');
    }

    function plusSlidesMobile(n) {
        showSlidesMobile(mobileSlideIndex += n);
    }
    function currentSlideMobile(n) {
        showSlidesMobile(mobileSlideIndex = n);
    }
    mobilePrev.addEventListener('click', function() {
        plusSlidesMobile(-1);
        makeTimerMobile();
    });
    mobileNext.addEventListener('click', function() {
        plusSlidesMobile(1);
        makeTimerMobile();
    });
    dotsWrap.addEventListener('click', function(event) {
        for (let i = 0; i < dots.length + 1; i++) {
            if (event.target.classList.contains('dot') && event.target == dots[i-1]) {
                currentSlideMobile(i);
            }
        }
    });
    let timerMobile = 0;
    makeTimerMobile();
    function makeTimerMobile(){
        clearInterval(timerMobile)
        timerMobile = setInterval(function(){
        mobileSlideIndex++;
        showSlidesMobile(mobileSlideIndex);
        },3000);
    }

    // Slider

    let slideIndex = 1,
        slides = document.querySelectorAll('.slider'),
        prev = document.querySelector('.prev'),
        next = document.querySelector('.next'),
        tabsWrap = document.querySelector('.tabs'),
        tabs = document.querySelectorAll('.tab');

    showSlides(slideIndex);

    function showSlides(n) {
        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }
        slides.forEach((item) => item.style.display = 'none');
        tabs.forEach((item) => item.classList.remove('tab-active'));
        slides[slideIndex - 1].style.display = 'block';
        tabs[slideIndex - 1].classList.add('tab-active');
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
    tabsWrap.addEventListener('click', function(event) {
        for (let i = 0; i < tabs.length + 1; i++) {
            if (event.target.classList.contains('tab') && event.target == tabs[i-1]) {
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
        },3000);
    }
    
    //Smooth scroll and pageup

    window.onscroll = function() {scrollFunction()};
    function scrollFunction() {
        if (document.body.scrollTop > 700 || document.documentElement.scrollTop < 700) {
            document.querySelector('.pageup').style.display = 'none';

        } else {
            document.querySelector('.pageup').style.display = 'block';
        }
    }
    const smoothLinks = document.querySelectorAll('a[href^="#"]');
    for (let smoothLink of smoothLinks) {
        smoothLink.addEventListener('click', function (e) {
            e.preventDefault();
            const id = smoothLink.getAttribute('href');

            document.querySelector(id).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    }

    // Hamburger

    let menu = document.querySelector('.promo__menu'),
    hamburger = document.querySelector('.hamburger'),
    closeHamburger = document.querySelector('.hamburger_active');

    hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('hamburger_active');
    menu.classList.toggle('promo__menu_active');
    });

    closeHamburger.addEventListener('click', () => {
    hamburger.classList.remove('hamburger_active');
    menu.classList.remove('promo__menu_active');
    });

});