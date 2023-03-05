import scrollama from 'scrollama';

export function init() {
  const scroller = scrollama();
  const navbar = document.querySelector('.navigation');
  if (window.scrollY > 32) navbar.classList.add('is--sticky');
  scroller
    .setup({
      step: '.navbar-trigger',
      offset: '16px',
      debug: false,
      progress: true,
      threshold: 1,
    })
    .onStepExit((response) => {
      if (response.direction === 'down') navbar.classList.add('is--sticky');
      else
        [...navbar.classList].includes('is--sticky')
          ? navbar.classList.remove('is--sticky')
          : null;
    })
    .onStepProgress((response) => {
      if (response.progress < 1)
        [...navbar.classList].includes('is--sticky')
          ? navbar.classList.remove('is--sticky')
          : null;
    });
}
