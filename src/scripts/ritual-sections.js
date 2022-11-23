import scrollama from 'scrollama';

export function ritualSections() {
  const scroller = scrollama();
  let ritualBoxes = document.querySelectorAll('.text-box.is--summoning-box');
  console.log(ritualBoxes);
  let ritualImages = document.querySelectorAll('.ritual-image');
  // eslint-disable-next-line
  ritualBoxes = [...ritualBoxes].map((box) => {
    box.classList.contains('is--active')
      ? box.classList.remove('is--active')
      : null;
  });
  console.log(ritualBoxes);
  // eslint-disable-next-line
  ritualImages = [...ritualImages].map((image) => {
    image.classList.contains('is--active')
      ? image.classList.remove('is--active')
      : null;
  });
  scroller
    .setup({
      step: '.ritual-step',
      offset: 0.5,
      progress: false,
      debug: false,
      threshold: 2,
    })
    .onStepEnter((response) => {
      // { element, index, direction }
      if (response.direction === 'down') {
        response.element
          .querySelector('.text-box.is--summoning-box')
          .classList.add('is--active');
        response.element
          .querySelector('.ritual-image')
          .classList.add('is--active');
      }
    })
    .onStepExit((response) => {
      // { element, index, direction }
      if (response.direction === 'up') {
        response.element
          .querySelector('.text-box.is--summoning-box')
          .classList.remove('is--active');
        response.element
          .querySelector('.ritual-image')
          .classList.remove('is--active');
      }
    });
}
