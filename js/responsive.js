// jQuery Document Ready - Responsive Functionality
$(document).ready(function() {
    
    // Mobile Menu Toggle
    $('.hamburger').click(function(e) {
        e.stopPropagation();
        $(this).toggleClass('active');
        $('.nav-menu').toggleClass('active');
        console.log('jQuery hamburger clicked');
    });
    
    // Close menu when clicking outside
    $(document).click(function(e) {
        if (!$(e.target).closest('.hamburger, .nav-menu').length) {
            $('.hamburger').removeClass('active');
            $('.nav-menu').removeClass('active');
        }
    });
    
    // Smooth scrolling for navigation links
    $('a[href^="#"]').click(function(e) {
        e.preventDefault();
        const target = $(this.getAttribute('href'));
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top - 80
            }, 800);
        }
        // Close mobile menu after click
        $('.nav-menu').removeClass('active');
        $('.hamburger').removeClass('active');
    });
    
    // Responsive Navigation
    $(window).resize(function() {
        if ($(window).width() > 768) {
            $('.nav-menu').removeClass('active');
            $('.hamburger').removeClass('active');
        }
    });
    
    // Portfolio Filter with jQuery
    $('.filter-btn').click(function() {
        $('.filter-btn').removeClass('active');
        $(this).addClass('active');
        
        const filter = $(this).data('filter');
        
        if (filter === 'all') {
            $('.portfolio-item').fadeIn(500);
        } else {
            $('.portfolio-item').hide();
            $(`[data-category="${filter}"]`).fadeIn(500);
        }
    });
    
    // FAQ Toggle
    $('.faq-question').click(function() {
        const faqItem = $(this).parent();
        faqItem.toggleClass('active');
        faqItem.find('.faq-answer').slideToggle();
    });
    
    // Pricing Calculator
    $('#service-select, #complexity-select').change(function() {
        const servicePrice = parseFloat($('#service-select').val());
        const complexity = parseFloat($('#complexity-select').val());
        const total = Math.round(servicePrice * complexity);
        $('#total-cost').text(total);
    });
    
    // Live Chat Widget
    $('#chat-trigger').click(function() {
        $('#chat-popup').toggleClass('active');
    });
    
    $('#chat-close').click(function() {
        $('#chat-popup').removeClass('active');
    });
    
    // Enhanced Animations on Scroll
    $(window).scroll(function() {
        $('.service-card, .portfolio-item').each(function() {
            const elementTop = $(this).offset().top;
            const windowBottom = $(window).scrollTop() + $(window).height();
            
            if (elementTop < windowBottom - 100) {
                $(this).addClass('animate-in');
            }
        });
    });
    
    // Chatbot Toggle with jQuery
    $('#chatbot-toggle').click(function() {
        $('#chatbot-window').toggleClass('active');
        console.log('Chatbot toggled with jQuery');
    });
    
    $('#chatbot-close').click(function() {
        $('#chatbot-window').removeClass('active');
    });
    
    // Chatbot send message
    $('#chatbot-send').click(function() {
        sendChatMessage();
    });
    
    $('#chatbot-input-field').keypress(function(e) {
        if (e.which === 13) {
            sendChatMessage();
        }
    });
    
    function sendChatMessage() {
        const message = $('#chatbot-input-field').val().trim();
        if (message) {
            // Add user message
            $('#chatbot-messages').append(`
                <div class="message user-message">
                    <div class="message-content">${message}</div>
                </div>
            `);
            
            $('#chatbot-input-field').val('');
            
            // Scroll to bottom
            $('#chatbot-messages').scrollTop($('#chatbot-messages')[0].scrollHeight);
            
            // Bot response
            setTimeout(function() {
                let response = getBotResponse(message.toLowerCase());
                $('#chatbot-messages').append(`
                    <div class="message bot-message">
                        <div class="message-content">${response}</div>
                    </div>
                `);
                $('#chatbot-messages').scrollTop($('#chatbot-messages')[0].scrollHeight);
            }, 500);
        }
    }
    
    function getBotResponse(msg) {
        if (msg === 'urdu') {
            return 'Bilkul! Ab main aap se Roman Urdu mein baat karunga! 😊<br><br>Pehle Instagram follow kariye: <a href="https://www.instagram.com/syed_hisham_official/" target="_blank" style="color: #667eea;">@syed_hisham_official</a><br><br>Follow karne ke baad "followed" type kariye!';
        } else if (msg === 'followed' || msg.includes('follow')) {
            return '🎉 Awesome! You\'re now a VIP client!<br><br>🔥 <strong>EXCLUSIVE PRICES:</strong><br>• Website: <span style="color: #27ae60;">$199</span><br>• Logo: <span style="color: #27ae60;">$25</span><br>• Video: <span style="color: #27ae60;">$49</span><br><br>📱 WhatsApp: <a href="https://wa.me/923473937379" target="_blank">+923473937379</a>';
        } else if (msg.includes('website') || msg.includes('web')) {
            return '🌐 <strong>Website Development</strong><br><br>• Responsive Design<br>• Modern Technologies<br>• SEO Optimized<br><br><strong>Price:</strong> $199<br><strong>Delivery:</strong> 1-2 weeks<br><br>📱 <a href="https://wa.me/923473937379" target="_blank">WhatsApp</a>';
        } else if (msg.includes('design') || msg.includes('logo')) {
            return '🎨 <strong>Logo Design</strong><br><br>• Professional Design<br>• Multiple Concepts<br>• Unlimited Revisions<br><br><strong>Price:</strong> $25<br><strong>Delivery:</strong> 1-3 days<br><br>📱 <a href="https://wa.me/923473937379" target="_blank">WhatsApp</a>';
        } else if (msg.includes('video')) {
            return '🎬 <strong>Video Editing</strong><br><br>• Professional Quality<br>• Motion Graphics<br>• Color Correction<br><br><strong>Price:</strong> $49<br><strong>Delivery:</strong> 2-5 days<br><br>📱 <a href="https://wa.me/923473937379" target="_blank">WhatsApp</a>';
        } else if (msg.includes('price') || msg.includes('cost')) {
            return '💰 <strong>Pricing</strong><br><br>• Website: $199<br>• Logo: $25<br>• Video: $49<br><br>📱 <a href="https://wa.me/923473937379" target="_blank">WhatsApp for details</a>';
        } else {
            return '🤔 Ask me about:<br>• "website" - web development<br>• "logo" - design services<br>• "video" - video editing<br>• "price" - pricing info<br><br>Type "urdu" for Roman Urdu!';
        }
    }
    
    // Initialize pricing calculator
    $('#service-select, #complexity-select').change(function() {
        const servicePrice = parseFloat($('#service-select').val());
        const complexity = parseFloat($('#complexity-select').val());
        const total = Math.round(servicePrice * complexity);
        $('#total-cost').text(total);
    });
    
});

// CSS Animation Classes
const style = document.createElement('style');
style.textContent = `
    .animate-in {
        animation: slideInUp 0.6s ease-out;
    }
    
    @keyframes slideInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);