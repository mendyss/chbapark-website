document.addEventListener("DOMContentLoaded", function() {
    // פונקציה לתרומה (כדוגמה)
    function donate() {
        window.location.href = "https://www.example.com/donate"; // עדכן עם קישור לתרומות
    }

    // הוספת אירוע לכפתור תרומה
    const donateButton = document.querySelector("#donate button");
    if (donateButton) {
        donateButton.addEventListener("click", donate);
    }

    // תפריט ניווט נפתח במובייל
    const nav = document.querySelector("nav ul");
    const menuToggle = document.createElement("button");
    menuToggle.textContent = "☰";
    menuToggle.style.background = "none";
    menuToggle.style.border = "none";
    menuToggle.style.color = "white";
    menuToggle.style.fontSize = "24px";
    menuToggle.style.cursor = "pointer";
    menuToggle.style.display = "none";
    document.querySelector("header").prepend(menuToggle);
    
    menuToggle.addEventListener("click", function() {
        nav.style.display = nav.style.display === "block" ? "none" : "block";
    });

    // הפיכת תפריט לתצוגה נכונה במובייל
    function adjustMenu() {
        if (window.innerWidth < 768) {
            nav.style.display = "none";
            menuToggle.style.display = "block";
        } else {
            nav.style.display = "flex";
            menuToggle.style.display = "none";
        }
    }

    window.addEventListener("resize", adjustMenu);
    adjustMenu();
});
