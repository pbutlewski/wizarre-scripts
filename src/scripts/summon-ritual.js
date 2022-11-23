import scrollama from 'scrollama';

export function ritualAnimation() {
  const scroller2 = scrollama();
  const path = document.querySelector('#path');
  const length = path.getTotalLength();
  path.style.strokeDasharray = length;
  path.style.strokeDashoffset = length;

  scroller2
    .setup({
      step: '#ritual',
      offset: 0.5,
      progress: true,
      debug: false,
      threshold: 1,
    })
    .onStepProgress((response) => {
      let draw = length * response.progress;
      path.style.strokeDashoffset = length - draw;
    });
}
