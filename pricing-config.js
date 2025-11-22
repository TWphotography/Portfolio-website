// ============================================
// PRICING CONFIGURATION FILE
// EDIT THIS TO UPDATE PRICING AND BEFORE/AFTER COMPARISONS
// ============================================

const pricingConfig = {
    // Before/After Photo Comparisons
    // Add your before/after photo pairs here
    beforeAfter: [
        {
            title: "Living Room Enhancement",
            before: "images/before-after/living-room-before.png",
            after: "images/before-after/living-room-after.png"
        },
        {
            title: "Kitchen Transformation",
            before: "images/before-after/kitchen-before.png",
            after: "images/before-after/kitchen-after.png"
        },
        {
            title: "Bedroom Styling",
            before: "images/before-after/bedroom-before.png",
            after: "images/before-after/bedroom-after.png"
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
            price: "$299",
            period: "per property",
            description: "Perfect for small properties and quick listings",
            features: [
                "10-15 edited photos",
                "Basic color correction",
                "HD quality images",
                "24-48 hour turnaround",
                "Digital delivery"
            ],
            featured: false
        },
        {
            name: "Professional Package",
            price: "$499",
            period: "per property",
            description: "Our most popular package for professional listings",
            features: [
                "20-25 edited photos",
                "Advanced editing & enhancement",
                "4K quality images",
                "Virtual staging (1 room)",
                "24 hour turnaround",
                "Digital delivery + print-ready files",
                "Social media optimized images"
            ],
            featured: true
        },
        {
            name: "Premium Package",
            price: "$799",
            period: "per property",
            description: "Complete marketing solution with video",
            features: [
                "30+ edited photos",
                "Premium editing & enhancement",
                "4K quality images",
                "Virtual staging (up to 3 rooms)",
                "2-3 minute property video",
                "Aerial/drone footage (if applicable)",
                "Same day turnaround",
                "All digital formats + print-ready",
                "Social media package included"
            ],
            featured: false
        }
    ],
    
    // Additional Services
    additionalServices: [
        {
            name: "Virtual Styling",
            description: "Add furniture and decor to empty rooms",
            price: "$99 per room"
        },
        {
            name: "Twilight Photography",
            description: "Beautiful evening exterior shots",
            price: "$149"
        },
        {
            name: "Aerial/Drone Photography",
            description: "Stunning overhead property views",
            price: "$199"
        },
        {
            name: "Video Tour",
            description: "2-3 minute property walkthrough video",
            price: "$299"
        },
        {
            name: "Floor Plan Creation",
            description: "Professional floor plan drawings",
            price: "$149"
        },
        {
            name: "Rush Service",
            description: "Same day delivery (24 hours)",
            price: "+$99"
        }
    ]
};

