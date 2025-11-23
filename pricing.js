// Pricing Page JavaScript

// Load before/after comparisons
function loadBeforeAfter() {
    const container = document.getElementById('beforeAfterContainer');
    if (!container || !pricingConfig.beforeAfter) return;
    
    container.innerHTML = pricingConfig.beforeAfter.map((item, index) => {
        // Check if this is a video item
        if (item.video) {
            return `
                <div class="before-after-item">
                    <h3>${item.title}</h3>
                    <div class="video-wrapper">
                        <video controls class="showcase-video">
                            <source src="${item.video}" type="video/mp4">
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            `;
        }
        
        // Regular before/after image comparison
        return `
            <div class="before-after-item">
                <h3>${item.title}</h3>
                <div class="before-after-wrapper" data-index="${index}">
                    <img src="${item.before}" alt="Before" class="before-after-before">
                    <div class="before-after-slider"></div>
                    <img src="${item.after}" alt="After" class="before-after-after">
                    <span class="before-after-label before"></span>
                    <span class="before-after-label after"></span>
                </div>
            </div>
        `;
    }).join('');
    
    // Initialize sliders (only for image comparisons)
    initBeforeAfterSliders();
}

// Initialize before/after sliders
function initBeforeAfterSliders() {
    const wrappers = document.querySelectorAll('.before-after-wrapper');
    
    wrappers.forEach(wrapper => {
        const slider = wrapper.querySelector('.before-after-slider');
        const afterImg = wrapper.querySelector('.before-after-after');
        let isDragging = false;
        
        // Set initial position (50%)
        updateSliderPosition(wrapper, slider, afterImg, 50);
        
        // Mouse events
        wrapper.addEventListener('mousedown', (e) => {
            isDragging = true;
            updateSlider(e, wrapper, slider, afterImg);
        });
        
        document.addEventListener('mousemove', (e) => {
            if (isDragging) {
                updateSlider(e, wrapper, slider, afterImg);
            }
        });
        
        document.addEventListener('mouseup', () => {
            isDragging = false;
        });
        
        // Touch events for mobile
        wrapper.addEventListener('touchstart', (e) => {
            isDragging = true;
            updateSlider(e, wrapper, slider, afterImg);
        });
        
        document.addEventListener('touchmove', (e) => {
            if (isDragging) {
                updateSlider(e, wrapper, slider, afterImg);
            }
        });
        
        document.addEventListener('touchend', () => {
            isDragging = false;
        });
        
        // Click to move slider
        wrapper.addEventListener('click', (e) => {
            if (!isDragging) {
                updateSlider(e, wrapper, slider, afterImg);
            }
        });
    });
}

function updateSlider(e, wrapper, slider, afterImg) {
    const rect = wrapper.getBoundingClientRect();
    const x = (e.clientX || (e.touches && e.touches[0].clientX)) - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    updateSliderPosition(wrapper, slider, afterImg, percentage);
}

function updateSliderPosition(wrapper, slider, afterImg, percentage) {
    slider.style.left = percentage + '%';
    afterImg.style.clipPath = `inset(0 ${100 - percentage}% 0 0)`;
}

// Load pricing packages
function loadPricingPackages() {
    const grid = document.getElementById('packagesGrid');
    if (!grid || !pricingConfig.packages) return;
    
    grid.innerHTML = pricingConfig.packages.map(pkg => {
        const featuredClass = pkg.featured ? 'featured' : '';
        return `
            <div class="package-card ${featuredClass}">
                <div class="package-name">${pkg.name}</div>
                <div class="package-price">${pkg.price}</div>
                <div class="package-price-period">${pkg.period}</div>
                <p class="package-description">${pkg.description}</p>
                <ul class="package-features">
                    ${pkg.features.map(feature => `<li>${feature}</li>`).join('')}
                </ul>
                <a href="contact.html" class="package-button">Get Started</a>
            </div>
        `;
    }).join('');
}

// Load additional services
function loadAdditionalServices() {
    const grid = document.getElementById('servicesGrid');
    if (!grid || !pricingConfig.additionalServices) return;
    
    grid.innerHTML = pricingConfig.additionalServices.map(service => {
        return `
            <div class="service-item">
                <h3>${service.name}</h3>
                <p>${service.description}</p>
                <div class="service-price">${service.price}</div>
            </div>
        `;
    }).join('');
}

// Load contact information
//function loadContactInfo() {
//    // Load contact content
//    const contactText = document.getElementById('contactText');
//    if (contactText && siteConfig && siteConfig.contact) {
//        contactText.textContent = siteConfig.contact.text;
//    }
    
//    // Load contact info
//    const contactInfo = document.getElementById('contactInfo');
//    if (contactInfo && siteConfig && siteConfig.contact && siteConfig.contact.info) {
 //       contactInfo.innerHTML = siteConfig.contact.info.map(item => {
//            const value = item.link 
//                ? `<a href="${item.link}" style="color: var(--primary-color); text-decoration: none;">${item.value}</a>`
//                : item.value;
  //          return `<div class="contact-item">
 //               <strong>${item.type}:</strong>
  //              ${value}
//         </div>`;
//        }).join('');
//    }
//}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    loadBeforeAfter();
    loadPricingPackages();
    loadAdditionalServices();
    loadContactInfo();
    
    // Set current year in footer
    const yearElement = document.getElementById('currentYear');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
    
    // Initialize mobile menu (from main script.js)
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }
});

