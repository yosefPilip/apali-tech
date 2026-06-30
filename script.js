/* ============================================================
   APALI LANDING PAGE — script.js
   Mobile nav toggle + brutalist micro-interactions
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  // ---- Mobile nav toggle ----
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuIcon = hamburger && hamburger.querySelector('.menu-icon');

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      const isOpen = !mobileMenu.classList.contains('hidden');
      mobileMenu.classList.toggle('hidden');
      if (menuIcon) {
        menuIcon.textContent = isOpen ? 'menu' : 'close';
      }
    });

    // Close mobile menu when a link is clicked
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        if (menuIcon) menuIcon.textContent = 'menu';
      });
    });
  }

  // ---- Brutalist press micro-interaction ----
  // Buttons and links shift 2px on mousedown to feel mechanical
  document.querySelectorAll('button, a').forEach(el => {
    el.addEventListener('mousedown', () => {
      el.style.transform = 'translate(2px, 2px)';
    });
    el.addEventListener('mouseup', () => {
      el.style.transform = '';
    });
    el.addEventListener('mouseleave', () => {
      el.style.transform = '';
    });
  });

  // ---- Active nav highlight on scroll ----
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('nav a[href^="#"]');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          navLinks.forEach(link => {
            const isActive = link.getAttribute('href') === '#' + entry.target.id;
            link.style.opacity = isActive ? '1' : '0.7';
            link.style.textDecoration = isActive ? 'underline' : 'none';
          });
        }
      });
    },
    { rootMargin: '-40% 0px -40% 0px' }
  );

  sections.forEach(s => observer.observe(s));

  // ---- Email form: show a "noted" state on submit ----
  const emailForm = document.querySelector('#early-access form');
  const emailInput = emailForm && emailForm.querySelector('input[type="email"]');
  const emailButton = emailForm && emailForm.querySelector('button[type="submit"]');

  if (emailForm) {
    emailForm.addEventListener('submit', (e) => {
      e.preventDefault();
      // EARLY ACCESS: replace this block with real submission logic when ready
      if (emailButton) {
        emailButton.textContent = 'NOTED ✓';
        emailButton.disabled = true;
        emailButton.style.opacity = '0.6';
      }
      if (emailInput) {
        emailInput.value = '';
        emailInput.placeholder = 'WE\'LL BE IN TOUCH.';
        emailInput.disabled = true;
      }
    });
  }

});
