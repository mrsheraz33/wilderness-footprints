// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }
    
    window.addEventListener('resize', function() {
        if (window.innerWidth >= 768 && mobileMenu) {
            mobileMenu.classList.add('hidden');
        }
    });
    
    // Back button
    const backBtn = document.getElementById('back-btn');
    if (backBtn) {
        backBtn.addEventListener('click', function(e) {
            e.preventDefault();
            window.history.back();
        });
    }
    
    // Contact form
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! We will get back to you within 24 hours.');
            this.reset();
        });
    }
    
    // Newsletter subscription
    const subscribeBtn = document.getElementById('subscribe-btn');
    const subscribeEmail = document.getElementById('subscribe-email');
    
    if (subscribeBtn && subscribeEmail) {
        subscribeBtn.addEventListener('click', function() {
            if (subscribeEmail.value && subscribeEmail.value.includes('@')) {
                alert('Subscribed successfully!');
                subscribeEmail.value = '';
            } else {
                alert('Please enter a valid email address.');
            }
        });
    }
});

