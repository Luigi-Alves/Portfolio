// Alternar menu móvel
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Fechar menu ao clicar em um link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Scroll to Top Button
const scrollTopBtn = document.getElementById('scrollTopBtn');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollTopBtn.classList.add('show');
    } else {
        scrollTopBtn.classList.remove('show');
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Observador de Interseção para Animações de Rolagem
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Only observe once
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe todas as cartas de habilidade
const skillCards = document.querySelectorAll('.skill-card');
skillCards.forEach((card, index) => {
    card.classList.add('fade-in-stagger');
    card.style.transitionDelay = `${index * 100}ms`;
    observer.observe(card);
});

// Observe all project cards
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach((card, index) => {
    card.classList.add('fade-in-stagger');
    card.style.transitionDelay = `${index * 100}ms`;
    observer.observe(card);
});

// Observe sections
const sections = document.querySelectorAll('section');
sections.forEach(section => {
    section.classList.add('fade-in');
    observer.observe(section);
});

// Observe about info items
const infoItems = document.querySelectorAll('.info-item');
infoItems.forEach((item, index) => {
    item.classList.add('fade-in-stagger');
    item.style.transitionDelay = `${index * 100}ms`;
    observer.observe(item);
});

// Link de navegação ativo ao rolar
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Adicionar estilo de classe ativo
const style = document.createElement('style');
style.textContent = `
    .nav-item a.active {
        color: var(--primary);
        font-weight: 700;
    }

    .nav-item a.active::after {
        width: 100%;
    }
`;
document.head.appendChild(style);

// Rolagem suave para links de âncora
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

console.log('Portfolio loaded successfully! ✨');
