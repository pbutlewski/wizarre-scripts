import { init } from './scripts/sticky-menu';
import { mobileMenu } from './scripts/mobile-menu';
import { ritualAnimation } from './scripts/summon-ritual';
import { initLandSlider } from './scripts/land-slider';
import { ritualSections } from './scripts/ritual-sections';
import { initMandalas } from './scripts/mandalas';
import { wizardSlider } from './scripts/wizard-slider';

window.Webflow ||= [];
window.Webflow.push(() => {
  init();
  mobileMenu();
  ritualAnimation();
  ritualSections();
  initLandSlider();
  initMandalas();
  wizardSlider();
});