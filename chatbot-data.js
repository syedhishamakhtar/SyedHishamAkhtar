// Comprehensive chatbot knowledge base for Syed Hisham Akhtar's website
const chatbotKnowledge = {
    // Personal Information
    personal: {
        name: "Syed Hisham Akhtar",
        title: "Creative Digital Solutions Specialist",
        location: "Karachi, Pakistan",
        experience: "5+ years",
        specialties: ["Web Developer", "Graphic Designer", "Video Editor"],
        email: "syedhisham360@gmail.com",
        phone: "+923473937379",
        whatsapp: "+923473937379"
    },

    // Social Media Links
    social: {
        linkedin: "https://pk.linkedin.com/in/syed-hisham-akhtar-a3038b311",
        instagram: "https://www.instagram.com/syed_hisham_official/",
        facebook: "https://www.facebook.com/syed.hisham.akhtar.2025/",
        whatsapp: "https://wa.me/923473937379"
    },

    // Services Information
    services: {
        webDevelopment: {
            title: "Web Development",
            description: "Custom websites and web applications built with modern technologies",
            features: [
                "Responsive design for all devices",
                "Modern frameworks (React, Vue.js, Node.js)",
                "Database integration (MongoDB, MySQL)",
                "API development and integration",
                "E-commerce platforms",
                "Content Management Systems",
                "SEO optimization",
                "Fast loading performance"
            ],
            technologies: ["HTML5", "CSS3", "JavaScript", "React", "Node.js", "MongoDB", "Express", "Vue.js"],
            startingPrice: "$199",
            marketPrice: "$800-1500",
            savings: "75% OFF",
            deliveryTime: "1-2 weeks",
            specialOffer: "Limited Time: Basic Website Only $99!"
        },
        graphicDesign: {
            title: "Graphic Design",
            description: "Visual identity and branding solutions that make your business stand out",
            features: [
                "Logo design and branding",
                "Social media graphics",
                "Marketing materials",
                "Business cards and stationery",
                "Brochures and flyers",
                "Web graphics and banners",
                "Brand identity packages",
                "Print design"
            ],
            tools: ["Adobe Photoshop", "Adobe Illustrator", "Figma", "Canva Pro"],
            startingPrice: "$25",
            marketPrice: "$100-300",
            savings: "70% OFF",
            deliveryTime: "1-3 days",
            specialOffer: "Logo Design Special: Only $15!"
        },
        videoEditing: {
            title: "Video Editing",
            description: "Professional video production and editing services for all your content needs",
            features: [
                "Promotional videos",
                "Social media content",
                "YouTube videos",
                "Corporate presentations",
                "Motion graphics",
                "Color correction",
                "Audio enhancement",
                "Subtitle addition"
            ],
            tools: ["Adobe Premiere Pro", "After Effects", "DaVinci Resolve"],
            startingPrice: "$49",
            marketPrice: "$200-500",
            savings: "80% OFF",
            deliveryTime: "2-5 days",
            specialOffer: "Social Media Video: Only $29!"
        },
        seoOptimization: {
            title: "SEO Optimization",
            description: "Boost your website's visibility on Google and search engines",
            features: [
                "Complete SEO audit",
                "Keyword research",
                "On-page optimization",
                "Technical SEO",
                "Content optimization",
                "Local SEO",
                "Google Analytics setup",
                "Monthly SEO reports"
            ],
            tools: ["Google Analytics", "SEMrush", "Ahrefs", "Google Search Console"],
            startingPrice: "$99",
            marketPrice: "$300-800",
            savings: "70% OFF",
            deliveryTime: "1-2 weeks",
            specialOffer: "Basic SEO Package: Only $79!"
        },
        digitalMarketing: {
            title: "Digital Marketing",
            description: "Complete digital marketing campaigns to grow your business",
            features: [
                "Facebook Ads management",
                "Google Ads campaigns",
                "Instagram marketing",
                "Social media management",
                "Content creation",
                "Email marketing",
                "Analytics & reporting",
                "Lead generation"
            ],
            tools: ["Facebook Ads Manager", "Google Ads", "Hootsuite", "Mailchimp"],
            startingPrice: "$149",
            marketPrice: "$500-1200",
            savings: "75% OFF",
            deliveryTime: "Ongoing",
            specialOffer: "Social Media Package: Only $99/month!"
        },
        websiteMaintenance: {
            title: "Website Maintenance",
            description: "Keep your website running smoothly with regular updates and support",
            features: [
                "Regular updates",
                "Security monitoring",
                "Daily backups",
                "Performance optimization",
                "Bug fixes",
                "Content updates",
                "Technical support",
                "Monthly reports"
            ],
            tools: ["cPanel", "WordPress", "Security plugins", "Monitoring tools"],
            startingPrice: "$39",
            marketPrice: "$150-300",
            savings: "80% OFF",
            deliveryTime: "Monthly",
            specialOffer: "Basic Maintenance: Only $29/month!"
        },
        mobileAppDevelopment: {
            title: "Mobile App Development",
            description: "Native Android & iOS apps with modern frameworks",
            features: [
                "Android app development",
                "iOS app development",
                "React Native apps",
                "Flutter development",
                "App store deployment",
                "Push notifications",
                "API integration",
                "App maintenance"
            ],
            tools: ["React Native", "Flutter", "Android Studio", "Xcode"],
            startingPrice: "$299",
            marketPrice: "$1500-3000",
            savings: "85% OFF",
            deliveryTime: "3-6 weeks",
            specialOffer: "Basic App: Only $199!"
        },
        ecommerceSolutions: {
            title: "E-commerce Solutions",
            description: "Complete online store setup with payment integration",
            features: [
                "Online store setup",
                "Payment gateway integration",
                "Inventory management",
                "Shopping cart functionality",
                "Order management",
                "Customer accounts",
                "Product catalog",
                "Sales analytics"
            ],
            tools: ["WooCommerce", "Shopify", "Stripe", "PayPal"],
            startingPrice: "$249",
            marketPrice: "$1000-2000",
            savings: "80% OFF",
            deliveryTime: "2-3 weeks",
            specialOffer: "Basic Store: Only $179!"
        },
        contentWriting: {
            title: "Content Writing",
            description: "Professional content creation for all your business needs",
            features: [
                "Website content writing",
                "Blog writing",
                "SEO copywriting",
                "Product descriptions",
                "Social media content",
                "Email marketing content",
                "Press releases",
                "Content strategy"
            ],
            tools: ["Grammarly", "SEMrush", "Google Docs", "WordPress"],
            startingPrice: "$19",
            marketPrice: "$100-200",
            savings: "85% OFF",
            deliveryTime: "1-3 days",
            specialOffer: "Blog Article: Only $9!"
        },
        logoAnimation: {
            title: "Logo Animation",
            description: "Animated logos and brand intro videos",
            features: [
                "Logo animation",
                "Brand intro videos",
                "Motion graphics",
                "2D/3D animations",
                "Social media animations",
                "GIF creation",
                "Video intros/outros",
                "Custom animations"
            ],
            tools: ["After Effects", "Cinema 4D", "Blender", "Lottie"],
            startingPrice: "$39",
            marketPrice: "$200-400",
            savings: "85% OFF",
            deliveryTime: "2-4 days",
            specialOffer: "Simple Animation: Only $25!"
        },
        domainHosting: {
            title: "Domain & Hosting",
            description: "Complete domain and hosting solutions",
            features: [
                "Domain registration",
                "Web hosting setup",
                "SSL certificates",
                "Email hosting",
                "DNS management",
                "Server monitoring",
                "Backup services",
                "Technical support"
            ],
            tools: ["cPanel", "Cloudflare", "Let's Encrypt", "WHM"],
            startingPrice: "$29",
            marketPrice: "$100-200",
            savings: "80% OFF",
            deliveryTime: "Same day",
            specialOffer: "Domain + Hosting: Only $19/year!"
        },
        businessConsultation: {
            title: "Business Consultation",
            description: "Digital strategy and business growth consultation",
            features: [
                "Digital strategy planning",
                "Business growth advice",
                "Market analysis",
                "Competitor research",
                "Brand positioning",
                "Online presence audit",
                "Growth roadmap",
                "ROI optimization"
            ],
            tools: ["Google Analytics", "SEMrush", "Business Canvas", "SWOT Analysis"],
            startingPrice: "$79",
            marketPrice: "$300-500",
            savings: "80% OFF",
            deliveryTime: "1-2 hours",
            specialOffer: "Strategy Session: Only $49!"
        }
    },

    // Portfolio Projects
    portfolio: [
        {
            title: "E-Commerce Platform",
            description: "A full-featured online store with payment integration, inventory management, and responsive design",
            technologies: ["React", "Node.js", "MongoDB"],
            category: "Web Development"
        },
        {
            title: "Corporate Website",
            description: "Modern business website with dynamic content management, SEO optimization, and seamless user interface",
            technologies: ["Vue.js", "Express", "MySQL"],
            category: "Web Development"
        },
        {
            title: "Creative Portfolio",
            description: "Interactive portfolio website featuring smooth animations, creative layouts, and optimized performance",
            technologies: ["GSAP", "Three.js", "CSS3"],
            category: "Web Development"
        }
    ],

    // FAQ and Common Questions
    faq: {
        "what services do you offer": "I offer three main services: Web Development (custom websites and applications), Graphic Design (logos, branding, marketing materials), and Video Editing (promotional videos, social media content).",
        
        "how much do you charge": "Pricing varies by project: Web Development starts from $500, Graphic Design from $50, and Video Editing from $100. Contact me for a detailed quote based on your specific needs.",
        
        "how long does it take": "Delivery times depend on the service: Graphic Design (3-7 days), Video Editing (5-10 days), Web Development (2-4 weeks). Complex projects may take longer.",
        
        "what technologies do you use": "For web development: HTML5, CSS3, JavaScript, React, Node.js, MongoDB, Express, Vue.js. For design: Adobe Photoshop, Illustrator, Figma. For video: Adobe Premiere Pro, After Effects.",
        
        "do you work internationally": "Yes! I work with clients worldwide. All communication is done online through email, WhatsApp, or video calls.",
        
        "what makes you different": "I offer a unique combination of technical expertise and creative vision. With 5+ years of experience, I provide end-to-end digital solutions from concept to completion.",
        
        "can you help with seo": "Yes! All my websites come with basic SEO optimization including meta tags, structured data, fast loading times, and mobile responsiveness.",
        
        "do you provide support": "Absolutely! I provide ongoing support and maintenance for all projects. Support terms are discussed during project planning.",
        
        "what payment methods do you accept": "I accept various payment methods including bank transfer, PayPal, and other secure online payment systems. Payment terms are flexible.",
        
        "can you work on existing websites": "Yes! I can redesign, update, or add new features to existing websites. I work with all major platforms and technologies."
    },

    // Additional service patterns
    additionalPatterns: {
        seo: ['seo', 'search engine', 'google ranking', 'optimization', 'search'],
        marketing: ['marketing', 'ads', 'facebook ads', 'google ads', 'social media', 'promotion'],
        maintenance: ['maintenance', 'support', 'update', 'backup', 'fix', 'manage']
    },

    // Response templates for different languages
    responses: {
        english: {
            greeting: "🎯 Hey there! Welcome to my digital space! 👋\n\nI'm Syed Hisham Akhtar, your go-to expert for:\n• Web Development 💻\n• Graphic Design 🎨\n• Video Editing 🎬\n\nBefore we dive into your project, show some love by following my Instagram: @syed_hisham_official\n\nType 'followed' when you're done! 🚀\n\n💡 Pro tip: Type 'urdu' for Roman Urdu conversation!",
            
            followReminder: "Please follow my Instagram first! 😅\n\n📱 @syed_hisham_official\n\nType 'followed' when done!",
            
            welcomeBack: "Awesome! 🎉 You're now a VIP client!\n\nI can help you with:\n• Web Development\n• Graphic Design  \n• Video Editing\n\nWhat do you need?",
            
            defaultResponse: "I didn't understand! 🤔\n\nYou can ask about:\n• 'services' - my services\n• 'portfolio' - my work\n• 'pricing' - rates\n• 'contact' - contact info\n• 'technologies' - what I use"
        },
        
        urdu: {
            greeting: "🎯 Assalam o Alaikum! Mere digital space mein khush amdeed! 👋\n\nMain Syed Hisham Akhtar hun, aap ka digital solutions expert:\n• Web Development 💻\n• Graphic Design 🎨\n• Video Editing 🎬\n\nPehle Instagram follow karna zaroori hai: @syed_hisham_official\n\nFollow karne ke baad 'followed' type kariye! 🚀",
            
            followReminder: "Pehle Instagram follow kariye bhai! 😅\n\n📱 @syed_hisham_official\n\nFollow karne ke baad 'followed' type kariye!",
            
            welcomeBack: "Bohot shukriya! 🎉 Ab aap mere VIP client ban gaye hain!\n\nMain aap ki madad kar sakta hun:\n• Website banane mein\n• Graphic design mein\n• Video editing mein\n\nKya chahiye aap ko?",
            
            defaultResponse: "Samajh nahi aaya! 🤔\n\nAap ye puch sakte hain:\n• 'services' - mere services ke baare mein\n• 'portfolio' - mera kaam\n• 'pricing' - rates\n• 'contact' - contact info\n• 'technologies' - main kya use karta hun"
        }
    }
};

// Advanced response matching system
const responsePatterns = {
    // Service related patterns
    webDevelopment: [
        'website', 'web development', 'web design', 'web app', 'online store', 
        'ecommerce', 'e-commerce', 'responsive', 'react', 'node', 'javascript'
    ],
    
    graphicDesign: [
        'logo', 'design', 'graphic', 'branding', 'graphics', 'visual', 
        'poster', 'flyer', 'business card', 'social media design'
    ],
    
    videoEditing: [
        'video', 'editing', 'video editing', 'motion graphics', 'animation',
        'youtube', 'promotional video', 'social media video'
    ],
    
    pricing: [
        'price', 'cost', 'rate', 'charge', 'fee', 'budget', 'how much',
        'pricing', 'rates', 'charges'
    ],
    
    contact: [
        'contact', 'phone', 'email', 'whatsapp', 'reach', 'call', 'message'
    ],
    
    portfolio: [
        'portfolio', 'work', 'projects', 'examples', 'samples', 'previous work'
    ],
    
    technologies: [
        'technology', 'tech', 'tools', 'software', 'programming', 'languages'
    ],
    
    seoOptimization: [
        'seo', 'search engine optimization', 'google ranking', 'seo audit',
        'keyword research', 'google analytics', 'search visibility'
    ],
    
    digitalMarketing: [
        'digital marketing', 'facebook ads', 'google ads', 'social media marketing',
        'instagram marketing', 'ads management', 'lead generation'
    ],
    
    websiteMaintenance: [
        'website maintenance', 'support', 'updates', 'backup', 'security',
        'bug fixes', 'technical support', 'website management'
    ],
    
    mobileAppDevelopment: [
        'mobile app', 'android app', 'ios app', 'react native', 'flutter',
        'app development', 'mobile development', 'app store'
    ],
    
    ecommerceSolutions: [
        'ecommerce', 'e-commerce', 'online store', 'shopping cart', 'payment gateway',
        'online shop', 'woocommerce', 'shopify'
    ],
    
    contentWriting: [
        'content writing', 'blog writing', 'copywriting', 'article writing',
        'seo content', 'website content', 'content creation'
    ],
    
    logoAnimation: [
        'logo animation', 'animated logo', 'motion graphics', 'brand animation',
        'video intro', 'logo motion', 'animation'
    ],
    
    domainHosting: [
        'domain', 'hosting', 'web hosting', 'domain registration', 'server',
        'ssl certificate', 'email hosting'
    ],
    
    businessConsultation: [
        'business consultation', 'digital strategy', 'business advice', 'consultation',
        'strategy planning', 'business growth', 'market analysis'
    ],
    
    about: [
        'about', 'who are you', 'experience', 'background', 'skills'
    ]
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { chatbotKnowledge, responsePatterns };
}