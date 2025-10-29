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
        }
    });
});

// Header background on scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = 'none';
    }
});

// Contact form handling
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(this);
    const name = formData.get('name') || this.querySelector('input[type="text"]').value;
    const email = formData.get('email') || this.querySelector('input[type="email"]').value;
    const message = formData.get('message') || this.querySelector('textarea').value;
    
    // Simple validation
    if (!name || !email || !message) {
        alert('Please fill in all fields');
        return;
    }
    
    // Show success message
    alert('Thank you for your message! I will get back to you soon.');
    
    // Reset form
    this.reset();
});

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// Mobile hamburger menu toggle
function initializeHamburgerMenu() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', (e) => {
            e.stopPropagation();
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
            console.log('Hamburger clicked, menu active:', navMenu.classList.contains('active'));
        });

        // Close menu when clicking on a link
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    } else {
        console.log('Hamburger or nav-menu not found');
    }
}

// Add loading animation
window.addEventListener('load', function() {
    document.body.style.opacity = '1';
    document.body.style.transition = 'opacity 0.5s ease';
});

// Load chatbot knowledge base and advanced functionality
function loadChatbotScripts() {
    // Load knowledge base
    const knowledgeScript = document.createElement('script');
    knowledgeScript.src = 'chatbot-data.js';
    knowledgeScript.onload = function() {
        // Load advanced chatbot after knowledge base
        const advancedScript = document.createElement('script');
        advancedScript.src = 'advanced-chatbot.js';
        document.head.appendChild(advancedScript);
    };
    document.head.appendChild(knowledgeScript);
}

// Fallback basic chatbot (in case advanced version fails)
function initializeBasicChatbot() {
    let userFollowed = false;
    let chatLanguage = 'english';
    
    const chatbotToggle = document.getElementById('chatbot-toggle');
    const chatbotWindow = document.getElementById('chatbot-window');
    const chatbotClose = document.getElementById('chatbot-close');
    const chatbotInput = document.getElementById('chatbot-input-field');
    const chatbotSend = document.getElementById('chatbot-send');
    const chatbotMessages = document.getElementById('chatbot-messages');

    if (!chatbotToggle) return; // Exit if elements not found

    chatbotToggle.addEventListener('click', function() {
        chatbotWindow.classList.toggle('active');
    });

    chatbotClose.addEventListener('click', function() {
        chatbotWindow.classList.remove('active');
    });

    function sendMessage() {
        const message = chatbotInput.value.trim();
        if (message) {
            addUserMessage(message);
            chatbotInput.value = '';
            setTimeout(() => {
                handleBotResponse(message);
            }, 500);
        }
    }

    chatbotSend.addEventListener('click', sendMessage);
    chatbotInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });

    function addUserMessage(message) {
        const messageDiv = document.createElement('div');
        messageDiv.className = 'message user-message';
        messageDiv.innerHTML = `<div class="message-content">${message}</div>`;
        chatbotMessages.appendChild(messageDiv);
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }

    function addBotMessage(message) {
        const messageDiv = document.createElement('div');
        messageDiv.className = 'message bot-message';
        messageDiv.innerHTML = `<div class="message-content">${message}</div>`;
        chatbotMessages.appendChild(messageDiv);
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }

    function handleBotResponse(userMessage) {
        const msg = userMessage.toLowerCase();
        
        if (msg === 'urdu') {
            chatLanguage = 'urdu';
            addBotMessage('Bilkul! Ab main aap se Roman Urdu mein baat karunga! 😊<br><br>Pehle Instagram follow karna zaroori hai: <a href="https://www.instagram.com/syed_hisham_official/" target="_blank" style="color: #667eea;">@syed_hisham_official</a><br><br>Follow karne ke baad "followed" type kariye!');
        } else if (msg === 'followed' || msg.includes('follow')) {
            userFollowed = true;
            if (chatLanguage === 'urdu') {
                addBotMessage('🎉 Bohot shukriya! Ab aap mere VIP client ban gaye hain!<br><br>🔥 <strong>EXCLUSIVE PRICES (Sirf aap ke liye):</strong><br><br>💻 <strong>Website Development:</strong><br>• Basic Website: <span style="color: #27ae60; font-weight: bold;">$199</span> <span style="text-decoration: line-through; color: #e74c3c;">(Market: $800+)</span><br>• E-commerce Store: <span style="color: #27ae60; font-weight: bold;">$399</span><br><br>🎨 <strong>Graphic Design:</strong><br>• Logo Design: <span style="color: #27ae60; font-weight: bold;">$25</span> <span style="text-decoration: line-through; color: #e74c3c;">(Market: $100+)</span><br>• Complete Branding: <span style="color: #27ae60; font-weight: bold;">$99</span><br><br>🎬 <strong>Video Editing:</strong><br>• Social Media Video: <span style="color: #27ae60; font-weight: bold;">$49</span> <span style="text-decoration: line-through; color: #e74c3c;">(Market: $200+)</span><br>• Promotional Video: <span style="color: #27ae60; font-weight: bold;">$149</span><br><br>📱 Direct WhatsApp: <a href="https://wa.me/923473937379" target="_blank" style="color: #25d366; font-weight: bold;">+923473937379</a><br><br>Kya service chahiye?');
            } else {
                addBotMessage('🎉 Awesome! You\'re now a VIP client with exclusive access!<br><br>🔥 <strong>FLASH SALE PRICES (Just for you):</strong><br><br>💻 <strong>Web Development:</strong><br>• Basic Website: <span style="color: #27ae60; font-weight: bold;">$199</span> <span style="text-decoration: line-through; color: #e74c3c;">(Market: $800+)</span><br>• E-commerce Store: <span style="color: #27ae60; font-weight: bold;">$399</span><br><br>🎨 <strong>Graphic Design:</strong><br>• Logo Design: <span style="color: #27ae60; font-weight: bold;">$25</span> <span style="text-decoration: line-through; color: #e74c3c;">(Market: $100+)</span><br>• Complete Branding: <span style="color: #27ae60; font-weight: bold;">$99</span><br><br>🎬 <strong>Video Editing:</strong><br>• Social Media Video: <span style="color: #27ae60; font-weight: bold;">$49</span> <span style="text-decoration: line-through; color: #e74c3c;">(Market: $200+)</span><br>• Promotional Video: <span style="color: #27ae60; font-weight: bold;">$149</span><br><br>📱 Direct WhatsApp: <a href="https://wa.me/923473937379" target="_blank" style="color: #25d366; font-weight: bold;">+923473937379</a><br><br>What service do you need?');
            }
        } else if (!userFollowed) {
            if (chatLanguage === 'urdu') {
                addBotMessage('Pehle Instagram follow kariye bhai! 😅<br><br>📱 <a href="https://www.instagram.com/syed_hisham_official/" target="_blank" style="color: #667eea;">@syed_hisham_official</a><br><br>Follow karne ke baad "followed" type kariye!');
            } else {
                addBotMessage('Please follow my Instagram first! 😅<br><br>📱 <a href="https://www.instagram.com/syed_hisham_official/" target="_blank" style="color: #667eea;">@syed_hisham_official</a><br><br>Type "followed" when done!');
            }
        } else {
            // Enhanced responses with more details
            if (msg.includes('website') || msg.includes('web')) {
                if (chatLanguage === 'urdu') {
                    addBotMessage('🌐 <strong>Website - MEGA DISCOUNT!</strong><br><br>🔥 <strong style="color: #e74c3c;">Basic Website: Only $99!</strong><br><br>Main modern websites banata hun:<br>• Responsive design (mobile-friendly)<br>• React, Node.js, MongoDB<br>• E-commerce platforms<br>• SEO optimization<br><br>💰 <strong>My Price:</strong> <span style="color: #27ae60;">$199</span><br>💸 <strong>Market Price:</strong> <span style="text-decoration: line-through; color: #e74c3c;">$800+</span><br>🎉 <strong>You Save:</strong> 75% OFF<br>⚡ <strong>Delivery:</strong> 1-2 weeks<br><br>WhatsApp: <a href="https://wa.me/923473937379" target="_blank">+923473937379</a>');
                } else {
                    addBotMessage('🌐 <strong>Web Development Services</strong><br><br>I create modern websites with:<br>• Responsive design<br>• React, Node.js, MongoDB<br>• E-commerce platforms<br>• SEO optimization<br><br><strong>Starting Price:</strong> $500<br><strong>Delivery:</strong> 2-4 weeks<br><br>WhatsApp: <a href="https://wa.me/923473937379" target="_blank">+923473937379</a>');
                }
            } else if (msg.includes('design') || msg.includes('graphic')) {
                if (chatLanguage === 'urdu') {
                    addBotMessage('🎨 <strong>Logo Design - SUPER CHEAP!</strong><br><br>🔥 <strong style="color: #e74c3c;">Logo Design: Only $15!</strong><br><br>Professional designs:<br>• Logo design<br>• Social media graphics<br>• Marketing materials<br>• Brand identity<br><br>💰 <strong>My Rate:</strong> <span style="color: #27ae60;">$25</span><br>💸 <strong>Market Rate:</strong> <span style="text-decoration: line-through; color: #e74c3c;">$100+</span><br>🎉 <strong>Aap Save:</strong> 70% OFF<br>⚡ <strong>Fast:</strong> 1-3 days');
                } else {
                    addBotMessage('🎨 <strong>Logo Design - LOWEST PRICES!</strong><br><br>🔥 <strong style="color: #e74c3c;">Logo Design: Only $15!</strong><br><br>Professional designs:<br>• Logo design<br>• Social media graphics<br>• Marketing materials<br>• Brand identity<br><br>💰 <strong>My Price:</strong> <span style="color: #27ae60;">$25</span><br>💸 <strong>Market Price:</strong> <span style="text-decoration: line-through; color: #e74c3c;">$100+</span><br>🎉 <strong>You Save:</strong> 70% OFF<br>⚡ <strong>Express:</strong> 1-3 days');
                }
            } else if (msg.includes('video') || msg.includes('edit')) {
                if (chatLanguage === 'urdu') {
                    addBotMessage('🎬 <strong>Video Editing - ROCK BOTTOM!</strong><br><br>🔥 <strong style="color: #e74c3c;">Social Video: Only $29!</strong><br><br>Hollywood quality:<br>• Promotional videos<br>• Social media content<br>• Motion graphics<br>• Color correction<br><br>💰 <strong>My Rate:</strong> <span style="color: #27ae60;">$49</span><br>💸 <strong>Market Rate:</strong> <span style="text-decoration: line-through; color: #e74c3c;">$200+</span><br>🎉 <strong>Aap Save:</strong> 80% OFF<br>⚡ <strong>Quick:</strong> 2-5 days');
                } else {
                    addBotMessage('🎬 <strong>Video Editing - CHEAPEST!</strong><br><br>🔥 <strong style="color: #e74c3c;">Social Video: Only $29!</strong><br><br>Professional quality:<br>• Promotional videos<br>• Social media content<br>• Motion graphics<br>• Color correction<br><br>💰 <strong>My Price:</strong> <span style="color: #27ae60;">$49</span><br>💸 <strong>Others Charge:</strong> <span style="text-decoration: line-through; color: #e74c3c;">$200+</span><br>🎉 <strong>You Save:</strong> 80% OFF<br>⚡ <strong>Fast:</strong> 2-5 days');
                }
            } else if (msg.includes('price') || msg.includes('cost') || msg.includes('rate')) {
                if (chatLanguage === 'urdu') {
                    addBotMessage('💰 <strong>Pricing Information</strong><br><br><strong>Web Development:</strong> $500+<br><strong>Graphic Design:</strong> $50+<br><strong>Video Editing:</strong> $100+<br><br>Exact quote ke liye project details share kariye:<br>📱 <a href="https://wa.me/923473937379" target="_blank">WhatsApp</a><br>📧 syedhisham360@gmail.com');
                } else {
                    addBotMessage('💰 <strong>Pricing Structure</strong><br><br><strong>Web Development:</strong> $500+<br><strong>Graphic Design:</strong> $50+<br><strong>Video Editing:</strong> $100+<br><br>For exact quote, share project details:<br>📱 <a href="https://wa.me/923473937379" target="_blank">WhatsApp</a><br>📧 syedhisham360@gmail.com');
                }
            } else if (msg.includes('contact')) {
                addBotMessage('📞 <strong>Contact Information</strong><br><br>📧 Email: syedhisham360@gmail.com<br>📱 Phone: +923473937379<br>💬 WhatsApp: <a href="https://wa.me/923473937379" target="_blank">+923473937379</a><br><br><strong>Social Media:</strong><br>📸 <a href="https://www.instagram.com/syed_hisham_official/" target="_blank">Instagram</a><br>💼 <a href="https://pk.linkedin.com/in/syed-hisham-akhtar-a3038b311" target="_blank">LinkedIn</a>');
            } else {
                if (chatLanguage === 'urdu') {
                    addBotMessage('🤔 Samajh nahi aaya!<br><br>Aap ye puch sakte hain:<br>• "website" - web development<br>• "design" - graphic design<br>• "video" - video editing<br>• "price" - pricing info<br>• "contact" - contact details');
                } else {
                    addBotMessage('🤔 I didn\'t understand!<br><br>You can ask about:<br>• "website" - web development<br>• "design" - graphic design<br>• "video" - video editing<br>• "price" - pricing info<br>• "contact" - contact details');
                }
            }
        }
    }
}

// Pricing Calculator
function initializePricingCalculator() {
    const serviceSelect = document.getElementById('service-select');
    const complexitySelect = document.getElementById('complexity-select');
    const totalCost = document.getElementById('total-cost');

    function updatePrice() {
        const basePrice = parseFloat(serviceSelect.value);
        const multiplier = parseFloat(complexitySelect.value);
        const total = Math.round(basePrice * multiplier);
        totalCost.textContent = total;
    }

    if (serviceSelect && complexitySelect) {
        serviceSelect.addEventListener('change', updatePrice);
        complexitySelect.addEventListener('change', updatePrice);
    }
}

// Portfolio Filter
function initializePortfolioFilter() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const filter = btn.getAttribute('data-filter');
            
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            portfolioItems.forEach(item => {
                if (filter === 'all' || item.getAttribute('data-category') === filter) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
}

// FAQ Toggle
function initializeFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            faqItems.forEach(faq => faq.classList.remove('active'));
            
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
}

// Live Chat Widget
function initializeLiveChat() {
    const chatTrigger = document.getElementById('chat-trigger');
    const chatPopup = document.getElementById('chat-popup');
    const chatClose = document.getElementById('chat-close');

    if (chatTrigger && chatPopup) {
        chatTrigger.addEventListener('click', () => {
            chatPopup.classList.toggle('active');
        });

        if (chatClose) {
            chatClose.addEventListener('click', () => {
                chatPopup.classList.remove('active');
            });
        }
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    // Set initial body opacity
    document.body.style.opacity = '0';
    
    // Initialize all features
    console.log('Initializing hamburger menu...');
    initializeHamburgerMenu();
    initializePricingCalculator();
    initializePortfolioFilter();
    initializeFAQ();
    initializeLiveChat();
    
    // Initialize chatbot immediately
    initializeBasicChatbot();
    
    // Add hover effects to service cards
    document.querySelectorAll('.service-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
            this.style.boxShadow = '0 10px 25px rgba(0,0,0,0.15)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
        });
    });
    
    // Add hover effects to portfolio items
    document.querySelectorAll('.portfolio-item').forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
            this.style.boxShadow = '0 10px 25px rgba(0,0,0,0.15)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
        });
    });
});