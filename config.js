// ============================================
// CONFIGURATION FILE - EDIT THIS TO UPDATE YOUR WEBSITE
// ============================================
// 
// TO ADD NEW VIDEOS:
// Simply add a new entry to the videos array below.
// You can use:
// - Dropbox links (change ?dl=0 to ?dl=1 for direct download)
// - Local video files in the 'videos' folder
// - Any direct video URL
//
// IMPORTANT: For Dropbox links, change the end from ?dl=0 to ?dl=1
// Example: https://www.dropbox.com/.../video.mp4?rlkey=...&dl=1

const siteConfig = {
    // Site Information
    siteName: "TW Photography",
    siteTagline: "Professional Real Estate Videography",
    
    // Hero Background Video/Slideshow
    // Add video URLs here for a background slideshow
    // Videos will automatically cycle through
    // Leave empty array [] to use default gradient background
    heroVideos: [
        // Example - add your video URLs here:
         "https://www.dropbox.com/scl/fi/xp8p2z1a44ul716cxh7bm/37-Reign-Street-R-H.mp4?rlkey=z6lvue93di59ulepg9l5vchhv&st=z3yvo5dm&dl=1"
        // "https://www.dropbox.com/.../video2.mp4?dl=1",
        // Or use local videos:
        // "videos/hero-video1.mp4",
        // "videos/hero-video2.mp4"
    ],
    // Video transition duration in seconds (how long each video plays)
    heroVideoDuration: 60,
    
    // About Section Content
    about: {
        text: "Welcome to TW Photography! I specialize in professional real estate videography, creating stunning property tours and marketing videos that showcase properties in their best light. With years of experience, I help real estate professionals and property owners present their listings with cinematic quality videos."
    },
    
    // Contact Information
    contact: {
        text: "Interested in working together? Please get in touch!",
        info: [
            {
                type: "Email",
                value: "info@twphotography.com.au",
                link: "mailto:info@twphotography.com.au"
            },
            {
                type: "Phone",
                value: "0419696665",
                link: "tel:+610419696665"
            },
            {
                type: "Location",
                value: "Goulburn, NSW",
                link: null
            }
        ]
    },
    
    // Portfolio Gallery (Photos and Videos)
    // To add content:
    // 
    // FOR VIDEOS:
    // 1. For Dropbox: Copy your share link and change ?dl=0 to ?dl=1 at the end
    // 2. For local files: Add video to 'videos' folder and reference it
    // 
    // FOR PHOTOS:
    // 1. Add your photos to the 'images' folder
    // 2. Add an entry with type: "photo"
    //
    // IMPORTANT: For Dropbox links, change the end from ?dl=0 to ?dl=1
    gallery: [
        // Example Video
        {
            type: "video",
            src: "https://www.dropbox.com/scl/fi/xp8p2z1a44ul716cxh7bm/37-Reign-Street-R-H.mp4?rlkey=z6lvue93di59ulepg9l5vchhv&st=z3yvo5dm&dl=1",
            title: "37 Reign Street - Real Estate Tour",
            caption: "Beautiful property tour showcasing modern living spaces",
            thumbnail: "", // Optional: Add thumbnail image path if you have one
            category: "all"
        },
        // Add photos here (after adding your photo files to the 'images' folder):
        // {
        //     type: "photo",
        //     src: "images/your-photo.jpg",
        //     title: "Photo Title",
        //     caption: "Photo description",
        //     category: "all"
        // }
        // Add more videos:
        // {
        //     type: "video",
        //     src: "https://www.dropbox.com/.../video.mp4?dl=1",
        //     title: "Property Name - Description",
        //     caption: "Video description",
        //     thumbnail: "images/thumbnail.jpg",
        //     category: "all"
        // },
        // Add photos:
        {
             type: "photo",
             src: "images/front-door.png",
             title: "Front door",
             caption: "Front door of the property",
             category: "all"
        },
        {
            type: "photo",
            src: "images/Backyard.png",
            title: "Backyard",
            caption: "Backyard of the property",
            category: "all"
       }
    ]
};

