const mobileMenu = document.getElementById('mobile-menu');
        const navLinks = document.getElementById('nav-links');

        mobileMenu.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });

        // Header scroll effect
        const header = document.getElementById('header');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        // Newsletter form submission
        const newsletterForm = document.querySelector('.newsletter-form');
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const emailInput = newsletterForm.querySelector('input');
            alert(`Thank you for subscribing with ${emailInput.value}! You'll receive our latest updates soon.`);
            emailInput.value = '';
        });

        // Driver slider auto-scroll
        const driverSlider = document.querySelector('.driver-slider');
        let isDown = false;
        let startX;
        let scrollLeft;

        driverSlider.addEventListener('mousedown', (e) => {
            isDown = true;
            startX = e.pageX - driverSlider.offsetLeft;
            scrollLeft = driverSlider.scrollLeft;
        });

        driverSlider.addEventListener('mouseleave', () => {
            isDown = false;
        });

        driverSlider.addEventListener('mouseup', () => {
            isDown = false;
        });

        driverSlider.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - driverSlider.offsetLeft;
            const walk = (x - startX) * 2;
            driverSlider.scrollLeft = scrollLeft - walk;
        });