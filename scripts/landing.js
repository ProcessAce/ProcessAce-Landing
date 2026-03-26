(function () {
    const locale = (document.documentElement.lang || 'en').toLowerCase().startsWith('es') ? 'es' : 'en';

    const i18n = {
        en: {
            previewDotLabel: 'Go to image',
            contactSalesMessage: "Hi, I'm interested in the ProcessAce Commercial License for my organization. Could you provide more information about pricing, features, and deployment options?",
            consultationMessage: "Hi, I'd like to book a consultation to discuss process architecture, intelligent automation, and how we might integrate ProcessAce into our workflows. Please let me know your availability."
        },
        es: {
            previewDotLabel: 'Ir a la imagen',
            contactSalesMessage: 'Hola, me interesa la Licencia Comercial de ProcessAce para mi organizaci\u00f3n. \u00bfPodr\u00edan proporcionar m\u00e1s informaci\u00f3n sobre precios, caracter\u00edsticas y opciones de despliegue?',
            consultationMessage: 'Hola, me gustar\u00eda agendar una consultor\u00eda para hablar sobre arquitectura de procesos, automatizaci\u00f3n inteligente y c\u00f3mo podr\u00edamos integrar ProcessAce en nuestros flujos de trabajo. Por favor, av\u00edsenme su disponibilidad.'
        }
    };

    const t = i18n[locale];

    const yearEl = document.getElementById('year');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }

    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (mobileBtn && navLinks) {
        mobileBtn.addEventListener('click', () => {
            const isExpanded = mobileBtn.getAttribute('aria-expanded') === 'true';
            mobileBtn.setAttribute('aria-expanded', String(!isExpanded));
            navLinks.classList.toggle('active');
        });

        document.querySelectorAll('.nav-links a').forEach((link) => {
            link.addEventListener('click', () => {
                mobileBtn.setAttribute('aria-expanded', 'false');
                navLinks.classList.remove('active');
            });
        });
    }

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        },
        {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        }
    );

    document.querySelectorAll('.fade-up').forEach((element) => {
        observer.observe(element);
    });

    const btnLicenses = document.getElementById('btn-licenses');
    const btnConsulting = document.getElementById('btn-consulting');
    const licensesContent = document.getElementById('licenses-content');
    const consultingContent = document.getElementById('consulting-content');

    if (btnLicenses && btnConsulting && licensesContent && consultingContent) {
        btnLicenses.addEventListener('click', () => {
            if (btnLicenses.classList.contains('active')) {
                return;
            }

            btnLicenses.classList.add('active');
            btnConsulting.classList.remove('active');

            consultingContent.style.display = 'none';
            licensesContent.style.display = 'grid';

            licensesContent.classList.remove('animate-in');
            void licensesContent.offsetWidth;
            licensesContent.classList.add('animate-in');
        });

        btnConsulting.addEventListener('click', () => {
            if (btnConsulting.classList.contains('active')) {
                return;
            }

            btnConsulting.classList.add('active');
            btnLicenses.classList.remove('active');

            licensesContent.style.display = 'none';
            consultingContent.style.display = 'grid';

            consultingContent.classList.remove('animate-in');
            void consultingContent.offsetWidth;
            consultingContent.classList.add('animate-in');
        });
    }

    const btnPreviewLanding = document.getElementById('btn-preview-landing');
    const btnPreviewBpmn = document.getElementById('btn-preview-bpmn');
    const imgLanding = document.getElementById('img-landing');
    const imgBpmn = document.getElementById('img-bpmn');
    const descLanding = document.getElementById('desc-landing');
    const descBpmn = document.getElementById('desc-bpmn');
    const previewDots = document.getElementById('preview-dots');

    let previewInterval;

    function startPreviewAnimation(groupId) {
        clearInterval(previewInterval);
        const group = document.getElementById(groupId);
        if (!group) {
            return;
        }

        const images = group.querySelectorAll('.preview-image');
        if (images.length <= 1) {
            if (previewDots) {
                previewDots.innerHTML = '';
            }
            return;
        }

        let currentIndex = 0;
        images.forEach((img, index) => {
            if (img.classList.contains('active')) {
                currentIndex = index;
            }
        });

        if (previewDots) {
            previewDots.innerHTML = '';
            images.forEach((_, index) => {
                const dot = document.createElement('button');
                dot.classList.add('preview-dot');
                if (index === currentIndex) {
                    dot.classList.add('active');
                }
                dot.setAttribute('aria-label', `${t.previewDotLabel} ${index + 1}`);
                dot.addEventListener('click', () => {
                    changeSlide(currentIndex, index, images);
                    currentIndex = index;
                    resetInterval();
                });
                previewDots.appendChild(dot);
            });
        }

        function changeSlide(oldIndex, newIndex, imgs) {
            if (oldIndex === newIndex) {
                return;
            }
            imgs[oldIndex].classList.remove('active');
            imgs[newIndex].classList.add('active');
            if (previewDots) {
                const dots = previewDots.querySelectorAll('.preview-dot');
                if (dots[oldIndex]) {
                    dots[oldIndex].classList.remove('active');
                }
                if (dots[newIndex]) {
                    dots[newIndex].classList.add('active');
                }
            }
        }

        function resetInterval() {
            clearInterval(previewInterval);
            previewInterval = setInterval(() => {
                const newIndex = (currentIndex + 1) % images.length;
                changeSlide(currentIndex, newIndex, images);
                currentIndex = newIndex;
            }, 4000);
        }

        resetInterval();
    }

    if (btnPreviewLanding && btnPreviewBpmn && imgLanding && imgBpmn && descLanding && descBpmn) {
        startPreviewAnimation('img-landing');

        btnPreviewLanding.addEventListener('click', () => {
            if (btnPreviewLanding.classList.contains('active')) {
                return;
            }

            btnPreviewLanding.classList.add('active');
            btnPreviewBpmn.classList.remove('active');

            imgLanding.classList.add('active');
            descLanding.classList.add('active');
            imgBpmn.classList.remove('active');
            descBpmn.classList.remove('active');

            startPreviewAnimation('img-landing');
        });

        btnPreviewBpmn.addEventListener('click', () => {
            if (btnPreviewBpmn.classList.contains('active')) {
                return;
            }

            btnPreviewBpmn.classList.add('active');
            btnPreviewLanding.classList.remove('active');

            imgBpmn.classList.add('active');
            descBpmn.classList.add('active');
            imgLanding.classList.remove('active');
            descLanding.classList.remove('active');

            startPreviewAnimation('img-bpmn');
        });
    }

    const contactSalesBtn = document.getElementById('btn-contact-sales');
    const bookConsultationBtn = document.getElementById('btn-book-consultation');
    const messageInput = document.getElementById('message');

    if (contactSalesBtn && messageInput) {
        contactSalesBtn.addEventListener('click', () => {
            messageInput.value = t.contactSalesMessage;
            setTimeout(() => messageInput.focus(), 600);
        });
    }

    if (bookConsultationBtn && messageInput) {
        bookConsultationBtn.addEventListener('click', () => {
            messageInput.value = t.consultationMessage;
            setTimeout(() => messageInput.focus(), 600);
        });
    }
})();
