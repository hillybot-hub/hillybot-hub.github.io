const cursor = document.querySelector('.custom-cursor');

document.addEventListener('mousemove', e => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});

document.querySelectorAll('button, a, video').forEach(elem => {
  elem.addEventListener('mouseenter', () => cursor.classList.add('active'));
  elem.addEventListener('mouseleave', () => cursor.classList.remove('active'));
});

// Animate skill bars on scroll
const skillBars = document.querySelectorAll('.skill-fill');
const options = {
  threshold: 0.5
};

const skillObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      const bar = entry.target;
      bar.style.width = bar.style.width || bar.getAttribute('style') || '';
      // Animate width property
      bar.style.width = bar.style.width || bar.style.width || '';
      bar.style.animation = 'fillSkillBar 2s forwards';
      skillObserver.unobserve(bar);
    }
  });
}, options);

skillBars.forEach(bar => {
  skillObserver.observe(bar);
});

// Fade in elements on scroll
const faders = document.querySelectorAll('h2, p, .project-card, .skill-name, form, .hero-title, .hero-subtitle, .hero-cta');
const appearOptions = {
  threshold: 0,
  rootMargin: "0px 0px -100px 0px"
};

const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {
  entries.forEach(entry => {
    if(!entry.isIntersecting) return;
    entry.target.classList.add('fade-in');
    appearOnScroll.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

// Contact form submission simulation
const form = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

form.addEventListener('submit', e => {
  e.preventDefault();
  formMessage.textContent = 'Sending...';
  setTimeout(() => {
    formMessage.textContent = 'Thank you for reaching out! I will get back to you soon.';
    form.reset();
  }, 2000);
});