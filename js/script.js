document.addEventListener('DOMContentLoaded', function() {
    // --- תפריט המבורגר (מובייל) - תחילת סקריפט תפריט המבורגר ---
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navUL = document.querySelector('nav ul');

    hamburgerMenu.addEventListener('click', () => {
        hamburgerMenu.classList.toggle('active'); // הוספה/הסרה של קלאס 'active' לאייקון ההמבורגר (אנימציה)
        navUL.classList.toggle('open'); // הוספה/הסרה של קלאס 'open' לתפריט (תצוגה/הסתרה)
        navUL.classList.toggle('nav-mobile-menu'); // הוספה/הסרה של קלאס תפריט מובייל
    });
    // --- תפריט המבורגר (מובייל) - סוף סקריפט תפריט המבורגר ---


    // --- סליידר תמונות - תחילת סקריפט סליידר ---
    const sliderSection = document.querySelector('.slider'); // סעיף סליידר
    const sliderImages = [ // רשימת תמונות לסליידר - יש להחליף בקישורים אמיתיים
        "images/SYN%20Beer%20Sheva-20.jpg",
        "images/WhatsApp%20Image%202024-09-30%20at%2020.22.52%20(1).jpeg",
        "images/synagog.jpg",
        "images/376ee636-b873-4aec-b46b-e3f5a3b596c2.JPG"
    ];
    let currentImageIndex = 0;

    function setSliderBackground() {
        sliderSection.style.backgroundImage = `url('${sliderImages[currentImageIndex]}')`;
    }

    function nextImage() {
        currentImageIndex = (currentImageIndex + 1) % sliderImages.length;
        setSliderBackground();
    }

    setSliderBackground(); // הגדרת תמונה ראשונה עם טעינת הדף
    setInterval(nextImage, 3000); // החלפת תמונה כל 3 שניות (3000 מילישניות)
    // --- סליידר תמונות - סוף סקריפט סליידר ---


    // --- עדויות נגללות - תחילת סקריפט עדויות ---
    const testimonialSliderContainer = document.querySelector('.testimonial-slider');
    const testimonials = [ // רשימת עדויות - יש להחליף בתוכן אמיתי
        "עדות 1 - בית חב''ד תמיד כאן בשבילי! בזכותם חגגנו בר מצווה לבן שלנו בצורה הכי מרגשת שיכולנו לדמיין.",
        "עדות 2 - הלימוד השבועי לנשים שינה לי את החיים – סוף סוף מצאתי מקום שבו אני מרגישה מחוברת ומוקפת באנשים חמים.",
        "עדות 3 - כשעברנו לשכונה, לא הכרנו אף אחד, אבל בית חב''ד הפך אותנו לחלק ממשפחה אחת גדולה!"
    ];


    function createTestimonialCards() {
        testimonials.forEach(testimonialText => {
            const card = document.createElement('div');
            card.classList.add('testimonial-card', 'bg-white', 'rounded-lg', 'shadow-md', 'p-8', 'w-[300px]', 'md:w-[400px]', 'inline-block', 'mx-4'); // הוספת קלאסים של Tailwind
            card.innerHTML = `
                <p class="text-gray-700 italic mb-4">"${testimonialText}"</p>
                <p class="font-semibold text-gray-800">- שם העד</p>
            `;
            testimonialSliderContainer.appendChild(card);
        });
    }

    createTestimonialCards(); // יצירת כרטיסיות עדויות
     // --- עדויות נגללות - סוף סקריפט עדויות ---

});
