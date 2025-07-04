function toggleMenu() {
    const menu = document.getElementById('mobileMenu');
    menu.classList.toggle('hidden');
  }



  const btn = document.getElementById('show-more-btn');
  const extras = document.querySelectorAll('.extra-testimonial');

  btn.addEventListener('click', () => {
    extras.forEach((el) => {
      el.classList.remove('hidden');
      el.classList.remove('translate-y-10', 'opacity-0');
      el.classList.add('translate-y-0', 'opacity-100');
    });

    // Optionally disable the button after first click
    btn.disabled = true;
    btn.classList.add('opacity-50', 'cursor-not-allowed');
  });
