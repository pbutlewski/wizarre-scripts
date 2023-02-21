export function initLandSlider() {
  let lands = document.querySelectorAll('template.land');
  lands = [...lands].map((land) => {
    return {
      name: land.content.querySelector('.name'),
      image: land.content.querySelector('img'),
      coordinates: land.content.querySelector('.coordinates'),
      type: land.content.querySelector('.type'),
      element: land.content.querySelector('.element'),
      rarity: land.content.querySelector('.rarity'),
      power: land.content.querySelector('.power'),
    };
  });
  let landSlider = document.querySelector('.land-slider');
  landSlider = {
    image: landSlider.querySelector('.land-photo__image'),
    type: landSlider.querySelector('#land-type'),
    coordinates: landSlider.querySelector('#land-coordinates'),
    element: landSlider.querySelector('#land-element'),
    rarity: landSlider.querySelector('#land-rarity'),
    power: landSlider.querySelector('#land-power'),
  };
  switchLands(0, lands, landSlider);
  let landIndex = 0;
  const arrowLeft = document.querySelector('#land-left');
  arrowLeft.addEventListener('click', (element) => {
    element.preventDefault();
    landIndex -= 1;
    if (landIndex < 0) landIndex = lands.length - 1;
    switchLands(landIndex, lands, landSlider);
  });
  const arrowRight = document.querySelector('#land-right');
  arrowRight.addEventListener('click', (element) => {
    element.preventDefault();
    landIndex += 1;
    switchLands(landIndex, lands, landSlider);
  });
}

function switchLands(id, lands, slider) {
  const shadow = document.querySelector(".land-photo__shadow");
  const shadowcopy = elm.cloneNode(true);
  shadow.parentNode.replaceChild(shadowcopy, shadow);
  id = id % lands.length;
  slider.image.replaceChildren(lands[id].image);
  slider.type.replaceChildren(lands[id].type);
  slider.coordinates.replaceChildren(lands[id].coordinates);
  slider.element.replaceChildren(lands[id].element);
  slider.rarity.replaceChildren(lands[id].rarity);
  slider.power.replaceChildren(lands[id].power);
}
