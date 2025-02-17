// דוגמה בסיסית לסגירה/פתיחה של תפריט במובייל
document.addEventListener("DOMContentLoaded", function() {
  const navToggle = document.querySelector(".nav-toggle");
  const navList = document.querySelector(".nav-list");

  navToggle.addEventListener("click", () => {
    navList.style.display = (navList.style.display === "flex") ? "none" : "flex";
  });
});