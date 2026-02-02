import { initMotionAnimations } from './motion-animations';

function initAnimations() {
  if (typeof window !== 'undefined') {
    initMotionAnimations();
  }
}

document.addEventListener('astro:page-load', initAnimations);

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAnimations);
} else {
  initAnimations();
}
