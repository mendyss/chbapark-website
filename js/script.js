function toggleMenu() {
    const mobileMenu = document.getElementById('hamburger-menu');
    mobileMenu.classList.toggle('hidden');
}

document.getElementById('hamburger-menu-button').addEventListener('click', toggleMenu);
document.getElementById('close-menu-button').addEventListener('click', toggleMenu);