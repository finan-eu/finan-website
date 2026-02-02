import { animate, inView, stagger } from 'motion';

const prefersReducedMotion =
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const baseOptions = {
  duration: 0.9,
  ease: 'easeOut',
};

const setInitial = (elements: Element[], options: { y?: number }) => {
  elements.forEach((element) => {
    const target = element as HTMLElement;
    target.style.opacity = '0';
    target.style.transform = `translateY(${options.y ?? 0}px)`;
  });
};

const animateFadeUp = (elements: Element[]) => {
  if (!elements.length) return;

  setInitial(elements, { y: 28 });

  elements.forEach((element) => {
    let stop = () => {};
    stop = inView(
      element,
      () => {
        animate(
          element as Element,
          {
            opacity: [0, 1],
            transform: ['translateY(28px)', 'translateY(0px)'],
          } as unknown as Record<string, unknown>,
          baseOptions as unknown as Record<string, unknown>
        );
        stop();
      },
      { margin: '0px 0px -10% 0px' }
    );
  });
};

const animateStaggerChildren = (containers: Element[]) => {
  if (!containers.length) return;

  containers.forEach((container) => {
    const children = Array.from(container.children);
    if (!children.length) return;

    setInitial(children, { y: 22 });

    const staggerDelay = Number(
      (container as HTMLElement).dataset.motionStagger ?? '0.12'
    );

    children.forEach((child, index) => {
      let stop = () => {};
      stop = inView(
        child,
        () => {
          animate(
            child as Element,
            {
              opacity: [0, 1],
              transform: ['translateY(22px)', 'translateY(0px)'],
            } as unknown as Record<string, unknown>,
            {
              ...baseOptions,
              delay: index * staggerDelay,
            } as unknown as Record<string, unknown>
          );
          stop();
        },
        { margin: '0px 0px -10% 0px' }
      );
    });
  });
};

export function initMotionAnimations(): void {
  if (typeof window === 'undefined' || prefersReducedMotion) {
    return;
  }

  const fadeUpElements = Array.from(
    document.querySelectorAll('.motion-fade-up')
  );
  animateFadeUp(fadeUpElements);

  const staggerContainers = Array.from(
    document.querySelectorAll('.motion-stagger-children')
  );
  animateStaggerChildren(staggerContainers);
}
