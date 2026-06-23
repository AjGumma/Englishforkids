// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
}

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Contact Form Submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const data = Object.fromEntries(formData);
        
        // Here you would normally send the data to a server
        console.log('Form submitted:', data);
        
        // Show success message
        alert('Thank you for your message! We will get back to you soon.');
        
        // Reset form
        this.reset();
    });
}

// Navbar scroll effect
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
    }
    
    lastScroll = currentScroll;
});

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.feature-card, .program-card, .course-block, .gallery-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// QR Code modal (optional enhancement)
document.querySelectorAll('.qr-card img').forEach(qrImg => {
    qrImg.style.cursor = 'pointer';
    qrImg.addEventListener('click', function() {
        // You can add a modal to show larger QR code here
        console.log('QR code clicked');
    });
});

// Update Google Maps iframe src with actual location
// Replace the placeholder coordinates with your actual location
function updateMapLocation() {
    const mapIframes = document.querySelectorAll('iframe[src*="google.com/maps"]');
    const actualLocation = {
        lat: 15.120833,  // Approximate coordinates for Tịnh An, Quảng Ngãi
        lng: 108.803889
    };
    
    mapIframes.forEach(iframe => {
        // You can update the src with actual coordinates
        // iframe.src = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3834.1234567890123!2d${actualLocation.lng}!3d${actualLocation.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTXCsDA3JzI0LjQiTiAxMDjCsDA3JzI0LjQiRQ!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s`;
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    updateMapLocation();
    console.log('English For Kids website loaded successfully!');
});