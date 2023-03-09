import rive from '@rive-app/canvas';

export function initMandalas() {
  if (document.getElementById('mandala-2')) {
    const animation1 = new rive.Rive({
      src: 'https://scrl.wizarre.io/files/mandala.riv',
      canvas: document.getElementById('mandala-1'),
      autoplay: true,
      animations: 'mandala-rotate',
    });
    const animation2 = new rive.Rive({
      src: 'https://scrl.wizarre.io/files/mandala.riv',
      canvas: document.getElementById('mandala-2'),
      autoplay: true,
      animations: 'mandala-rotate',
    });
    animation1.on('load', () => {
      // only added animations can be scrubbed.
      animation1.pause(['mandala-rotate']);
      animation1.scrub(['mandala-rotate'], 0);
    });
    animation2.on('load', () => {
      // only added animations can be scrubbed.
      animation2.pause(['mandala-rotate']);
      animation2.scrub(['mandala-rotate'], 0);
    });
    document.getElementsByTagName('body')[0].onscroll = () => {
      const totalScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrub = 1 * (window.scrollY / totalScroll).toFixed(3);
      const scrubModifier = 8;
      animation1.scrub('mandala-rotate', scrub * scrubModifier);
      animation2.scrub('mandala-rotate', scrub * scrubModifier);
    };
  }
}
