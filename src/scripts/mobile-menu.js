function toggleMobileMenu() {
  const menu = document.querySelector('.navigation');
  menu.classList.contains('is--mobile-active')
    ? menu.classList.remove('is--mobile-active')
    : menu.classList.add('is--mobile-active');
}

function toggleStatsDrawer() {
  const menu = document.querySelector('.text-box.is--mobile-stats');
  menu.classList.contains('is--active')
    ? menu.classList.remove('is--active')
    : menu.classList.add('is--active');
}

export function mobileMenu() {
  const button = document.querySelector('.mobile-menu-button');
  button.addEventListener('click', toggleMobileMenu);
}

export function statsDrawer(){
  const button = document.querySelector('.drawer-title');
    button.addEventListener('click', toggleStatsDrawer);
}