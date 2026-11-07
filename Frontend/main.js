    document.addEventListener('scroll', () => {
            const navbar = document.getElementById('main-navbar');

            if (window.scrollY > 0) {
                navbar.classList.add('scrolled');
                logo.src = 'iMAGES/mw_logo-black.png';
            } else {
                navbar.classList.remove('scrolled');
                logo.src = 'iMAGES/mw_logo-white.png';
            }
        });
        

    