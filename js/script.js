document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const mobileDropdown = document.querySelector('.mobile-dropdown');

    if (hamburgerMenu && mobileDropdown) {
        hamburgerMenu.addEventListener('click', function() {
            mobileDropdown.classList.toggle('open');
        });
    }
});
