window.addEventListener('DOMContentLoaded', function() {
    'use strict';

    // Slider

    let slideIndex = 1,
        secondIndex = 2,
        endIndex = 4,
        slides = document.querySelectorAll('.slider-item'),
        prev = document.querySelector('.prev'),
        next = document.querySelector('.next'),
        smallDevice = window.matchMedia("(min-width: 1200px)");

    smallDevice.addEventListener('change', handleDeviceChange);

    function handleDeviceChange(e) {
        if (e.matches) {
            showSlides(slideIndex);

            function showSlides(n) {
                if (n > slides.length) {
                    slideIndex = 1;
                }
                if (n < 1) {
                    slideIndex = slides.length;
                }
                slides.forEach((item) => item.style.display = 'none');
                slides[slideIndex - 1].style.display = 'block';
                slides[secondIndex - 1].classList.remove('second');
                slides[endIndex - 1].classList.remove('end');
                
            }

            secondSlides(secondIndex);

            function secondSlides(n) {
                if (n > slides.length) {
                    secondIndex =1;
                }
                if (n < 1) {
                    secondIndex = slides.length;
                }
                slides[secondIndex - 1].classList.add('second');
                slides[secondIndex - 1].style.display = 'block';
            }

            endSlides(endIndex);

            function endSlides(n) {
                if (n > slides.length) {
                    endIndex =1;
                }
                if (n < 1) {
                    endIndex = slides.length;
                }
                slides[endIndex - 1].classList.add('end');
                slides[endIndex - 1].style.display = 'block';
            }
                

            function plusSlides(n) {
                showSlides(slideIndex += n);
                secondSlides(secondIndex += n);
                endSlides(endIndex += n);
            }
            
            prev.addEventListener('click', function() {
                plusSlides(-1);
            });
            next.addEventListener('click', function() {
                plusSlides(1);

            });
        }else {
            showSlides(slideIndex);

            function showSlides(n) {
                if (n > slides.length) {
                    slideIndex = 1;
                }
                if (n < 1) {
                    slideIndex = slides.length;
                }
                slides.forEach((item) => item.style.display = 'none');
                slides[slideIndex - 1].style.display = 'block';
                slides[secondIndex - 1].classList.remove('second');
                slides[endIndex - 1].classList.remove('end');
                
            }              
            function plusSlides(n) {
                showSlides(slideIndex += n);
            }
            
            prev.addEventListener('click', function() {
                plusSlides(-1);
                makeTimer();
            });
            next.addEventListener('click', function() {
                plusSlides(1);
                makeTimer();
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
        }
    }

    handleDeviceChange(smallDevice);

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
    };

    // Hamburger

    let menu = document.querySelector('.header__menu'),
        hamburger = document.querySelector('.hamburger'),
        closeHamburger = document.querySelector('.hamburger_active');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('header__menu_active');
    });

    closeHamburger.addEventListener('click', () => {
        hamburger.classList.remove('hamburger_active');
        menu.classList.remove('header__menu_active');
    });
    
});