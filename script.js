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
        description: 'Projeto de interface de autenticação com foco em responsividade, experiência do usuário e boas práticas de desenvolvimento front-end. Desenvolvido com HTML, CSS e JavaScript puro, conta com funcionalidades como validação de campos, alternância entre modos claro e escuro, ícones interativos e uma tela de cadastro adicional. Toda a estrutura visual e lógica de interação foi criada por mim, servindo como base sólida para estudos de manipulação do DOM e construção de interfaces modernas e acessíveis.',
        tech: ['HTML', 'CSS', 'JavaScript', 'Responsivo'],
        image: 'telalogin.png',
        github: 'https://github.com/aneelise/Primeiro-Commit',
        demo: 'https://pagina-login-ane.netlify.app/',
        gradient: 'Gradiente de fundo do card'
    },

        {
        title: 'Site de Receitas Saudáveis',
        description: 'Este projeto é uma aplicação web desenvolvida para centralizar e compartilhar receitas saudáveis de forma prática e visualmente atrativa. A ideia surgiu a partir da demanda real de um nutricionista interessado em divulgar preparações saudáveis aos seus pacientes. Todas as receitas e imagens foram produzidas por mim, tornando o projeto 100% autoral. A aplicação foi construída com foco em usabilidade, organização por categorias, e estrutura modular, servindo como um case completo de front-end com integração de lógica em JavaScript e aplicação de boas práticas de desenvolvimento web.',
        tech: ['HTML', 'CSS', 'JavaScript', 'Responsivo'],
        image: 'telareceita.png',
        github: 'https://github.com/aneelise/receitas',
        demo: 'https://receitasaudaveis.netlify.app/',
        gradient: 'Gradiente de fundo do card'
    },
     {
        title: 'Plataforma de Vendas de Consultoria Online ',
        description: 'Aplicação desenvolvida voltada para um treinador que deseja vender sua consultoria online e eBooks de treinamento de forma prática e profissional. O site também apresenta a trajetória do treinador, sua metodologia, depoimentos e resultados das alunas, fortalecendo sua autoridade e conexão com o público. A plataforma foi pensada para ser responsiva, visualmente atrativa e fácil de navegar, otimizando a experiência do usuário e potencializando as vendas.',
        tech: ['React.js', 'Tailwind CSS', 'JavaScript', 'HTML(JSX)', 'Responsivo'],
        image: 'telarapha.png',
        github: 'https://github.com/aneelise/portfoliorapha',
        demo: 'https://raphaelviezorkosky.netlify.app/',
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
    e.preventDefault();

    const formData = new FormData(contactForm);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    const phoneNumber = '5543998231510'; // coloque seu número com DDI (ex: +55 para Brasil)
    const text = `Olá! Meu nome é ${name}, meu email é ${email}.\nMensagem: ${message}`;
    const encodedText = encodeURIComponent(text);
    
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedText}`;
    window.open(whatsappURL, '_blank');

    contactForm.reset();
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
                    <a href="${project.github}" class="project-link" title="Ver código"target="_blank" rel="noopener noreferrer">🐱</a>
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
