// === תפריט המבורגר ===
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger-menu');
    const nav = document.querySelector('.main-nav');
    
    if (hamburger && nav) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            nav.classList.toggle('active');
            document.body.classList.toggle('no-scroll');
        });
        
        // סגירת התפריט בלחיצה על קישור
        const navLinks = document.querySelectorAll('.nav-menu a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                nav.classList.remove('active');
                document.body.classList.remove('no-scroll');
            });
        });
        
        // סגירת התפריט בלחיצה מחוץ לתפריט
        document.addEventListener('click', (event) => {
            if (nav.classList.contains('active') && 
                !nav.contains(event.target) && 
                !hamburger.contains(event.target)) {
                hamburger.classList.remove('active');
                nav.classList.remove('active');
                document.body.classList.remove('no-scroll');
            }
        });
    }

    // === הדר דביק ===
    const header = document.querySelector('.header');
    let lastScrollTop = 0;
    
    function stickyHeader() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // גלילה למטה - מסתיר את ההדר
            header.style.transform = 'translateY(-100%)';
        } else {
            // גלילה למעלה - מציג את ההדר
            header.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
    }
    
    window.addEventListener('scroll', stickyHeader);
});

// === אנימציה לכפתורי פעולה ===
const actionButtons = document.querySelectorAll('.action-button');

actionButtons.forEach(button => {
    button.addEventListener('mouseenter', () => {
        button.style.transform = 'scale(1.1)';
    });
    
    button.addEventListener('mouseleave', () => {
        button.style.transform = 'scale(1)';
    });
});
=== סליידר ===
document.addEventListener('DOMContentLoaded', function() {
  let currentSlide = 0;
  const slides = document.querySelectorAll('.slide');
  
  function changeSlide() {
    slides.forEach(slide => slide.classList.remove('active'));
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
  }
  
  // תחילה, התמונה הראשונה מוצגת
  slides[0].classList.add('active');
  
  // החלפת תמונות כל 2 שניות
  setInterval(changeSlide, 2000);
});