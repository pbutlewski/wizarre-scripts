import scrollama from 'scrollama';

export function ritualSections() {
  const scroller = scrollama();
  const scroller1 = scrollama();

  const ritualBoxes = document.querySelectorAll('.text-box.is--summoning-box');
  const ritualImages = document.querySelectorAll('.ritual-image');
  const ritualHeadline = document.querySelector('.play-info-section');
  [...ritualBoxes].forEach((box) => {
    box.classList.contains('is--active')
      ? box.classList.remove('is--active')
      : null;
  });
  [...ritualImages].forEach((image) => {
    image.classList.contains('is--active')
      ? image.classList.remove('is--active')
      : null;
  });
  ritualHeadline.classList.contains('is--active')
    ? ritualHeadline.classList.remove('is--active')
    : null;
  scroller
    .setup({
      step: '#ritual-animation-start',
      offset: 0.5,
      progress: false,
      debug: false,
      threshold: 2,
    })
    .onStepEnter((response) => {
      // { element, index, direction }
      if (response.direction === 'down') {
        [...ritualBoxes].forEach((element) =>
          element.classList.add('is--active')
        );
        ritualHeadline.classList.add('is--active');
      } else {
        [...ritualBoxes].forEach((element) =>
          element.classList.remove('is--active')
        );
        ritualHeadline.classList.remove('is--active');
      }
    });

  scroller1
    .setup({
      step: '#ritual-animation-middle',
      offset: 0.5,
      progress: false,
      debug: false,
      threshold: 2,
    })
    .onStepEnter((response) => {
      // { element, index, direction }
      if (response.direction === 'down') {
        [...ritualImages].forEach((element) =>
          element.classList.add('is--active')
        );
      } else {
        [...ritualImages].forEach((element) =>
          element.classList.remove('is--active')
        );
      }
    });
}
