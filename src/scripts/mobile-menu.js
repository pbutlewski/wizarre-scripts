function toggleMobileMenu() {
  const menu = document.querySelector('.navigation');
  menu.classList.contains('is--mobile-active')
    ? menu.classList.remove('is--mobile-active')
    : menu.classList.add('is--mobile-active');
}

export function mobileMenu() {
  const button = document.querySelector('.mobile-menu-button');
  button.addEventListener('click', toggleMobileMenu);
}
