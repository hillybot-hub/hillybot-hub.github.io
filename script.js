// GSAP and ScrollTrigger Animations + Custom Cursor + Contact Form Validation

gsap.registerPlugin(ScrollTrigger);

// Split Text helper — splits each letter into spans
function splitText(selector) {
  const elements = document.querySelectorAll(selector);
  elements.forEach(el => {
    const text = el.textContent;
    el.innerHTML = '';
    for (const char of text) {
      const span = document.createElement('span');
      span.textContent = char;
      el.appendChild(span);
    }
  });
}
splitText('.split-text');

// Animate split text — reveal letters from below on scroll
function animateSplitText() {
  document.querySelectorAll('.split-text').forEach(el => {
    gsap.fromTo(el.children, {
      yPercent: 100,
      opacity: 0,
    }, {
      yPercent: 0,
      opacity: 1,
      stagger: 0.05,
      duration: 0.7,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 80%',
        toggleActions: 'play none none none',
      }
    });
  });
}
animateSplitText();

// Parallax shapes in About Section
const aboutShapes = document.querySelectorAll('#about .parallax-shapes div');
window.addEventListener('mousemove', e => {
  const x = (e.clientX / window.innerWidth - 0.5) * 20;
  const y = (e.clientY / window.innerHeight - 0.5) * 20;
  aboutShapes.forEach((shape, i) => {
    const speed = (i + 1) * 5;
    shape.style.transform = `translate3d(${x * speed}px, ${y * speed}px, 0)`;
  });
});

// Animate skill bars filling when skills section enters viewport
function animateSkillBars() {
  const skillBars = document.querySelectorAll('.skill-bar-fill');
  skillBars.forEach(bar => {
    const fillPercent = bar.dataset.fill;
    gsap.fromTo(bar, {width: '0%'}, {
      width: fillPercent + '%',
      duration: 1.8,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: bar.closest('.skill'),
        start: 'top 90%',
        toggleActions: 'play none none none',
      }
    });
  });
}
animateSkillBars();

// Scroll to Projects button
const scrollBtn = document.getElementById('scrollToProjects');
scrollBtn.addEventListener('click', () => {
  gsap.to(window, {duration: 1.3, scrollTo: '#projects', ease: 'power3.inOut'});
});

// Hero background subtle parallax on scroll
gsap.to('#hero .bg-layer', {
  yPercent: 15,
  ease: 'none',
  scrollTrigger: {
    trigger: '#hero',
    start: 'top top',
    end: 'bottom top',
    scrub: true,
  }
});

// Project cards hover 3D tilt effect
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * 7;
    const rotateY = ((x - centerX) / centerX) * 7;
    card.style.transform = `perspective(600px) rotateX(${-rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'perspective(600px) rotateX(0deg) rotateY(0deg) scale(1)';
  });
});

// Custom cursor implementation
const cursor = document.getElementById('cursor');
document.addEventListener('mousemove', e => {
  gsap.to(cursor, {
    duration: 0.15,
    x: e.clientX,
    y: e.clientY,
    ease: 'power3.out',
  });
});

// Cursor scaling on hover for interactive elements
const hoverTargets = document.querySelectorAll('button, a, .project-card');
hoverTargets.forEach(el => {
  el.addEventListener('mouseenter', () => cursor.classList.add('active'));
  el.addEventListener('mouseleave', () => cursor.classList.remove('active'));
});

// Contact form validation + fake submission
const contactForm = document.getElementById('contactForm');
const formMsg = document.getElementById('form-msg');

contactForm.addEventListener('submit', e => {
  e.preventDefault();
  formMsg.textContent = '';
  if (!contactForm.checkValidity()) {
    formMsg.textContent = 'Please fill out the form correctly.';
    formMsg.style.color = '#ff6b6b';
    return;
  }

  // Simulate sending
  formMsg.style.color = '#39b2ff';
  formMsg.textContent = 'Sending...';
  setTimeout(() => {
    formMsg.textContent = 'Message sent successfully! Thank you.';
    contactForm.reset();
  }, 1500);
});
