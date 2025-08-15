// Example: simple search click
document.querySelector('.search-bar button').addEventListener('click', () => {
  alert('Search feature coming soon!');
});

  document.addEventListener('DOMContentLoaded', () => {
        const menuToggle = document.querySelector('.menu-toggle');
        const navLinks = document.getElementById('nav-links');

        menuToggle.addEventListener('click', () => {
            // This line toggles the 'active' class on the nav-links element
            navLinks.classList.toggle('active');
        });
    });