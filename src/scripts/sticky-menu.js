import scrollama from 'scrollama';


export function init() {
  const scroller = scrollama();
  const navbar = document.querySelector('.navigation');
  if (window.scrollY > 32) navbar.classList.add('is--sticky');
  scroller
    .setup({
      step: '.navbar-section',
      offset: 0,
      debug: false,
    })
    .onStepEnter(() => {
      [...navbar.classList].includes('is--sticky')
        ? navbar.classList.remove('is--sticky')
        : true;
    })
    .onStepExit((response) => {
      if (response.direction === 'down') navbar.classList.add('is--sticky');
    });
}
