// ============================================
// PRICING CONFIGURATION FILE
// EDIT THIS TO UPDATE PRICING AND BEFORE/AFTER COMPARISONS
// ============================================

const pricingConfig = {
    // Before/After Photo Comparisons
    // Add your before/after photo pairs here
    beforeAfter: [
        {
            title: "Basic Colour Correction",
            before: "images/before-after/Base-Image.jpeg",
            after: "images/before-after/Basic-Colour-Correction.jpeg"
        },
        {
            title: "Premium Editing & Enhancement",
            before: "images/before-after/Base-Image.jpeg",
            after: "images/before-after/Premium-editing-enhancement.jpeg"
        },
        {
            title: "Virtual Styling",
            before: "images/before-after/Base-Image.jpeg",
            after: "images/before-after/Virtual-Staging.jpeg"
        }
        // Add more before/after comparisons:
        // {
        //     title: "Your Title",
        //     before: "images/before-after/your-before.jpg",
        //     after: "images/before-after/your-after.jpg"
        // }
    ],
    
    // Pricing Packages
    packages: [
        {
            name: "Basic Package",
            price: "$239*",
            period: "per property",
            description: "Perfect for small homes and quick listings",
            features: [
                "10-15 edited photos",
                "Basic color correction",
                "HD quality images",
                "24-48 hour turnaround",
                "Digital delivery via Dropbox"
            ],
            featured: false
        },
        {
            name: "Professional Package",
            price: "$379*",
            period: "per property",
            description: "Our most popular choice for high quality property listings",
            features: [
                "15-20 edited photos",
                "Premium editing & enhancement",
                "4K quality images",
                "2D Floor Plan",
                "24-48hour turnaround",
                "Digital delivery via Dropbox",
                "Virtual styling for up to 2 rooms (if required)"
            ],
            featured: true
        },
        {
            name: "Premium Package",
            price: "$799*",
            period: "per property",
            description: "Complete property marketing solution including video",
            features: [
                "20-30+ edited photos",
                "Premium editing & enhancement",
                "4K quality images",
                "Virtual styling for up to 4 rooms",
                "2-3 minute property showcase video",
                "30 second social media reel",
                "2D Floor Plan",
                "24-48 hour turnaround",
                "Digital delivery via Dropbox"
            ],
            featured: false
        }
    ],
    
    // Additional Services
    additionalServices: [
        {
            name: "Virtual Styling",
            description: "Add realistic furniture and decor to empty rooms",
            price: "$59* per room"
        },
        {
            name: "Twilight Photography",
            description: "Beautiful, high-impact exterior twilight images",
            price: "$199*"
        },
        {
            name: "Video Tour",
            description: "2-3 minute cinematic walkthrough video",
            price: "$420"
        },
        {
            name: "Social Media Reel",
            description: "30 second fast-paced highlights cut",
            price: "$119*"
        },
        {
            name: "Floor Plan Creation",
            description: "Professional 2D floor plan ",
            price: "$99*"
        },
        {
            name: "Rush Service",
            description: "Same day delivery (24 hours)",
            price: "+$99*"
        }
    ]
};

