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



// קוד JavaScript עבור אנימציות כרטיסיות השירותים
document.addEventListener('DOMContentLoaded', function() {
    // אנימציית כניסה לכרטיסיות
    const serviceCards = document.querySelectorAll('.service-card');
    
    // בדיקה האם IntersectionObserver נתמך בדפדפן
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const card = entry.target;
                    const delay = parseInt(card.getAttribute('data-delay'));
                    
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, delay);
                    
                    // הפסקת מעקב אחרי הכרטיסייה לאחר שהיא נראית
                    observer.unobserve(card);
                }
            });
        }, {
            root: null,
            threshold: 0.1
        });
        
        serviceCards.forEach(card => {
            observer.observe(card);
        });
    } else {
        // פתרון חלופי למקרה שהדפדפן לא תומך ב-IntersectionObserver
        serviceCards.forEach(card => {
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, parseInt(card.getAttribute('data-delay')));
        });
    }
    
    // אפקט hover מתקדם לכרטיסיות
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            // אפקט פעימה לאייקון
            const icon = this.querySelector('.card-icon i');
            icon.style.animation = 'pulse 0.8s infinite';
        });
        
        card.addEventListener('mouseleave', function() {
            // הפסקת אנימציית הפעימה
            const icon = this.querySelector('.card-icon i');
            icon.style.animation = '';
        });
    });
    
    // פונקציה לבדיקה אם אלמנט נמצא בתצוגה
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
    
    // בדיקה האם הכרטיסיות בתצוגה בעת גלילה (פתרון חלופי)
    if (!('IntersectionObserver' in window)) {
        function handleScroll() {
            serviceCards.forEach(card => {
                if (isElementInViewport(card) && card.style.opacity !== '1') {
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, parseInt(card.getAttribute('data-delay')));
                }
            });
        }
        
        window.addEventListener('scroll', handleScroll);
        handleScroll(); // בדיקה ראשונית בטעינת הדף
    }
});


// קוד JavaScript עבור כרטיסיות זמנים
document.addEventListener('DOMContentLoaded', function() {
    const cardsWrapper = document.querySelector('.cards-wrapper');

    
    // הגדרת פונקציונליות הגלילה
    const scrollLeftBtn = document.querySelector('.scroll-left');
    const scrollRightBtn = document.querySelector('.scroll-right');
    
    scrollLeftBtn.addEventListener('click', () => {
        cardsWrapper.scrollBy({
            left: -300,
            behavior: 'smooth'
        });
    });
    
    scrollRightBtn.addEventListener('click', () => {
        cardsWrapper.scrollBy({
            left: 300,
            behavior: 'smooth'
        });
    });

    // אפקט מעבר עבור הכרטיסיות
    const timeCards = document.querySelectorAll('.time-card');
    timeCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.classList.add('hover');
        });
        
        card.addEventListener('mouseleave', function() {
            this.classList.remove('hover');
        });
    });

    // הסרנו את הקריאה הפנימית ל- fetchShabbatTimes();
    // אם תרצה, תוכל לקרוא כאן לפונקציה משלך בהמשך
});

// הסרנו/הערנו את הפונקציה fetchShabbatTimes
// function fetchShabbatTimes() {
//   ...
// }
    



document.addEventListener("DOMContentLoaded", () => {
  // Hebcal API עבור באר שבע, פרמטרים כמו b=20 (הדלקה 20 דק' לפני השקיעה), ועוד
  const hebcalUrl = "https://www.hebcal.com/shabbat?cfg=json&geo=geoname&geonameid=295530&b=20&M=on&ue=off&lg=he-x-NoNikud";

  fetch(hebcalUrl)
    .then(res => res.json())
    .then(data => {
      // איתור פרשה, הדלקת נרות והבדלה
      const parshaItem = data.items.find(item => item.category === "parashat");
      const candlesItem = data.items.find(item => item.category === "candles");
      const havdalahItem = data.items.find(item => item.category === "havdalah");

      // 1) שם הפרשה
      let parshaName = parshaItem ? parshaItem.title : ""; 
      if (!parshaName) {
        parshaName = "לא ידועה";
      }

      // 2) הדלקת נרות
      let candleTime = "לא זמין";
      if (candlesItem) {
        // לדוגמה: candlesItem.title = "הדלקת נרות: 17:24"
        const splitted = candlesItem.title.split(" ");
        candleTime = splitted[splitted.length - 1]; // "17:24"
      }

      // 3) צאת שבת
      let havdalahTime = "לא זמין";
      if (havdalahItem) {
        // לדוגמה: havdalahItem.title = "צאת שבת: 18:20"
        const splitted = havdalahItem.title.split(" ");
        havdalahTime = splitted[splitted.length - 1]; // "18:20"
      }

      // עדכון האלמנטים ב־HTML
      const shabbatTitle = document.getElementById("shabbatTitle");
      const candleElem = document.getElementById("candleTime");
      const havdalahElem = document.getElementById("havdalahTime");
      
      shabbatTitle.textContent = `זמני השבת ${parshaName}`;
      candleElem.textContent = `כניסת שבת ${candleTime}`;
      havdalahElem.textContent = `צאת שבת ${havdalahTime}`;
    })
    .catch(err => {
      console.error("שגיאה בטעינת Hebcal:", err);
      document.getElementById("shabbatTitle").textContent = "זמני השבת (לא זמין)";
      document.getElementById("candleTime").textContent = "כניסת שבת לא זמין";
      document.getElementById("havdalahTime").textContent = "צאת שבת לא זמין";
    });
});


/* עדויות וגלריה */
document.addEventListener('DOMContentLoaded', function() {
    // עדויות
    const testimonialsTrack = document.querySelector('.testimonials-track');
    const testimonials = document.querySelectorAll('.testimonial-card');
    let currentTestimonial = 0;

    function slideTestimonials() {
        testimonialsTrack.style.transform = `translateX(${-currentTestimonial * 100}%)`;
    }

    setInterval(() => {
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        slideTestimonials();
    }, 5000);

    // גלריית תמונות
    const galleryTrack = document.querySelector('.gallery-track');
    const galleryItems = document.querySelectorAll('.gallery-item');
    const dotsContainer = document.querySelector('.gallery-dots');
    let currentSlide = 0;

    // יצירת נקודות ניווט
    galleryItems.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });

    function updateDots() {
        document.querySelectorAll('.dot').forEach((dot, index) => {
            dot.classList.toggle('active', index === currentSlide);
        });
    }

    function goToSlide(index) {
        currentSlide = index;
        galleryTrack.style.transform = `translateX(${-currentSlide * 100}%)`;
        updateDots();
    }

    document.querySelector('.prev').addEventListener('click', () => {
        currentSlide = (currentSlide - 1 + galleryItems.length) % galleryItems.length;
        goToSlide(currentSlide);
    });

    document.querySelector('.next').addEventListener('click', () => {
        currentSlide = (currentSlide + 1) % galleryItems.length;
        goToSlide(currentSlide);
    });

    setInterval(() => {
        currentSlide = (currentSlide + 1) % galleryItems.length;
        goToSlide(currentSlide);
    }, 4000);
});