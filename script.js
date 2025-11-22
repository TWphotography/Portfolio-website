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
            // Close mobile menu if open
            document.querySelector('.nav-links').classList.remove('active');
        }
    });
});

// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Load content from config
function loadContent() {
    // Load about text
    const aboutText = document.getElementById('aboutText');
    if (aboutText && siteConfig.about) {
        aboutText.textContent = siteConfig.about.text;
    }
    
    // Load contact content
    const contactText = document.getElementById('contactText');
    if (contactText && siteConfig.contact) {
        contactText.textContent = siteConfig.contact.text;
    }
    
    // Load contact info
    const contactInfo = document.getElementById('contactInfo');
    if (contactInfo && siteConfig.contact && siteConfig.contact.info) {
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
    
    // Load gallery
    loadGallery();
    
    // Set current year in footer
    document.getElementById('currentYear').textContent = new Date().getFullYear();
}

// Load gallery (photos and videos)
function loadGallery() {
    const galleryGrid = document.getElementById('galleryGrid');
    if (!galleryGrid || !siteConfig.gallery) return;
    
    galleryGrid.innerHTML = siteConfig.gallery.map((item, index) => {
        const isVideo = item.type === 'video';
        const isPhoto = item.type === 'photo' || !item.type; // Default to photo if type not specified
        
        if (isVideo) {
            // Video item
            const thumbnailSrc = item.thumbnail || item.src;
            const isVideoThumbnail = !item.thumbnail;
            
            return `
                <div class="gallery-item" data-type="video" data-category="${item.category || 'all'}" data-index="${index}">
                    ${isVideoThumbnail ? 
                        `<video muted><source src="${thumbnailSrc}" type="video/mp4"></video>` :
                        `<img src="${thumbnailSrc}" alt="${item.title || ''}" loading="lazy">`
                    }
                    <div class="play-button"></div>
                    ${item.caption ? `<div class="gallery-item-overlay">${item.caption}</div>` : ''}
                </div>
            `;
        } else {
            // Photo item
            return `
                <div class="gallery-item" data-type="photo" data-category="${item.category || 'all'}" data-index="${index}">
                    <img src="${item.src}" alt="${item.title || ''}" loading="lazy">
                    ${item.caption ? `<div class="gallery-item-overlay">${item.caption}</div>` : ''}
                </div>
            `;
        }
    }).join('');
    
    // Add click handlers for lightbox
    document.querySelectorAll('.gallery-item').forEach(item => {
        item.addEventListener('click', () => {
            const index = parseInt(item.dataset.index);
            openLightbox(index);
        });
    });
}

// Gallery filter functionality
function initGalleryFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Filter gallery items
            const filter = button.dataset.filter;
            galleryItems.forEach(item => {
                if (filter === 'all' || item.dataset.category === filter) {
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'scale(1)';
                    }, 10);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
}

// Lightbox functionality
let currentItemIndex = 0;
let currentMedia = null;

function openLightbox(index) {
    currentItemIndex = index;
    const lightbox = document.getElementById('lightbox');
    const lightboxContent = lightbox.querySelector('.lightbox-content');
    const lightboxVideo = lightbox.querySelector('.lightbox-video');
    const lightboxTitle = lightbox.querySelector('.lightbox-title');
    const lightboxCaption = lightbox.querySelector('.lightbox-caption');
    const item = siteConfig.gallery[index];
    
    const isVideo = item.type === 'video';
    
    if (isVideo) {
        // Show video player
        if (lightboxVideo) {
            lightboxVideo.style.display = 'block';
            lightboxVideo.src = item.src;
            lightboxVideo.load();
            currentMedia = lightboxVideo;
        }
    } else {
        // Show image (create img element if needed)
        let lightboxImage = lightbox.querySelector('.lightbox-image');
        if (!lightboxImage) {
            lightboxImage = document.createElement('img');
            lightboxImage.className = 'lightbox-image';
            lightboxContent.insertBefore(lightboxImage, lightboxVideo);
        }
        lightboxImage.src = item.src;
        lightboxImage.alt = item.title || '';
        lightboxImage.style.display = 'block';
        if (lightboxVideo) lightboxVideo.style.display = 'none';
        currentMedia = lightboxImage;
    }
    
    lightboxTitle.textContent = item.title || '';
    lightboxCaption.textContent = item.caption || '';
    
    // Show lightbox
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    const lightboxVideo = lightbox.querySelector('.lightbox-video');
    
    // Pause and reset video
    if (lightboxVideo) {
        lightboxVideo.pause();
        lightboxVideo.currentTime = 0;
    }
    
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
    currentVideo = null;
}

function showNextVideo() {
    if (siteConfig.videos && siteConfig.videos.length > 0) {
        currentVideoIndex = (currentVideoIndex + 1) % siteConfig.videos.length;
        const lightboxVideo = document.querySelector('.lightbox-video');
        const lightboxTitle = document.querySelector('.lightbox-title');
        const lightboxCaption = document.querySelector('.lightbox-caption');
        const video = siteConfig.videos[currentVideoIndex];
        
        lightboxVideo.src = video.src;
        lightboxTitle.textContent = video.title || '';
        lightboxCaption.textContent = video.caption || '';
        lightboxVideo.load();
        currentVideo = lightboxVideo;
    }
}

function showPrevVideo() {
    if (siteConfig.videos && siteConfig.videos.length > 0) {
        currentVideoIndex = (currentVideoIndex - 1 + siteConfig.videos.length) % siteConfig.videos.length;
        const lightboxVideo = document.querySelector('.lightbox-video');
        const lightboxTitle = document.querySelector('.lightbox-title');
        const lightboxCaption = document.querySelector('.lightbox-caption');
        const video = siteConfig.videos[currentVideoIndex];
        
        lightboxVideo.src = video.src;
        lightboxTitle.textContent = video.title || '';
        lightboxCaption.textContent = video.caption || '';
        lightboxVideo.load();
        currentVideo = lightboxVideo;
    }
}

// Lightbox event listeners
document.addEventListener('DOMContentLoaded', () => {
    const lightbox = document.getElementById('lightbox');
    const closeBtn = lightbox.querySelector('.lightbox-close');
    const nextBtn = lightbox.querySelector('.lightbox-next');
    const prevBtn = lightbox.querySelector('.lightbox-prev');
    
    closeBtn.addEventListener('click', closeLightbox);
    nextBtn.addEventListener('click', showNextItem);
    prevBtn.addEventListener('click', showPrevItem);
    
    lightbox.addEventListener('click', (e) => {
        // Only close if clicking the background, not the video or controls
        if (e.target === lightbox || e.target.classList.contains('lightbox-content')) {
            closeLightbox();
        }
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (lightbox.classList.contains('active')) {
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowRight') showNextItem();
            if (e.key === 'ArrowLeft') showPrevItem();
        }
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = 'var(--shadow)';
    }
});

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    loadContent();
    initGalleryFilters();
});

