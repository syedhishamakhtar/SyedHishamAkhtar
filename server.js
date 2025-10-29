const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname)));

// Email configuration
const transporter = nodemailer.createTransporter({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER || 'syedhisham360@gmail.com',
        pass: process.env.EMAIL_PASS || 'your-app-password'
    }
});

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Contact form submission
app.post('/api/contact', async (req, res) => {
    try {
        const { name, email, subject, message } = req.body;
        
        // Validation
        if (!name || !email || !subject || !message) {
            return res.status(400).json({ 
                success: false, 
                message: 'All fields are required' 
            });
        }

        // Email to you
        const mailOptions = {
            from: email,
            to: 'syedhisham360@gmail.com',
            subject: `Portfolio Contact: ${subject}`,
            html: `
                <h3>New Contact Form Submission</h3>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Subject:</strong> ${subject}</p>
                <p><strong>Message:</strong></p>
                <p>${message}</p>
            `
        };

        // Auto-reply to client
        const autoReply = {
            from: 'syedhisham360@gmail.com',
            to: email,
            subject: 'Thank you for contacting me!',
            html: `
                <h3>Hi ${name},</h3>
                <p>Thank you for reaching out! I have received your message and will get back to you within 24 hours.</p>
                <p><strong>Your Message:</strong></p>
                <p>${message}</p>
                <br>
                <p>Best regards,<br>Syed Hisham Akhtar<br>Web Developer | Graphic Designer | Video Editor</p>
                <p>Phone: +923473937379<br>Email: syedhisham360@gmail.com</p>
            `
        };

        // Send emails
        await transporter.sendMail(mailOptions);
        await transporter.sendMail(autoReply);

        res.json({ 
            success: true, 
            message: 'Message sent successfully!' 
        });

    } catch (error) {
        console.error('Email error:', error);
        res.status(500).json({ 
            success: false, 
            message: 'Failed to send message. Please try again.' 
        });
    }
});

// Enhanced Chatbot API with comprehensive responses
app.post('/api/chatbot', (req, res) => {
    const { message, language, context } = req.body;
    
    // Comprehensive knowledge base
    const knowledge = {
        personal: {
            name: "Syed Hisham Akhtar",
            title: "Creative Digital Solutions Specialist",
            location: "Karachi, Pakistan",
            experience: "5+ years",
            email: "syedhisham360@gmail.com",
            phone: "+923473937379"
        },
        services: {
            webDevelopment: {
                price: "$500+",
                delivery: "2-4 weeks",
                technologies: ["React", "Node.js", "MongoDB", "Express", "Vue.js"]
            },
            graphicDesign: {
                price: "$50+",
                delivery: "3-7 days",
                tools: ["Adobe Photoshop", "Illustrator", "Figma"]
            },
            videoEditing: {
                price: "$100+",
                delivery: "5-10 days",
                tools: ["Adobe Premiere Pro", "After Effects"]
            }
        }
    };
    
    const responses = {
        'web': {
            'en': `🌐 <strong>Web Development Services</strong><br><br>I create modern websites and applications with:<br>• Responsive design for all devices<br>• Modern frameworks (${knowledge.services.webDevelopment.technologies.join(', ')})<br>• E-commerce platforms<br>• SEO optimization<br>• Database integration<br><br><strong>Starting Price:</strong> ${knowledge.services.webDevelopment.price}<br><strong>Delivery Time:</strong> ${knowledge.services.webDevelopment.delivery}<br><br>Contact me for detailed discussion: <a href="https://wa.me/923473937379" target="_blank">WhatsApp</a>`,
            'ur': `🌐 <strong>Web Development Services</strong><br><br>Main modern websites aur applications banata hun:<br>• Responsive design (mobile-friendly)<br>• Modern frameworks (${knowledge.services.webDevelopment.technologies.join(', ')})<br>• E-commerce platforms<br>• SEO optimization<br>• Database integration<br><br><strong>Starting Price:</strong> ${knowledge.services.webDevelopment.price}<br><strong>Delivery:</strong> ${knowledge.services.webDevelopment.delivery}<br><br>Detail ke liye contact kariye: <a href="https://wa.me/923473937379" target="_blank">WhatsApp</a>`
        },
        'design': {
            'en': `🎨 <strong>Graphic Design Services</strong><br><br>Professional visual solutions:<br>• Logo design and branding<br>• Social media graphics<br>• Marketing materials<br>• Business cards and stationery<br>• Brand identity packages<br><br><strong>Tools Used:</strong> ${knowledge.services.graphicDesign.tools.join(', ')}<br><strong>Starting Price:</strong> ${knowledge.services.graphicDesign.price}<br><strong>Delivery:</strong> ${knowledge.services.graphicDesign.delivery}`,
            'ur': `🎨 <strong>Graphic Design Services</strong><br><br>Professional visual solutions:<br>• Logo design aur branding<br>• Social media graphics<br>• Marketing materials<br>• Business cards<br>• Brand identity packages<br><br><strong>Tools:</strong> ${knowledge.services.graphicDesign.tools.join(', ')}<br><strong>Starting Price:</strong> ${knowledge.services.graphicDesign.price}<br><strong>Delivery:</strong> ${knowledge.services.graphicDesign.delivery}`
        },
        'video': {
            'en': `🎬 <strong>Video Editing Services</strong><br><br>Professional video production:<br>• Promotional videos<br>• Social media content<br>• YouTube videos<br>• Motion graphics<br>• Color correction<br><br><strong>Software:</strong> ${knowledge.services.videoEditing.tools.join(', ')}<br><strong>Starting Price:</strong> ${knowledge.services.videoEditing.price}<br><strong>Delivery:</strong> ${knowledge.services.videoEditing.delivery}`,
            'ur': `🎬 <strong>Video Editing Services</strong><br><br>Professional video production:<br>• Promotional videos<br>• Social media content<br>• YouTube videos<br>• Motion graphics<br>• Color correction<br><br><strong>Software:</strong> ${knowledge.services.videoEditing.tools.join(', ')}<br><strong>Starting Price:</strong> ${knowledge.services.videoEditing.price}<br><strong>Delivery:</strong> ${knowledge.services.videoEditing.delivery}`
        },
        'pricing': {
            'en': `💰 <strong>Pricing Structure</strong><br><br><strong>Web Development:</strong> ${knowledge.services.webDevelopment.price}<br><strong>Graphic Design:</strong> ${knowledge.services.graphicDesign.price}<br><strong>Video Editing:</strong> ${knowledge.services.videoEditing.price}<br><br><em>Prices vary based on project complexity</em><br><br>For exact quote:<br>📱 <a href="https://wa.me/923473937379" target="_blank">WhatsApp: +923473937379</a><br>📧 ${knowledge.personal.email}`,
            'ur': `💰 <strong>Pricing Information</strong><br><br><strong>Web Development:</strong> ${knowledge.services.webDevelopment.price}<br><strong>Graphic Design:</strong> ${knowledge.services.graphicDesign.price}<br><strong>Video Editing:</strong> ${knowledge.services.videoEditing.price}<br><br><em>Rates project complexity ke hisab se vary karte hain</em><br><br>Exact quote ke liye:<br>📱 <a href="https://wa.me/923473937379" target="_blank">WhatsApp: +923473937379</a><br>📧 ${knowledge.personal.email}`
        },
        'contact': {
            'en': `📞 <strong>Contact Information</strong><br><br><strong>Name:</strong> ${knowledge.personal.name}<br><strong>Title:</strong> ${knowledge.personal.title}<br><strong>Location:</strong> ${knowledge.personal.location}<br><strong>Experience:</strong> ${knowledge.personal.experience}<br><br><strong>Get in Touch:</strong><br>📧 Email: <a href="mailto:${knowledge.personal.email}">${knowledge.personal.email}</a><br>📱 Phone/WhatsApp: <a href="https://wa.me/923473937379" target="_blank">${knowledge.personal.phone}</a><br><br><strong>Social Media:</strong><br>📸 <a href="https://www.instagram.com/syed_hisham_official/" target="_blank">Instagram</a><br>💼 <a href="https://pk.linkedin.com/in/syed-hisham-akhtar-a3038b311" target="_blank">LinkedIn</a><br><br><em>I typically respond within 2-4 hours!</em>`,
            'ur': `📞 <strong>Contact Information</strong><br><br><strong>Name:</strong> ${knowledge.personal.name}<br><strong>Title:</strong> ${knowledge.personal.title}<br><strong>Location:</strong> ${knowledge.personal.location}<br><strong>Experience:</strong> ${knowledge.personal.experience}<br><br><strong>Contact Methods:</strong><br>📧 Email: <a href="mailto:${knowledge.personal.email}">${knowledge.personal.email}</a><br>📱 Phone/WhatsApp: <a href="https://wa.me/923473937379" target="_blank">${knowledge.personal.phone}</a><br><br><strong>Social Media:</strong><br>📸 <a href="https://www.instagram.com/syed_hisham_official/" target="_blank">Instagram</a><br>💼 <a href="https://pk.linkedin.com/in/syed-hisham-akhtar-a3038b311" target="_blank">LinkedIn</a><br><br><em>Main usually 2-4 hours mein reply karta hun!</em>`
        },
        'about': {
            'en': `👨‍💻 <strong>About ${knowledge.personal.name}</strong><br><br>I'm a versatile digital creator specializing in:<br>• Web Development<br>• Graphic Design<br>• Video Editing<br><br><strong>Experience:</strong> ${knowledge.personal.experience} of professional experience<br><strong>Location:</strong> ${knowledge.personal.location}<br><br><strong>Mission:</strong> Transforming complex ideas into simple, beautiful solutions that drive results.<br><br>My passion lies in helping businesses establish their digital presence through innovative technology and creative storytelling!`,
            'ur': `👨‍💻 <strong>About ${knowledge.personal.name}</strong><br><br>Main ek versatile digital creator hun jo specializes karta hai:<br>• Web Development<br>• Graphic Design<br>• Video Editing<br><br><strong>Experience:</strong> ${knowledge.personal.experience} professional experience<br><strong>Location:</strong> ${knowledge.personal.location}<br><br><strong>Mission:</strong> Complex ideas ko simple, beautiful solutions mein transform karna jo results drive karte hain.<br><br>Mera passion hai businesses ki digital presence establish karna innovative technology aur creative storytelling ke through!`
        }
    };

    // Determine response category based on message content
    let responseKey = 'contact'; // default
    const msg = message.toLowerCase();
    
    if (msg.includes('web') || msg.includes('website') || msg.includes('development')) {
        responseKey = 'web';
    } else if (msg.includes('design') || msg.includes('graphic') || msg.includes('logo')) {
        responseKey = 'design';
    } else if (msg.includes('video') || msg.includes('edit') || msg.includes('motion')) {
        responseKey = 'video';
    } else if (msg.includes('price') || msg.includes('cost') || msg.includes('rate') || msg.includes('charge')) {
        responseKey = 'pricing';
    } else if (msg.includes('about') || msg.includes('who') || msg.includes('experience')) {
        responseKey = 'about';
    } else if (msg.includes('contact') || msg.includes('phone') || msg.includes('email')) {
        responseKey = 'contact';
    }
    
    const lang = language === 'urdu' ? 'ur' : 'en';
    
    res.json({
        success: true,
        response: responses[responseKey][lang] || responses['contact']['en'],
        category: responseKey,
        timestamp: new Date().toISOString()
    });
});

// Analytics endpoint for chatbot interactions
app.post('/api/chatbot-analytics', (req, res) => {
    const { event, data } = req.body;
    
    // Log chatbot interactions (in production, save to database)
    console.log(`Chatbot Analytics - Event: ${event}`, data);
    
    res.json({ success: true });
});

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.json({ 
        status: 'healthy', 
        timestamp: new Date().toISOString(),
        services: {
            chatbot: 'active',
            email: 'active',
            website: 'active'
        }
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
    console.log(`📧 Email service configured`);
    console.log(`🤖 Advanced chatbot system ready`);
    console.log(`💼 Portfolio website active`);
});