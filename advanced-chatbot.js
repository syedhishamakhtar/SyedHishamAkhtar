// Advanced AI-powered chatbot for Syed Hisham Akhtar's website
class AdvancedChatbot {
    constructor() {
        this.userFollowed = false;
        this.chatLanguage = 'english';
        this.conversationHistory = [];
        this.userPreferences = {};
        this.currentContext = null;
        
        // Load knowledge base
        this.knowledge = chatbotKnowledge;
        this.patterns = responsePatterns;
        
        this.initializeElements();
        this.setupEventListeners();
    }

    initializeElements() {
        this.chatbotToggle = document.getElementById('chatbot-toggle');
        this.chatbotWindow = document.getElementById('chatbot-window');
        this.chatbotClose = document.getElementById('chatbot-close');
        this.chatbotInput = document.getElementById('chatbot-input-field');
        this.chatbotSend = document.getElementById('chatbot-send');
        this.chatbotMessages = document.getElementById('chatbot-messages');
    }

    setupEventListeners() {
        this.chatbotToggle.addEventListener('click', () => this.toggleChatbot());
        this.chatbotClose.addEventListener('click', () => this.closeChatbot());
        this.chatbotSend.addEventListener('click', () => this.sendMessage());
        this.chatbotInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.sendMessage();
        });
    }

    toggleChatbot() {
        this.chatbotWindow.classList.toggle('active');
        if (this.chatbotWindow.classList.contains('active')) {
            this.chatbotInput.focus();
        }
    }

    closeChatbot() {
        this.chatbotWindow.classList.remove('active');
    }

    sendMessage() {
        const message = this.chatbotInput.value.trim();
        if (message) {
            this.addUserMessage(message);
            this.chatbotInput.value = '';
            this.conversationHistory.push({ type: 'user', message, timestamp: Date.now() });
            
            setTimeout(() => {
                this.processUserMessage(message);
            }, 500);
        }
    }

    addUserMessage(message) {
        const messageDiv = document.createElement('div');
        messageDiv.className = 'message user-message';
        messageDiv.innerHTML = `<div class="message-content">${this.escapeHtml(message)}</div>`;
        this.chatbotMessages.appendChild(messageDiv);
        this.scrollToBottom();
    }

    addBotMessage(message) {
        const messageDiv = document.createElement('div');
        messageDiv.className = 'message bot-message';
        messageDiv.innerHTML = `<div class="message-content">${message}</div>`;
        this.chatbotMessages.appendChild(messageDiv);
        this.scrollToBottom();
        
        this.conversationHistory.push({ type: 'bot', message, timestamp: Date.now() });
    }

    scrollToBottom() {
        this.chatbotMessages.scrollTop = this.chatbotMessages.scrollHeight;
    }

    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    processUserMessage(message) {
        const msg = message.toLowerCase().trim();
        
        // Handle language switching
        if (msg === 'urdu') {
            this.chatLanguage = 'urdu';
            this.addBotMessage(this.knowledge.responses.urdu.greeting);
            return;
        }
        
        if (msg === 'english') {
            this.chatLanguage = 'english';
            this.addBotMessage(this.knowledge.responses.english.greeting);
            return;
        }

        // Handle follow confirmation
        if (msg === 'followed') {
            this.userFollowed = true;
            const welcomeMsg = this.chatLanguage === 'urdu' 
                ? this.knowledge.responses.urdu.welcomeBack
                : this.knowledge.responses.english.welcomeBack;
            this.addBotMessage(welcomeMsg);
            return;
        }

        // Check if user has followed
        if (!this.userFollowed) {
            const reminderMsg = this.chatLanguage === 'urdu'
                ? this.knowledge.responses.urdu.followReminder
                : this.knowledge.responses.english.followReminder;
            this.addBotMessage(reminderMsg);
            return;
        }

        // Process the message and generate response
        const response = this.generateResponse(msg);
        this.addBotMessage(response);
    }

    generateResponse(message) {
        // Check for exact FAQ matches first
        const faqResponse = this.checkFAQ(message);
        if (faqResponse) return faqResponse;

        // Pattern matching for different categories
        const category = this.categorizeMessage(message);
        
        switch (category) {
            case 'webDevelopment':
                return this.getWebDevelopmentResponse(message);
            case 'graphicDesign':
                return this.getGraphicDesignResponse(message);
            case 'videoEditing':
                return this.getVideoEditingResponse(message);
            case 'pricing':
                return this.getPricingResponse(message);
            case 'contact':
                return this.getContactResponse();
            case 'portfolio':
                return this.getPortfolioResponse();
            case 'technologies':
                return this.getTechnologiesResponse();
            case 'about':
                return this.getAboutResponse();
            default:
                return this.getDefaultResponse();
        }
    }

    checkFAQ(message) {
        const faq = this.knowledge.faq;
        for (const question in faq) {
            if (message.includes(question) || this.calculateSimilarity(message, question) > 0.6) {
                return this.translateResponse(faq[question]);
            }
        }
        return null;
    }

    categorizeMessage(message) {
        let bestMatch = null;
        let highestScore = 0;

        for (const category in this.patterns) {
            const patterns = this.patterns[category];
            let score = 0;
            
            patterns.forEach(pattern => {
                if (message.includes(pattern)) {
                    score += pattern.length / message.length;
                }
            });

            if (score > highestScore) {
                highestScore = score;
                bestMatch = category;
            }
        }

        return highestScore > 0.1 ? bestMatch : null;
    }

    getWebDevelopmentResponse(message) {
        const service = this.knowledge.services.webDevelopment;
        
        if (this.chatLanguage === 'urdu') {
            return `🌐 <strong>Web Development Services</strong><br><br>
                Main modern websites aur web applications banata hun:<br><br>
                <strong>Features:</strong><br>
                • Responsive design (mobile-friendly)<br>
                • Modern frameworks (React, Vue.js)<br>
                • Database integration<br>
                • E-commerce platforms<br>
                • SEO optimization<br><br>
                <strong>Technologies:</strong> ${service.technologies.join(', ')}<br>
                <strong>Starting Price:</strong> ${service.startingPrice}<br>
                <strong>Delivery:</strong> ${service.deliveryTime}<br><br>
                Aur detail ke liye WhatsApp kariye: <a href="${this.knowledge.social.whatsapp}" target="_blank">+923473937379</a>`;
        } else {
            return `🌐 <strong>Web Development Services</strong><br><br>
                I create modern websites and web applications with:<br><br>
                <strong>Features:</strong><br>
                • ${service.features.slice(0, 5).join('<br>• ')}<br><br>
                <strong>Technologies:</strong> ${service.technologies.join(', ')}<br>
                <strong>Starting Price:</strong> ${service.startingPrice}<br>
                <strong>Delivery Time:</strong> ${service.deliveryTime}<br><br>
                Contact me on WhatsApp for detailed discussion: <a href="${this.knowledge.social.whatsapp}" target="_blank">+923473937379</a>`;
        }
    }

    getGraphicDesignResponse(message) {
        const service = this.knowledge.services.graphicDesign;
        
        if (this.chatLanguage === 'urdu') {
            return `🎨 <strong>Graphic Design Services</strong><br><br>
                Visual branding aur design solutions:<br><br>
                <strong>Services:</strong><br>
                • Logo design aur branding<br>
                • Social media graphics<br>
                • Marketing materials<br>
                • Business cards<br>
                • Brochures aur flyers<br><br>
                <strong>Tools:</strong> ${service.tools.join(', ')}<br>
                <strong>Starting Price:</strong> ${service.startingPrice}<br>
                <strong>Delivery:</strong> ${service.deliveryTime}<br><br>
                Portfolio dekhne ke liye: <a href="#portfolio">Portfolio Section</a>`;
        } else {
            return `🎨 <strong>Graphic Design Services</strong><br><br>
                Professional visual solutions for your brand:<br><br>
                <strong>Services Include:</strong><br>
                • ${service.features.slice(0, 5).join('<br>• ')}<br><br>
                <strong>Tools Used:</strong> ${service.tools.join(', ')}<br>
                <strong>Starting Price:</strong> ${service.startingPrice}<br>
                <strong>Delivery Time:</strong> ${service.deliveryTime}<br><br>
                View my work: <a href="#portfolio">Portfolio Section</a>`;
        }
    }

    getVideoEditingResponse(message) {
        const service = this.knowledge.services.videoEditing;
        
        if (this.chatLanguage === 'urdu') {
            return `🎬 <strong>Video Editing Services</strong><br><br>
                Professional video production aur editing:<br><br>
                <strong>Services:</strong><br>
                • Promotional videos<br>
                • Social media content<br>
                • YouTube videos<br>
                • Motion graphics<br>
                • Color correction<br><br>
                <strong>Software:</strong> ${service.tools.join(', ')}<br>
                <strong>Starting Price:</strong> ${service.startingPrice}<br>
                <strong>Delivery:</strong> ${service.deliveryTime}<br><br>
                Sample videos ke liye contact kariye!`;
        } else {
            return `🎬 <strong>Video Editing Services</strong><br><br>
                Professional video production and editing:<br><br>
                <strong>Services Include:</strong><br>
                • ${service.features.slice(0, 5).join('<br>• ')}<br><br>
                <strong>Software Used:</strong> ${service.tools.join(', ')}<br>
                <strong>Starting Price:</strong> ${service.startingPrice}<br>
                <strong>Delivery Time:</strong> ${service.deliveryTime}<br><br>
                Contact me for sample videos and portfolio!`;
        }
    }

    getPricingResponse(message) {
        if (this.chatLanguage === 'urdu') {
            return `💰 <strong>Pricing Information</strong><br><br>
                <strong>Web Development:</strong> $500 se start<br>
                <strong>Graphic Design:</strong> $50 se start<br>
                <strong>Video Editing:</strong> $100 se start<br><br>
                <em>Rates project complexity ke hisab se vary karte hain</em><br><br>
                Exact quote ke liye project details share kariye:<br>
                📱 WhatsApp: <a href="${this.knowledge.social.whatsapp}" target="_blank">+923473937379</a><br>
                📧 Email: ${this.knowledge.personal.email}`;
        } else {
            return `💰 <strong>Pricing Structure</strong><br><br>
                <strong>Web Development:</strong> Starting from $500<br>
                <strong>Graphic Design:</strong> Starting from $50<br>
                <strong>Video Editing:</strong> Starting from $100<br><br>
                <em>Prices vary based on project complexity and requirements</em><br><br>
                For exact quote, share your project details:<br>
                📱 WhatsApp: <a href="${this.knowledge.social.whatsapp}" target="_blank">+923473937379</a><br>
                📧 Email: ${this.knowledge.personal.email}`;
        }
    }

    getContactResponse() {
        const personal = this.knowledge.personal;
        const social = this.knowledge.social;
        
        if (this.chatLanguage === 'urdu') {
            return `📞 <strong>Contact Information</strong><br><br>
                <strong>Name:</strong> ${personal.name}<br>
                <strong>Location:</strong> ${personal.location}<br><br>
                <strong>Contact Methods:</strong><br>
                📧 Email: <a href="mailto:${personal.email}">${personal.email}</a><br>
                📱 Phone/WhatsApp: <a href="${social.whatsapp}" target="_blank">${personal.phone}</a><br><br>
                <strong>Social Media:</strong><br>
                📸 Instagram: <a href="${social.instagram}" target="_blank">@syed_hisham_official</a><br>
                💼 LinkedIn: <a href="${social.linkedin}" target="_blank">Syed Hisham Akhtar</a><br>
                📘 Facebook: <a href="${social.facebook}" target="_blank">Facebook Profile</a><br><br>
                <em>Main usually 2-4 hours mein reply karta hun!</em>`;
        } else {
            return `📞 <strong>Contact Information</strong><br><br>
                <strong>Name:</strong> ${personal.name}<br>
                <strong>Location:</strong> ${personal.location}<br><br>
                <strong>Get in Touch:</strong><br>
                📧 Email: <a href="mailto:${personal.email}">${personal.email}</a><br>
                📱 Phone/WhatsApp: <a href="${social.whatsapp}" target="_blank">${personal.phone}</a><br><br>
                <strong>Social Media:</strong><br>
                📸 Instagram: <a href="${social.instagram}" target="_blank">@syed_hisham_official</a><br>
                💼 LinkedIn: <a href="${social.linkedin}" target="_blank">Syed Hisham Akhtar</a><br>
                📘 Facebook: <a href="${social.facebook}" target="_blank">Facebook Profile</a><br><br>
                <em>I typically respond within 2-4 hours!</em>`;
        }
    }

    getPortfolioResponse() {
        const projects = this.knowledge.portfolio;
        
        if (this.chatLanguage === 'urdu') {
            let response = `🎯 <strong>Recent Projects</strong><br><br>`;
            projects.forEach((project, index) => {
                response += `<strong>${index + 1}. ${project.title}</strong><br>
                    ${project.description}<br>
                    <em>Tech: ${project.technologies.join(', ')}</em><br><br>`;
            });
            response += `Complete portfolio dekhne ke liye website ka <a href="#portfolio">Portfolio Section</a> visit kariye!`;
            return response;
        } else {
            let response = `🎯 <strong>Featured Projects</strong><br><br>`;
            projects.forEach((project, index) => {
                response += `<strong>${index + 1}. ${project.title}</strong><br>
                    ${project.description}<br>
                    <em>Technologies: ${project.technologies.join(', ')}</em><br><br>`;
            });
            response += `View complete portfolio in the <a href="#portfolio">Portfolio Section</a> of this website!`;
            return response;
        }
    }

    getTechnologiesResponse() {
        const webTech = this.knowledge.services.webDevelopment.technologies;
        const designTools = this.knowledge.services.graphicDesign.tools;
        const videoTools = this.knowledge.services.videoEditing.tools;
        
        if (this.chatLanguage === 'urdu') {
            return `⚡ <strong>Technologies & Tools</strong><br><br>
                <strong>Web Development:</strong><br>
                ${webTech.join(' • ')}<br><br>
                <strong>Graphic Design:</strong><br>
                ${designTools.join(' • ')}<br><br>
                <strong>Video Editing:</strong><br>
                ${videoTools.join(' • ')}<br><br>
                <em>Main hamesha latest technologies use karta hun!</em>`;
        } else {
            return `⚡ <strong>Technologies & Tools</strong><br><br>
                <strong>Web Development:</strong><br>
                ${webTech.join(' • ')}<br><br>
                <strong>Graphic Design:</strong><br>
                ${designTools.join(' • ')}<br><br>
                <strong>Video Editing:</strong><br>
                ${videoTools.join(' • ')}<br><br>
                <em>I always stay updated with the latest technologies!</em>`;
        }
    }

    getAboutResponse() {
        const personal = this.knowledge.personal;
        
        if (this.chatLanguage === 'urdu') {
            return `👨‍💻 <strong>About ${personal.name}</strong><br><br>
                Main ek passionate digital creator hun jo specializes karta hai:<br><br>
                <strong>Expertise:</strong><br>
                • ${personal.specialties.join('<br>• ')}<br><br>
                <strong>Experience:</strong> ${personal.experience} professional experience<br>
                <strong>Location:</strong> ${personal.location}<br><br>
                <strong>Mission:</strong> Complex ideas ko simple, beautiful solutions mein transform karna jo results drive karte hain.<br><br>
                Mere passion hai innovative technology aur creative storytelling ke through businesses aur individuals ki digital presence establish karna!`;
        } else {
            return `👨‍💻 <strong>About ${personal.name}</strong><br><br>
                I'm a versatile digital creator specializing in:<br><br>
                <strong>Expertise:</strong><br>
                • ${personal.specialties.join('<br>• ')}<br><br>
                <strong>Experience:</strong> ${personal.experience} of professional experience<br>
                <strong>Location:</strong> ${personal.location}<br><br>
                <strong>Mission:</strong> Transforming complex ideas into simple, beautiful solutions that drive results.<br><br>
                My passion lies in helping businesses and individuals establish their digital presence through innovative technology and creative storytelling!`;
        }
    }

    getDefaultResponse() {
        const defaultMsg = this.chatLanguage === 'urdu'
            ? this.knowledge.responses.urdu.defaultResponse
            : this.knowledge.responses.english.defaultResponse;
        return defaultMsg;
    }

    translateResponse(response) {
        // Simple translation logic - in a real app, you'd use a translation API
        return response;
    }

    calculateSimilarity(str1, str2) {
        const longer = str1.length > str2.length ? str1 : str2;
        const shorter = str1.length > str2.length ? str2 : str1;
        
        if (longer.length === 0) return 1.0;
        
        const editDistance = this.levenshteinDistance(longer, shorter);
        return (longer.length - editDistance) / longer.length;
    }

    levenshteinDistance(str1, str2) {
        const matrix = [];
        
        for (let i = 0; i <= str2.length; i++) {
            matrix[i] = [i];
        }
        
        for (let j = 0; j <= str1.length; j++) {
            matrix[0][j] = j;
        }
        
        for (let i = 1; i <= str2.length; i++) {
            for (let j = 1; j <= str1.length; j++) {
                if (str2.charAt(i - 1) === str1.charAt(j - 1)) {
                    matrix[i][j] = matrix[i - 1][j - 1];
                } else {
                    matrix[i][j] = Math.min(
                        matrix[i - 1][j - 1] + 1,
                        matrix[i][j - 1] + 1,
                        matrix[i - 1][j] + 1
                    );
                }
            }
        }
        
        return matrix[str2.length][str1.length];
    }
}

// Initialize the advanced chatbot when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Wait for knowledge base to load
    setTimeout(() => {
        if (typeof chatbotKnowledge !== 'undefined' && typeof responsePatterns !== 'undefined') {
            window.advancedChatbot = new AdvancedChatbot();
        }
    }, 100);
});