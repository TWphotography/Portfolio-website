// Contact Form with EmailJS Integration
// 
// SETUP INSTRUCTIONS:
// 1. Go to https://www.emailjs.com/ and create a free account
// 2. Create an email service (Gmail, Outlook, etc.)
// 3. Create an email template with variables: {{name}}, {{email}}, {{message}}
// 4. Get your Public Key, Service ID, and Template ID
// 5. Replace the placeholder values below with your actual EmailJS credentials

(function() {
    'use strict';

    // Set current year in footer
    const currentYearElement = document.getElementById('currentYear');
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }

    // Load contact content from config.js
    function loadContactContent() {
        const contactText = document.getElementById('contactText');
        if (contactText && typeof siteConfig !== 'undefined' && siteConfig.contact) {
            contactText.textContent = siteConfig.contact.text;
        }
        
        const contactInfo = document.getElementById('contactInfo');
        if (contactInfo && typeof siteConfig !== 'undefined' && siteConfig.contact && siteConfig.contact.info) {
            contactInfo.innerHTML = siteConfig.contact.info.map(item => {
                const value = item.link 
                    ? `<a href="${item.link}" style="color: var(--primary-color); text-decoration: none;">${item.value}</a>`
                    : item.value;
                return `<div class="contact-item">
                    <strong>${item.type}:</strong>
                    ${value}
                </div>`;
            }).join('');
        }
    }

    // Load contact content when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', loadContactContent);
    } else {
        loadContactContent();
    }

    // Initialize EmailJS
    // Replace 'YOUR_PUBLIC_KEY' with your EmailJS Public Key
    emailjs.init('YOUR_PUBLIC_KEY');

    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');
    const submitButton = contactForm.querySelector('.submit-button');
    const buttonText = submitButton.querySelector('.button-text');
    const buttonLoader = submitButton.querySelector('.button-loader');

    if (contactForm) {
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();

            // Get form values
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            // Validate form
            if (!name || !email || !message) {
                showMessage('Please fill in all required fields.', 'error');
                return;
            }

            // Validate email format
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                showMessage('Please enter a valid email address.', 'error');
                return;
            }

            // Show loading state
            setLoadingState(true);

            // Prepare email parameters
            const templateParams = {
                name: name,
                email: email,
                message: message
            };

            try {
                // Send email using EmailJS
                // Replace 'YOUR_SERVICE_ID' with your EmailJS Service ID
                // Replace 'YOUR_TEMPLATE_ID' with your EmailJS Template ID
                const response = await emailjs.send(
                    'YOUR_SERVICE_ID',
                    'YOUR_TEMPLATE_ID',
                    templateParams
                );

                // Success
                showMessage('Thank you! Your message has been sent successfully. We\'ll get back to you soon.', 'success');
                contactForm.reset();
            } catch (error) {
                // Error
                console.error('EmailJS Error:', error);
                showMessage('Sorry, there was an error sending your message. Please try again later or contact us directly.', 'error');
            } finally {
                // Reset loading state
                setLoadingState(false);
            }
        });
    }

    function setLoadingState(loading) {
        if (loading) {
            submitButton.disabled = true;
            buttonText.style.display = 'none';
            buttonLoader.style.display = 'inline';
        } else {
            submitButton.disabled = false;
            buttonText.style.display = 'inline';
            buttonLoader.style.display = 'none';
        }
    }

    function showMessage(text, type) {
        formMessage.textContent = text;
        formMessage.className = `form-message ${type}`;
        
        // Scroll to message
        formMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        
        // Auto-hide success messages after 5 seconds
        if (type === 'success') {
            setTimeout(() => {
                formMessage.style.display = 'none';
            }, 5000);
        }
    }
})();

