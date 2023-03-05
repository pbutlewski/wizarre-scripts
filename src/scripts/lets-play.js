export function initLetsPlay() {
  // constant elements: your main scrolling element; html element
  const scrollEl = document.documentElement;
  const root = document.documentElement;

  let scrollPos;
  let parentPosition;
  // update css property on scroll
  function animation() {
    // check the scroll position has changed
    if (scrollPos !== scrollEl.scrollTop) {
      // reset the seen scroll position
      parentPosition =
        window.pageYOffset +
        document.querySelector('.is--lets-play-section').getBoundingClientRect()
          .top;
      scrollPos = easeOutSine(
        scrollEl.scrollTop,
        scrollPos,
        scrollEl.scrollTop - parentPosition,
        300
      );
      // update css property --scrollPos with scroll position in pixels
      root.style.setProperty('--scrollPos', scrollPos + 'px');
    }

    // call animation again on next animation frame
    window.requestAnimationFrame(animation);
  }

  // start animation on next animation frame
  window.requestAnimationFrame(animation);
}
function easeOutSine(t, b, c, d) {
  return c * Math.sin((t / d) * (Math.PI / 2)) + b;
}
