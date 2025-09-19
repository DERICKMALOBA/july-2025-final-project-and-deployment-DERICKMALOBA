// This is script.js - Add your JavaScript here if needed.

document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links (if any were internal to a page)
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            // Prevent default hash behavior if it's an internal link
            if (this.hash !== '' && document.querySelector(this.hash)) {
                e.preventDefault();
                document.querySelector(this.hash).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Form validation for the contact page
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const subject = document.getElementById('subject').value.trim();
            const message = document.getElementById('message').value.trim();

            if (name === '' || email === '' || subject === '' || message === '') {
                alert('Please fill in all fields.');
            } else if (!/^[\w-]+(?:\.[\w-]+)*@(?:[\w-]+\.)+[a-zA-Z]{2,7}$/.test(email)) {
                alert('Please enter a valid email address.');
            } else {
                // In a real application, you would send this data to a server
                alert('Thank you for your message, ' + name + '! We will get back to you shortly.');
                contactForm.reset();
            }
        });
    }

    // Highlight active navigation link
    const currentPath = window.location.pathname.split('/').pop();
    // Update to select links within .nav-links
    const navLinksList = document.querySelectorAll('.nav-links ul li a');
    navLinksList.forEach(link => {
        const linkPath = link.getAttribute('href');
        if (linkPath === currentPath || (currentPath === '' && linkPath === 'index.html')) {
            link.classList.add('active');
        } else if (currentPath === 'services.html' && linkPath === 'services.html') {
            link.classList.add('active');
        } else if (currentPath === 'about.html' && linkPath === 'about.html') {
            link.classList.add('active');
        } else if (currentPath === 'contact.html' && linkPath === 'contact.html') {
            link.classList.add('active');
        }
    });

    // Mobile navigation toggle
    const menuIcon = document.querySelector('.menu-icon');
    const navLinksContainer = document.querySelector('.nav-links');

    if (menuIcon && navLinksContainer) {
        menuIcon.addEventListener('click', () => {
            navLinksContainer.classList.toggle('active');
        });
    }
});
