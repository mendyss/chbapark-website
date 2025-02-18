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


document.addEventListener("DOMContentLoaded", function() {
  const hebcalUrl = "https://www.hebcal.com/shabbat?cfg=json&geonameid=295530&M=on&lg=he";

  fetch(hebcalUrl)
    .then(response => response.json())
    .then(data => {
      // מערך אירועים items
      let candleLighting = data.items.find(item => item.category === "candles");
      let havdalah = data.items.find(item => item.category === "havdalah");

      if (candleLighting) {
        // candleLighting.title = "הדלקת נרות: 17:30" למשל
        const candleTimeVal = candleLighting.title.split(":")[1]?.trim() || "N/A";
        document.getElementById("candleTime").textContent = candleTimeVal;
      }

      if (havdalah) {
        // havdalah.title = "צאת שבת: 18:20" למשל
        const havTimeVal = havdalah.title.split(":")[1]?.trim() || "N/A";
        document.getElementById("havdalahTime").textContent = havTimeVal;
      }
    })
    .catch(err => {
      console.error("Hebcal API error:", err);
      document.getElementById("candleTime").textContent = "לא זמין";
      document.getElementById("havdalahTime").textContent = "לא זמין";
    });
});