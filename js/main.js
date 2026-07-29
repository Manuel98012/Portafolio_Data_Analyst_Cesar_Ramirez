// ============================================
// Menu movil
// ============================================
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => navLinks.classList.remove('open'));
  });
}

// ============================================
// Efecto de tipeo en el hero
// ============================================
const typedEl = document.querySelector('.hero-role-text');

if (typedEl) {
  const roles = ['Analista de Datos', 'Data Analyst', 'Data Storyteller'];
  let roleIndex = 0;
  let charIndex = 0;
  let deleting = false;

  function tick() {
    const current = roles[roleIndex];

    if (!deleting) {
      charIndex++;
      typedEl.textContent = current.slice(0, charIndex);
      if (charIndex === current.length) {
        deleting = true;
        setTimeout(tick, 1600);
        return;
      }
    } else {
      charIndex--;
      typedEl.textContent = current.slice(0, charIndex);
      if (charIndex === 0) {
        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
      }
    }

    setTimeout(tick, deleting ? 45 : 90);
  }

  tick();
}

// ============================================
// Carrusel de habilidades
// ============================================
const skillsTrack = document.querySelector('.skills-track');
const skillPrev = document.getElementById('skillPrev');
const skillNext = document.getElementById('skillNext');
const skillDots = document.querySelectorAll('#skillDots .dot');

if (skillsTrack && skillPrev && skillNext) {
  const slideCount = skillsTrack.children.length;
  let current = 0;

  skillsTrack.style.width = `${slideCount * 100}%`;
  [...skillsTrack.children].forEach((slide) => {
    slide.style.width = `${100 / slideCount}%`;
  });

  function updateCarousel() {
    skillsTrack.style.transform = `translateX(-${current * (100 / slideCount)}%)`;
    skillPrev.disabled = current === 0;
    skillNext.disabled = current === slideCount - 1;
    skillDots.forEach((dot, i) => dot.classList.toggle('active', i === current));
  }

  skillPrev.addEventListener('click', () => {
    if (current > 0) {
      current--;
      updateCarousel();
    }
  });

  skillNext.addEventListener('click', () => {
    if (current < slideCount - 1) {
      current++;
      updateCarousel();
    }
  });

  updateCarousel();
}

// ============================================
// Validacion basica del formulario de contacto
// ============================================
const contactForm = document.querySelector('.contact-form');

if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    const name = contactForm.querySelector('#name');
    const email = contactForm.querySelector('#email');
    const message = contactForm.querySelector('#message');

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
      event.preventDefault();
      alert('Por favor completa todos los campos antes de enviar.');
      return;
    }

    if (!emailPattern.test(email.value.trim())) {
      event.preventDefault();
      alert('Ingresa un correo electronico valido.');
    }
  });
}
