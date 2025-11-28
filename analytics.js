// Google Analytics 4 (GA4) Configuration
// Measurement ID: G-P5ZFP9YR48

(function() {
    // Google Analytics Measurement ID
    const GA_MEASUREMENT_ID = 'G-P5ZFP9YR48';
    
    // Load Google Analytics script
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(script1);
    
    // Initialize gtag
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', GA_MEASUREMENT_ID);
    
    // Track page views
    gtag('event', 'page_view', {
        page_title: document.title,
        page_location: window.location.href
    });
    
    // Track contact form submissions
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function() {
            gtag('event', 'form_submit', {
                form_name: 'contact_form',
                page_location: window.location.href
            });
        });
    }
    
    // Track CTA button clicks
    document.querySelectorAll('.cta-button').forEach(button => {
        button.addEventListener('click', function() {
            gtag('event', 'cta_click', {
                button_text: this.textContent.trim(),
                page_location: window.location.href
            });
        });
    });
})();

