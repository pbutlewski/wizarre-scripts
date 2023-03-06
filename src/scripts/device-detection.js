const getMobileOS = () => {
  const ua = navigator.userAgent;
  if (/android/i.test(ua)) {
    return 'Android';
  } else if (
    /iPad|iPhone|iPod/.test(ua) ||
    (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)
  ) {
    return 'iOS';
  }
  return 'Other';
};
export function initDeviceDetection() {
  const x = window.matchMedia('(max-width: 768px)');
  if (x.matches) {
    const device = getMobileOS();
    const downloadButtons = document.querySelectorAll('.download');
    const moreButton = document.querySelector('.more-platforms');
    const buttonsForOther = [...downloadButtons].filter(
      (button) => button.dataset.device !== device
    );
    buttonsForOther.forEach((button) => button.classList.add('hide'));
    moreButton.classList.add('active');
    moreButton.addEventListener(
      'click',
      (e) => {
        e.preventDefault();
        buttonsForOther.forEach((button) => button.classList.remove('hide'));
        moreButton.classList.remove('active');
      },
      false
    );
  }
}
