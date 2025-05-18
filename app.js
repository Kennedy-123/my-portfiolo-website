const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuToggle.textContent = navLinks.classList.contains('active') ?  '✖' : '☰';
});

// Close navbar when a link is clicked (on mobile)
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768 && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            menuToggle.textContent = '☰';
        }
    });
});