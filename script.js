// ======== Seleção de Elementos do DOM ========
const header = document.getElementById('header');
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');
const scrollTopBtn = document.getElementById('scroll-top');
const contactForm = document.getElementById('contact-form');
const projectsGrid = document.getElementById('projects-grid');

// ======== Dados dos Projetos ========
const projects = [
    // Cada objeto representa um projeto do portfólio
    {
        title: 'Tela de login responsiva',
        description: 'Este projeto é uma tela de login simples e responsiva, desenvolvida por mim usando HTML, CSS e JavaScript. A interface visual foi criada por mim, incluindo o design e a experiência do usuário. O sistema conta com validação de campos, ícones interativos, modo claro e escuro, além de uma tela de cadastro. É uma base sólida para estudos de Front-End, com foco na manipulação do DOM e aplicação de boas práticas visuais.',
        tech: ['HTML', 'CSS', 'JavaScript', 'Responsivo'],
        image: 'telalogin.png',
        github: '#',
        demo: 'https://pagina-login-ane.netlify.app/',
        gradient: 'Gradiente de fundo do card'
    },

        {
        title: 'Site de Receitas Saudáveis',
        description: 'Este projeto é um site de receitas saudáveis idealizado por mim ao perceber o interesse do meu nutricionista nas minhas preparações. Como ele gosta das minhas receitas e queria compartilhá-las com os pacientes, desenvolvi esta solução prática para facilitar esse processo. Todas as receitas e imagens foram criadas por mim, tornando este um projeto totalmente pessoal.',
        tech: ['HTML', 'CSS', 'JavaScript', 'Responsivo'],
        image: 'telareceita.png',
        github: '#',
        demo: 'https://receitasaudaveis.netlify.app/',
        gradient: 'Gradiente de fundo do card'
    },
    // ... Outros projetos omitidos por brevidade
];

// ======== Efeito de Scroll no Header ========
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// ======== Menu Mobile (abre/fecha) ========
menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// ======== Fecha menu ao clicar em um link ========
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// ======== Rolagem suave até uma seção específica ========
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        const headerHeight = header.offsetHeight;
        const elementPosition = element.offsetTop - headerHeight;
        window.scrollTo({ top: elementPosition, behavior: 'smooth' });
    }
}

// ======== Botão para voltar ao topo ========
scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ======== Mostrar/ocultar botão de voltar ao topo ========
window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        scrollTopBtn.style.opacity = '1';
        scrollTopBtn.style.visibility = 'visible';
    } else {
        scrollTopBtn.style.opacity = '0';
        scrollTopBtn.style.visibility = 'hidden';
    }
});

// ======== Envio do Formulário de Contato ========
contactForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Impede o envio padrão
    
    const formData = new FormData(contactForm);
    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message')
    };

    console.log('Formulário enviado:', data);
    alert('Mensagem enviada com sucesso! Entrarei em contato em breve.');
    contactForm.reset(); // Limpa o formulário
});

// ======== Geração dinâmica dos projetos ========
function generateProjects() {
    projectsGrid.innerHTML = '';

    projects.forEach((project) => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.innerHTML = `
            <div class="project-image" style="background-image: url('${project.image}')">
                <div class="project-overlay">
                    <a href="${project.github}" class="project-link" title="Ver código">🐱</a>
                    <a href="${project.demo}" class="project-link" title="Ver demo" target="_blank" rel="noopener noreferrer">🔗</a>
                </div>
            </div>
            <div class="project-content">
                <h3 class="project-title">
                    ${project.title}
                    <span class="project-heart" style="opacity: 0; transition: opacity 0.3s ease;">💖</span>
                </h3>
                <p class="project-description">${project.description}</p>
                <div class="project-tech">
                    ${project.tech.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
            </div>
        `;

        // Animação do coração no hover
        projectCard.addEventListener('mouseenter', () => {
            projectCard.querySelector('.project-heart').style.opacity = '1';
        });
        projectCard.addEventListener('mouseleave', () => {
            projectCard.querySelector('.project-heart').style.opacity = '0';
        });

        projectsGrid.appendChild(projectCard);
    });
}

// ======== Animação das barras de habilidades ========
function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skillBar = entry.target;
                const width = skillBar.getAttribute('data-width');
                skillBar.style.width = width + '%';
            }
        });
    }, { threshold: 0.5 });
    skillBars.forEach(bar => observer.observe(bar));
}

// ======== Animação ao rolar a página ========
function animateOnScroll() {
    const elements = document.querySelectorAll('.education-item, .interest-item, .project-card, .contact-card, .social-card');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, { threshold: 0.1 });
    elements.forEach(el => observer.observe(el));
}

// ======== Animação flutuante para elementos decorativos ========
function addFloatingAnimation() {
    const decorativeElements = document.querySelectorAll('.image-decoration, .avatar-decoration');
    decorativeElements.forEach((element, index) => {
        element.style.animation = `float 3s ease-in-out infinite`;
        element.style.animationDelay = `${index * 0.5}s`;
    });
}

// ======== Inicialização geral ao carregar DOM ========
document.addEventListener('DOMContentLoaded', () => {
    generateProjects();
    animateSkillBars();
    animateOnScroll();
    addFloatingAnimation();

    // Interação nos botões
    document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('mouseenter', () => {
            btn.style.transform = 'translateY(-2px) scale(1.02)';
        });
        btn.addEventListener('mouseleave', () => {
            btn.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// ======== Efeito parallax em elementos flutuantes ========
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.floating-element');
    parallaxElements.forEach((element, index) => {
        const speed = 0.5 + (index * 0.1);
        element.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// ======== Efeito de digitação no título ========
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// ======== Animação de revelação suave para seções ========
function revealSections() {
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(section);
    });
}

// ======== Inicializa a animação das seções ========
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(revealSections, 500);
});
