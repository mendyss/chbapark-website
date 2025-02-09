document.addEventListener('DOMContentLoaded', function() {
  // רשימת תמונות לסליידר
  const sliderImages = [
    "https://raw.githubusercontent.com/mendyss/chbapark-website/main/images/SYN%20Beer%20Sheva-20.jpg",
    "https://raw.githubusercontent.com/mendyss/chbapark-website/main/images/WhatsApp%20Image%202024-09-30%20at%2020.22.52%20(1).jpeg",
    "https://raw.githubusercontent.com/mendyss/chbapark-website/main/images/synagog.jpg",
    "https://raw.githubusercontent.com/mendyss/chbapark-website/main/images/376ee636-b873-4aec-b46b-e3f5a3b596c2.JPG"
  ];
  
  let currentIndex = 0;
  const sliderImageElement = document.getElementById('slider-image');
  
  setInterval(function() {
    currentIndex = (currentIndex + 1) % sliderImages.length;
    sliderImageElement.src = sliderImages[currentIndex];
  }, 2000); // מעבר כל 2 שניות
  
  // תפריט "המבורגר" למובייל
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  
  hamburger.addEventListener('click', function() {
    navLinks.classList.toggle('active');
  });
});
