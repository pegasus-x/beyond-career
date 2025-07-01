// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    const backToTop = document.querySelector('.back-to-top');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
        backToTop.classList.add('visible');
    } else {
        navbar.classList.remove('scrolled');
        backToTop.classList.remove('visible');
    }
});

// Mobile menu toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
    const isExpanded = navLinks.classList.toggle('active');
    hamburger.setAttribute('aria-expanded', isExpanded);
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            navLinks.classList.remove('active');
            hamburger.setAttribute('aria-expanded', 'false');
        }
    });
});

// Keyboard navigation for accessibility
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    });
});

// Fade-in animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 1px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});

// Form submission with validation and Formspree
document.getElementById('contactForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const form = this;
    const name = form.querySelector('#name').value.trim();
    const email = form.querySelector('#email').value.trim();
    const message = form.querySelector('#message').value.trim();
    const phone = form.querySelector('#phone').value.trim();
    const formMessage = form.querySelector('#form-message');
    const submitBtn = form.querySelector('.submit-btn');
    
    // Clear previous messages
    formMessage.textContent = '';
    formMessage.classList.remove('error', 'success');
    
    // Client-side validation
    if (!name || !email || !message) {
        formMessage.textContent = 'Please fill in all required fields.';
        formMessage.classList.add('error');
        formMessage.focus();
        return;
    }
    
    if (!/^\S+@\S+\.\S+$/.test(email)) {
        formMessage.textContent = 'Please enter a valid email address.';
        formMessage.classList.add('error');
        formMessage.focus();
        return;
    }
    
    // Submit to Formspree via AJAX
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;
    
    try {
        const response = await fetch(form.action, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name,
                email,
                phone,
                message
            })
        });
        
        if (response.ok) {
            formMessage.textContent = 'Thank you for your message! We\'ll get back to you soon.';
            formMessage.classList.add('success');
            form.reset();
            // Track form submission in GA4
            gtag('event', 'form_submission', {
                'event_category': 'Contact Form',
                'event_label': 'Get In Touch',
                'value': 1
            });
        } else {
            throw new Error('Submission failed');
        }
    } catch (error) {
        formMessage.textContent = 'An error occurred. Please try again later.';
        formMessage.classList.add('error');
    } finally {
        formMessage.focus();
        submitBtn.textContent = 'Send';
        submitBtn.disabled = false;
    }
});

// Counter animation for stats
const animateCounters = () => {
    const counters = document.querySelectorAll('.stat-number');
    counters.forEach(counter => {
        const target = counter.textContent;
        const numTarget = parseInt(target.replace(/[^\d]/g, ''));
        let count = 0;
        const increment = numTarget / 100;
        
        const updateCounter = () => {
            if (count < numTarget) {
                count += increment;
                if (target.includes('%')) {
                    counter.textContent = Math.ceil(count) + '%';
                } else if (target.includes('+')) {
                    counter.textContent = Math.ceil(count) + '+';
                } else {
                    counter.textContent = Math.ceil(count);
                }
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target;
            }
        };
        updateCounter();
    });
};

// Trigger counter animation when stats section is visible
const statsSection = document.querySelector('.stats');
if (statsSection) {
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounters();
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    statsObserver.observe(statsSection);
}