// js/script.js

document.addEventListener('DOMContentLoaded', function () {
    // ========== תפריט המבורגר ==========
const hamburgerButton = document.getElementById('hamburger-menu-button');
const closeMenuButton = document.getElementById('close-menu-button');
const hamburgerMenu = document.getElementById('hamburger-menu');

if (hamburgerButton && closeMenuButton && hamburgerMenu) { // בדיקה שהאלמנטים קיימים
    hamburgerButton.addEventListener('click', () => {
        hamburgerMenu.classList.add('active');
    });

    closeMenuButton.addEventListener('click', () => {
        hamburgerMenu.classList.remove('active');
    });
}



    // ========== סליידר תמונות ==========
    const sliderContainer = document.querySelector('.slider-container');
    const sliderWrapper = document.querySelector('.slider-wrapper');
    const slides = document.querySelectorAll('.slide');
    const sliderDots = document.querySelectorAll('.slider-dot');
    const slideWidth = slides[0].offsetWidth; // רוחב שקופית אחת
    let currentSlide = 0;
    let autoSlideInterval; // משתנה לאחסון האינטרוול של הסליידר האוטומטי


    function goToSlide(slideIndex) {
        if (slideIndex < 0) {
            currentSlide = slides.length - 1; // חזרה לשקופית האחרונה אם מגיעים להתחלה
        } else if (slideIndex >= slides.length) {
            currentSlide = 0; // חזרה לשקופית הראשונה אם מגיעים לסוף
        } else {
            currentSlide = slideIndex;
        }

        sliderWrapper.style.transform = `translateX(-${currentSlide * slideWidth}px)`; // הזזת הסליידר
        updateDots(); // עדכון נקודות הניווט
    }


    function updateDots() {
        sliderDots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentSlide); // סימון הנקודה הפעילה
        });
    }


    function startAutoSlide() {
        autoSlideInterval = setInterval(() => {
            goToSlide(currentSlide + 1); // מעבר לשקופית הבאה כל 5 שניות (ברירת מחדל)
        }, 5000); // זמן מעבר בין שקופיות (5 שניות)
    }


    function stopAutoSlide() {
        clearInterval(autoSlideInterval); // עצירת הסליידר האוטומטי
    }


    sliderDots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            goToSlide(index); // מעבר לשקופית לפי לחיצה על נקודה
            stopAutoSlide(); // עצירת הסליידר האוטומטי בלחיצה ידנית
            startAutoSlide(); // הפעלה מחדש של סליידר אוטומטי אחרי לחיצה ידנית
        });
    });


    // הפעלת סליידר אוטומטי כאשר הדף נטען
    startAutoSlide();

    // עצירת סליידר אוטומטי במעבר עכבר מעל הסליידר
    sliderContainer.addEventListener('mouseenter', stopAutoSlide);

    // הפעלת סליידר אוטומטי מחדש בהרחקת עכבר מהסליידר
    sliderContainer.addEventListener('mouseleave', startAutoSlide);


    // אתחול שקופית ראשונה ונקודות ניווט
    goToSlide(0);


    // ========== קרוסלת עדויות ==========
    const testimonialsCarousel = document.querySelector('.testimonials-carousel');
    const testimonialsWrapper = document.querySelector('.testimonials-wrapper');
    const testimonialSlides = document.querySelectorAll('.testimonial-slide');
    const testimonialPrevButton = document.querySelector('.testimonial-prev-button');
    const testimonialNextButton = document.querySelector('.testimonial-next-button');
    const testimonialSlideWidth = testimonialSlides[0].offsetWidth;
    let currentTestimonialSlide = 0;
    let autoTestimonialSlideInterval;


    function goToTestimonialSlide(slideIndex) {
        if (slideIndex < 0) {
            currentTestimonialSlide = testimonialSlides.length - 1;
        } else if (slideIndex >= testimonialSlides.length) {
            currentTestimonialSlide = 0;
        } else {
            currentTestimonialSlide = slideIndex;
        }

        testimonialsWrapper.style.transform = `translateX(-${currentTestimonialSlide * testimonialSlideWidth}px)`;
    }


    function startAutoTestimonialSlide() {
        autoTestimonialSlideInterval = setInterval(() => {
            goToTestimonialSlide(currentTestimonialSlide + 1);
        }, 6000); // זמן מעבר בין עדויות (6 שניות)
    }


    function stopAutoTestimonialSlide() {
        clearInterval(autoTestimonialSlideInterval);
    }


    if (testimonialPrevButton && testimonialNextButton) {
        testimonialPrevButton.addEventListener('click', () => {
            goToTestimonialSlide(currentTestimonialSlide - 1);
            stopAutoTestimonialSlide();
            startAutoTestimonialSlide();
        });

        testimonialNextButton.addEventListener('click', () => {
            goToTestimonialSlide(currentTestimonialSlide + 1);
            stopAutoTestimonialSlide();
            startAutoTestimonialSlide();
        });
    }


    // הפעלת קרוסלת עדויות אוטומטית
    startAutoTestimonialSlide();

    // עצירת קרוסלת עדויות אוטומטית במעבר עכבר
    testimonialsCarousel.addEventListener('mouseenter', stopAutoTestimonialSlide);

    // הפעלת קרוסלת עדויות אוטומטית מחדש בהרחקת עכבר
    testimonialsCarousel.addEventListener('mouseleave', startAutoTestimonialSlide);


    // אתחול שקופית ראשונה בעדויות
    goToTestimonialSlide(0);


});
