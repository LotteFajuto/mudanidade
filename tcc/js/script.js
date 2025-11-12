// ==========================================
// MUDA.NIDADE - JavaScript Principal
// ==========================================

// Função para mostrar alertas
function showAlert(message) {
    alert(message);
}

// Navegação para perfil
function goToProfile() {
    window.location.href = 'perfil.html';
}

// Buscar projetos
function searchProjects() {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        const searchTerm = searchInput.value;
        if (searchTerm.trim() !== '') {
            alert(`Buscando por: ${searchTerm}`);
            // Aqui você implementaria a lógica de busca real
        } else {
            alert('Digite algo para buscar!');
        }
    }
}

// Adicionar listener para Enter na busca
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                searchProjects();
            }
        });
    }
});

// Curtir post
function likePost(button) {
    const isActive = button.classList.toggle('is-active');
    button.setAttribute('aria-pressed', isActive);
    alert(isActive ? 'Post curtido!' : 'Curtida removida!');
}

// Completar missão
function completeMission(checkbox) {
    if (checkbox.checked) {
        const missionText = checkbox.nextElementSibling.textContent;
        alert(`Parabéns! Você completou: ${missionText}\n+5 pontos!`);
        
        // Adicionar animação
        const missionItem = checkbox.closest('.mission-item');
        if (missionItem) {
            missionItem.style.backgroundColor = '#d4edda';
            setTimeout(() => {
                missionItem.style.opacity = '0.6';
            }, 500);
        }
    }
}

// Mudar aba de destaques
function changeTab(tabName) {
    // Remover classe active de todos os botões
    const tabs = document.querySelectorAll('.tab-btn');
    tabs.forEach(tab => tab.classList.remove('active'));
    
    // Adicionar classe active ao botão clicado
    event.target.classList.add('active');
    
    // Aqui você implementaria a lógica para carregar conteúdo diferente
    alert(`Carregando aba: ${tabName.toUpperCase()}`);
}

// Filtrar projetos
function filterProjects(filter) {
    // Remover classe active de todos os botões
    const tabs = document.querySelectorAll('.tab-btn');
    tabs.forEach(tab => tab.classList.remove('active'));
    
    // Adicionar classe active ao botão clicado
    event.target.classList.add('active');
    
    alert(`Filtrando por: ${filter.toUpperCase()}`);
    
    // Aqui você implementaria a lógica de filtro real
    // Por exemplo, mostrar/ocultar cards de projetos
}

// Buscar por tag
function searchByTag(tag) {
    alert(`Buscando projetos com a tag: ${tag}`);
    // Aqui você implementaria a lógica de busca por tag
}

// Filtrar tags na pesquisa
function filterTags() {
    const searchInput = document.getElementById('tagSearchInput');
    const tagsContainer = document.getElementById('tagsContainer');
    
    if (!searchInput || !tagsContainer) return;
    
    const searchTerm = searchInput.value.toLowerCase().trim();
    const tags = tagsContainer.querySelectorAll('.tag');
    
    tags.forEach(tag => {
        const tagText = tag.textContent.toLowerCase();
        // Limpa caracteres especiais para comparar apenas o texto
        const cleanTagText = tagText.replace(/[^\wÀ-ÿ\s]/g, '').trim();
        
        if (cleanTagText.includes(searchTerm) || searchTerm === '') {
            tag.style.display = 'inline-block';
        } else {
            tag.style.display = 'none';
        }
    });
}

// Adicionar listener para Enter e limpar na pesquisa de tags
document.addEventListener('DOMContentLoaded', function() {
    const tagSearchInput = document.getElementById('tagSearchInput');
    if (tagSearchInput) {
        tagSearchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                filterTags();
            }
        });
        
        // Filtrar enquanto digita
        tagSearchInput.addEventListener('input', function() {
            filterTags();
        });
        
        // Limpar filtro quando o campo for limpo
        tagSearchInput.addEventListener('focus', function() {
            if (this.value === '') {
                filterTags(); // Mostra todas as tags novamente
            }
        });
    }
});

// Animação de scroll suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href !== '#entrar') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }
    });
});

// Adicionar classe de animação aos elementos quando ficam visíveis
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

// Observar elementos que devem animar
document.addEventListener('DOMContentLoaded', function() {
    const animateElements = document.querySelectorAll('.project-post, .project-card');
    animateElements.forEach(element => {
        observer.observe(element);
    });
});

// Contador de caracteres para textarea
const postContent = document.getElementById('postContent');
if (postContent) {
    postContent.addEventListener('input', function() {
        const maxLength = 500;
        const currentLength = this.value.length;
        
        if (currentLength > maxLength) {
            this.value = this.value.substring(0, maxLength);
            alert('Limite de caracteres atingido!');
        }
    });
}

// Função para criar novo post
function createPost() {
    const postContent = document.getElementById('postContent');
    if (postContent && postContent.value.trim() !== '') {
        alert('Post criado com sucesso!');
        postContent.value = '';
        // Aqui você implementaria a lógica para adicionar o post à página
    } else {
        alert('Escreva algo antes de postar!');
    }
}

// Simular carregamento de mais projetos (scroll infinito)
let projectsLoaded = 6;
function loadMoreProjects() {
    const projectsGrid = document.getElementById('projectsGrid');
    if (projectsGrid) {
        const scrollPosition = window.innerHeight + window.scrollY;
        const pageHeight = document.documentElement.scrollHeight;
        
        if (scrollPosition >= pageHeight - 100) {
            // Carregar mais projetos
            projectsLoaded += 3;
            console.log(`Carregando mais projetos... Total: ${projectsLoaded}`);
            // Aqui você implementaria a lógica para adicionar mais cards
        }
    }
}

// Adicionar listener para scroll infinito
window.addEventListener('scroll', loadMoreProjects);

// Função para toggle de favorito
function toggleFavorite(element) {
    const heartIcon = element.querySelector('button');
    if (heartIcon) {
        const isActive = heartIcon.classList.toggle('is-active');
        heartIcon.setAttribute('aria-pressed', isActive);
        alert(isActive ? 'Adicionado aos favoritos!' : 'Removido dos favoritos!');
    }
}

// Salvar preferências do usuário no localStorage
function saveUserPreference(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

function getUserPreference(key) {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
}

// Exemplo: salvar filtros favoritos
function saveFavoriteFilter(filter) {
    const favorites = getUserPreference('favoriteFilters') || [];
    if (!favorites.includes(filter)) {
        favorites.push(filter);
        saveUserPreference('favoriteFilters', favorites);
        alert(`Filtro "${filter}" salvo nos favoritos!`);
    }
}

// Dark mode toggle (exemplo adicional)
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    saveUserPreference('darkMode', isDarkMode);
    alert(isDarkMode ? 'Modo escuro ativado!' : 'Modo claro ativado!');
}

// Carregar preferências ao iniciar
document.addEventListener('DOMContentLoaded', function() {
    const darkModePreference = getUserPreference('darkMode');
    if (darkModePreference) {
        document.body.classList.add('dark-mode');
    }
});

// Validação de formulários (se houver)
function validateForm(formId) {
    const form = document.getElementById(formId);
    if (form) {
        const inputs = form.querySelectorAll('input[required], textarea[required]');
        let isValid = true;
        
        inputs.forEach(input => {
            if (input.value.trim() === '') {
                isValid = false;
                input.style.borderColor = 'red';
            } else {
                input.style.borderColor = '';
            }
        });
        
        if (!isValid) {
            alert('Por favor, preencha todos os campos obrigatórios!');
        }
        
        return isValid;
    }
    return false;
}

// Compartilhar nas redes sociais
function shareOnSocialMedia(platform, url, title) {
    const shareUrls = {
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
        twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
        linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
        whatsapp: `https://wa.me/?text=${encodeURIComponent(title + ' ' + url)}`
    };
    
    if (shareUrls[platform]) {
        window.open(shareUrls[platform], '_blank', 'width=600,height=400');
    } else {
        alert('Plataforma não suportada!');
    }
}

// Copiar link para clipboard
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert('Link copiado para a área de transferência!');
    }).catch(err => {
        console.error('Erro ao copiar:', err);
        alert('Erro ao copiar link!');
    });
}

// Sistema de notificações simples
let notifications = [];

function addNotification(message, type = 'info') {
    const notification = {
        id: Date.now(),
        message: message,
        type: type,
        timestamp: new Date()
    };
    
    notifications.push(notification);
    showNotification(notification);
}

function showNotification(notification) {
    // Criar elemento de notificação
    const notifDiv = document.createElement('div');
    notifDiv.className = `notification ${notification.type}`;
    notifDiv.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background-color: ${notification.type === 'success' ? '#4CAF50' : '#ff8c42'};
        color: white;
        padding: 15px 20px;
        border-radius: 10px;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        z-index: 1000;
        animation: slideIn 0.3s ease-out;
    `;
    notifDiv.textContent = notification.message;
    
    document.body.appendChild(notifDiv);
    
    // Remover após 3 segundos
    setTimeout(() => {
        notifDiv.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => {
            document.body.removeChild(notifDiv);
        }, 300);
    }, 3000);
}

// Adicionar estilos de animação para notificações
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Log de boas-vindas
console.log('%cBem-vindo ao Muda.nidade!', 'color: #ff8c42; font-size: 20px; font-weight: bold;');
console.log('%cPlataforma desenvolvida para conectar pessoas e projetos que fazem a diferença.', 'color: #2c3e50; font-size: 14px;');

// ==========================================
// CARROSSEL DE BANNER
// ==========================================

let currentSlide = 0;
let carouselInterval;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.carousel-dot');
    
    if (!slides.length) return;
    
    // Garantir que o índice está dentro dos limites
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }
    
    // Remover classe active de todos
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    // Adicionar classe active ao slide e dot atual
    slides[currentSlide].classList.add('active');
    if (dots[currentSlide]) {
        dots[currentSlide].classList.add('active');
    }
}

function changeSlide(direction) {
    showSlide(currentSlide + direction);
    resetCarouselTimer();
}

function goToSlide(index) {
    showSlide(index);
    resetCarouselTimer();
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function resetCarouselTimer() {
    clearInterval(carouselInterval);
    carouselInterval = setInterval(nextSlide, 5000); // Muda a cada 5 segundos
}

// Iniciar o carrossel quando a página carregar
document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.getElementById('bannerCarousel');
    if (carousel) {
        showSlide(0);
        carouselInterval = setInterval(nextSlide, 5000);
        
        // Pausar ao passar o mouse
        carousel.addEventListener('mouseenter', function() {
            clearInterval(carouselInterval);
        });
        
        // Retomar ao sair o mouse
        carousel.addEventListener('mouseleave', function() {
            carouselInterval = setInterval(nextSlide, 5000);
        });
    }
});

// ==========================================
// MODAL DE IMAGEM
// ==========================================

function openImageModal(src, alt) {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    
    if (modal && modalImg) {
        modal.classList.add('active');
        modalImg.src = src;
        modalImg.alt = alt;
        document.body.style.overflow = 'hidden'; // Prevenir scroll
    }
}

function closeImageModal() {
    const modal = document.getElementById('imageModal');
    
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = ''; // Restaurar scroll
    }
}

// Fechar modal com tecla ESC
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeImageModal();
    }
});




