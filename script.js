// Menu Mobile Toggle
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const menuList = document.querySelector('.menu-list');
    const floatingMenu = document.getElementById('floatingMenu');

    if (menuToggle && menuList) {
        menuToggle.addEventListener('click', function() {
            menuList.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });

        // Fechar menu ao clicar em um link
        const menuLinks = document.querySelectorAll('.menu-link, .submenu a');
        menuLinks.forEach(link => {
            link.addEventListener('click', function() {
                if (window.innerWidth <= 768) {
                    menuList.classList.remove('active');
                    menuToggle.classList.remove('active');
                }
            });
        });

        // Fechar menu ao clicar fora
        document.addEventListener('click', function(event) {
            if (window.innerWidth <= 768) {
                if (!floatingMenu.contains(event.target) && menuList.classList.contains('active')) {
                    menuList.classList.remove('active');
                    menuToggle.classList.remove('active');
                }
            }
        });
    }

    // Smooth scroll para âncoras
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const offsetTop = target.offsetTop - 80;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Efeito de scroll no menu e botão voltar ao topo
    const scrollToTopBtn = document.getElementById('scrollToTop');
    const heroBanner = document.querySelector('.hero-banner');
    
    let lastScroll = 0;
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (floatingMenu) {
            if (currentScroll > 100) {
                floatingMenu.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.15)';
            } else {
                floatingMenu.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
            }
        }
        
        // Mostrar botão voltar ao topo
        if (scrollToTopBtn) {
            if (heroBanner) {
                // Se existe banner, só mostra após passar dele
                const bannerHeight = heroBanner.offsetHeight;
                if (currentScroll > bannerHeight + 50) {
                    scrollToTopBtn.classList.add('visible');
                } else {
                    scrollToTopBtn.classList.remove('visible');
                }
            } else {
                // Se não existe banner, mostra após scroll mínimo
                if (currentScroll > 300) {
                    scrollToTopBtn.classList.add('visible');
                } else {
                    scrollToTopBtn.classList.remove('visible');
                }
            }
        }
        
        lastScroll = currentScroll;
    });
    
    // Botão voltar ao topo
    if (scrollToTopBtn) {
        scrollToTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Animação de entrada para elementos
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

    // Observar elementos para animação
    const animateElements = document.querySelectorAll('.vmv-card, .volunteer-card, .animal-card, .help-card, .blog-card, .contact-card, .benefit-card');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Função global para abrir modal (usada em animals-data.js)
function openAnimalModal(animalId) {
    // Esta função será definida em animals-data.js
    if (typeof window.openAnimalModalFromData === 'function') {
        window.openAnimalModalFromData(animalId);
    }
}

// Função global para trocar imagem no modal
function changeModalImage(imageSrc) {
    const mainImage = document.getElementById('modalMainImage');
    if (mainImage) {
        mainImage.src = imageSrc;
    }
    
    // Atualizar thumbnails ativas
    document.querySelectorAll('.thumbnail').forEach(thumb => {
        thumb.classList.remove('active');
        if (thumb.src === imageSrc || thumb.getAttribute('src') === imageSrc) {
            thumb.classList.add('active');
        }
    });
}

// Chatbot
document.addEventListener('DOMContentLoaded', function() {
    const chatbotToggle = document.getElementById('chatbotToggle');
    const chatbotContainer = document.getElementById('chatbotContainer');
    const chatbotClose = document.getElementById('chatbotClose');
    const chatbotMessages = document.getElementById('chatbotMessages');
    const quickReplies = document.querySelectorAll('.quick-reply-btn');
    
    // Ações para cada botão rápido
    const actions = {
        'adotar': {
            message: 'Quero Adotar',
            response: 'Ótimo! Vou te conectar com nossa equipe pelo WhatsApp.',
            action: () => {
                window.open('https://wa.me/5521999999999?text=Olá!%20Gostaria%20de%20adotar%20um%20animal.', '_blank');
            }
        },
        'adotar-gato': {
            message: 'Quero Adotar Gato',
            response: 'Perfeito! Vou te conectar com nossa equipe para adotar um gatinho.',
            action: () => {
                window.open('https://wa.me/5521999999999?text=Olá!%20Gostaria%20de%20adotar%20um%20gato.', '_blank');
            }
        },
        'adotar-cachorro': {
            message: 'Quero Adotar Cachorro',
            response: 'Excelente! Vou te conectar com nossa equipe para adotar um cachorrinho.',
            action: () => {
                window.open('https://wa.me/5521999999999?text=Olá!%20Gostaria%20de%20adotar%20um%20cachorro.', '_blank');
            }
        },
        'sobre-ong': {
            message: 'Sobre a ONG',
            response: 'Vou te levar para a página sobre a ONG!',
            action: () => {
                window.location.href = 'sobre-ong.html';
            }
        },
        'adote': {
            message: 'Adote',
            response: 'Vou te levar para a página de adoção!',
            action: () => {
                window.location.href = 'adote.html';
            }
        }
    };
    
    if (chatbotToggle && chatbotContainer) {
        chatbotToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            chatbotContainer.classList.toggle('active');
        });
    }
    
    if (chatbotClose) {
        chatbotClose.addEventListener('click', function() {
            chatbotContainer.classList.remove('active');
        });
    }
    
    // Fechar chatbot ao clicar fora
    document.addEventListener('click', function(e) {
        if (chatbotContainer && chatbotContainer.classList.contains('active')) {
            if (!chatbotContainer.contains(e.target) && !chatbotToggle.contains(e.target)) {
                chatbotContainer.classList.remove('active');
            }
        }
    });
    
    function addMessage(text, isUser) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `chatbot-message ${isUser ? 'user' : 'bot'}`;
        messageDiv.innerHTML = `<p>${text}</p>`;
        chatbotMessages.appendChild(messageDiv);
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }
    
    // Adicionar eventos aos botões rápidos
    quickReplies.forEach(btn => {
        btn.addEventListener('click', function() {
            const action = this.getAttribute('data-action');
            if (actions[action]) {
                const actionData = actions[action];
                addMessage(actionData.message, true);
                
                setTimeout(() => {
                    addMessage(actionData.response, false);
                    // Executar ação após um pequeno delay
                    setTimeout(() => {
                        actionData.action();
                    }, 500);
                }, 500);
            }
        });
    });
});

