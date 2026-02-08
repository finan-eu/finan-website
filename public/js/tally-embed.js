const doc = document;
const widgetSrc = 'https://tally.so/widgets/embed.js';

const loadEmbeds = () => {
  if (typeof Tally !== 'undefined') {
    Tally.loadEmbeds();
    return;
  }

  doc
    .querySelectorAll('iframe[data-tally-src]:not([src])')
    .forEach((iframe) => {
      iframe.src = iframe.dataset.tallySrc ?? '';
    });
};

if (typeof Tally !== 'undefined') {
  loadEmbeds();
} else if (doc.querySelector(`script[src="${widgetSrc}"]`) == null) {
  const script = doc.createElement('script');
  script.src = widgetSrc;
  script.onload = loadEmbeds;
  script.onerror = loadEmbeds;
  doc.body.appendChild(script);
} else {
  loadEmbeds();
}
