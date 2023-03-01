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
        [...ritualBoxes].forEach((element) => activateIfDisabled(element));
        activateIfDisabled(ritualHeadline);
      } else {
        [...ritualBoxes].forEach((element) => disableIfActiavted(element));
        disableIfActiavted(ritualHeadline);
      }
    })
    .onStepExit((response) => {
      // { element, index, direction }
      if (response.direction === 'down') {
        [...ritualBoxes].forEach((element) => activateIfDisabled(element));
        activateIfDisabled(ritualHeadline);
      } else {
        [...ritualBoxes].forEach((element) => disableIfActiavted(element));
        disableIfActiavted(ritualHeadline);
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
        [...ritualImages].forEach((element) => activateIfDisabled(element));
      } else {
        [...ritualImages].forEach((element) => disableIfActiavted(element));
      }
    })
    .onStepExit((response) => {
      // { element, index, direction }
      if (response.direction === 'down') {
        [...ritualImages].forEach((element) => activateIfDisabled(element));
      } else {
        [...ritualImages].forEach((element) => disableIfActiavted(element));
      }
    });
}
function activateIfDisabled(element) {
  element.classList.contains('is--active')
    ? null
    : element.classList.add('is--active');
}
function disableIfActiavted(element) {
  element.classList.contains('is--active')
    ? element.classList.remove('is--active')
    : null;
}
