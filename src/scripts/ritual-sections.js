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
        [...document.querySelectorAll('.text-box.is--summoning-box')].map((element) => element.classList.add('is--active'));
        [...document.querySelectorAll('.ritual-image')].map((element) => element.classList.add('is--active'));
      }
    })
    .onStepExit((response) => {
      // { element, index, direction }
      if (response.direction === 'up') {
       [...document.querySelectorAll('.text-box.is--summoning-box')].map((element) => element.classList.remove('is--active'));
        [...document.querySelectorAll('.ritual-image')].map((element) => element.classList.remove('is--active'));
      }
    });
}
