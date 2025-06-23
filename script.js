
    const navbar = document.getElementById('navbar');
    const navLinks = document.getElementById('nav-links');

    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 50);
    });

    function toggleMenu() {
      navLinks.classList.toggle('active');
    }
