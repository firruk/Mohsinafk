// Portfolio Website JavaScript

document.addEventListener('DOMContentLoaded', function() {
    initNavigation();
    populateContent();
    setupScrollAnimations();
    setupActiveNavigation();
    setCurrentYear();
});

// Navigation
function initNavigation() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.getElementById('navLinks');
    const navbar = document.getElementById('navbar');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
        
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', function() {
                navLinks.classList.remove('active');
            });
        });
    }
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// Active Navigation Highlighting
function setupActiveNavigation() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (window.pageYOffset >= sectionTop - 100) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            const href = link.getAttribute('href');
            if (href && href.startsWith('#') && href === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// Populate Content
function populateContent() {
    if (typeof portfolioData === 'undefined') return;
    
    const data = portfolioData;
    
    populateExperience(data.experience);
    
    // 1. Organize Skills (Ensure your data.js has at least 4 categories)
    populateSkills(data.skills); 

    // 2. Only show 3 Projects
    populateFeaturedProjects(data.projects.slice(0, 3));
    
    // 3. Keep top 3 Publications
    populateFeaturedPublications(data.publications.slice(0, 3));
    
    populateCertificationsAndAwards(data.certifications, data.awards);
}



function populateExperience(experiences) {
    const container = document.getElementById('experienceTimeline');
    if (!container) return;
    
    container.innerHTML = experiences.map(exp => `
        <div class="timeline-item">
            <div class="timeline-header">
                <div>
                    <h3 class="timeline-role">${exp.role}</h3>
                    <p class="timeline-company">${exp.company}</p>
                </div>
                <span class="timeline-duration">${exp.duration}</span>
            </div>
            <p class="timeline-desc">${exp.description}</p>
            <ul class="timeline-achievements">
                ${exp.achievements.map(achievement => `<li>${achievement}</li>`).join('')}
            </ul>
        </div>
    `).join('');
}

function populateSkills(skills) {
    const container = document.getElementById('skillsGrid');
    if (!container) return;
    
    // Object.entries(skills).slice(0, 4) ensures we only take the first 4 categories
    container.innerHTML = Object.entries(skills).slice(0, 4).map(([category, skillList]) => `
        <div class="skill-category">
            <h3>${category}</h3>
            <div class="skill-tags">
                ${skillList.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
            </div>
        </div>
    `).join('');
}
function populateCertificationsAndAwards(certifications, awards) {
    const certsContainer = document.getElementById('certsList');
    const awardsContainer = document.getElementById('awardsList');
    
    if (certsContainer) {
        certsContainer.innerHTML = certifications.map(cert => `<li>${cert}</li>`).join('');
    }
    
    if (awardsContainer) {
        awardsContainer.innerHTML = awards.map(award => `<li>${award}</li>`).join('');
    }
}

function populateFeaturedProjects(projects) {
    const container = document.getElementById('projectsPreview');
    if (!container) return;
    
    container.innerHTML = projects.map(project => `
        <a href="${project.link || '#'}" ${project.link ? 'target="_blank"' : ''} class="project-card-link" style="text-decoration: none; color: inherit; display: block;">
            <div class="project-card" style="height: 100%; transition: transform 0.3s ease;">
                <div class="project-header">
                    <span class="project-category">${project.category}</span>
                    <span class="project-year">${project.year}</span>
                </div>
                <h3 class="project-title">${project.title}</h3>
                <p class="project-desc">${project.description}</p>
                <div class="project-tech">
                    ${project.tech.slice(0, 5).map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
            </div>
        </a>
    `).join('');
}

function populateFeaturedPublications(publications) {
    const container = document.getElementById('publicationsPreview');
    if (!container) return;
    
    container.innerHTML = publications.map(pub => `
        <a href="${pub.link || '#'}" ${pub.link ? 'target="_blank"' : ''} class="publication-card-link" style="text-decoration: none; color: inherit; display: block;">
            <div class="publication-card" style="transition: background 0.3s ease;">
                <div class="publication-header">
                    <h3 class="publication-title">${pub.title}</h3>
                    <p class="publication-meta">${pub.journal} • ${pub.year}</p>
                </div>
                <p class="publication-abstract">${pub.abstract}</p>
                <div class="publication-tags">
                    ${pub.tags.slice(0, 3).map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
            </div>
        </a>
    `).join('');
}

// Scroll Animations
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.timeline-item, .project-card, .publication-card, .skill-category').forEach(el => {
        observer.observe(el);
    });
}

// Contact Form Handler
function handleContactForm(event) {
    event.preventDefault();
    
    const form = event.target;
    const formData = new FormData(form);
    
    const name = formData.get('name');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');
    
    const mailtoLink = `mailto:mohsinafirdousk@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    )}`;
    
    window.location.href = mailtoLink;
    
    setTimeout(() => {
        form.reset();
    }, 100);
}

// Utility Functions
function setCurrentYear() {
    const yearEl = document.getElementById('currentYear');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href.length > 1) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});
