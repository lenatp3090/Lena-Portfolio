
const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('#nav');

// Mobile navigation
menuButton.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
});

// Close menu after clicking a link
nav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
  });
});

// Current year in footer
document.querySelector('#year').textContent = new Date().getFullYear();

// Subtle 3D photo interaction
const heroPhoto = document.querySelector('.hero-photo');

if (heroPhoto && window.matchMedia('(hover: hover)').matches) {
  heroPhoto.addEventListener('mousemove', (event) => {
    const rect = heroPhoto.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const rotateY = ((x / rect.width) - 0.5) * 12;
    const rotateX = ((y / rect.height) - 0.5) * -12;

    heroPhoto.style.transform =
      `perspective(700px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
  });

  heroPhoto.addEventListener('mouseleave', () => {
    heroPhoto.style.transform = '';
  });
}
