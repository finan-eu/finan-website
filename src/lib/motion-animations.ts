import { animate, inView } from 'motion';

const prefersReducedMotion =
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const baseOptions = {
  duration: 0.9,
  ease: [0.25, 0.1, 0.25, 1], // Smooth cubic-bezier with no overshoot
};

const setInitial = (
  elements: Element[],
  options: { y?: number; scale?: number }
) => {
  elements.forEach((element) => {
    const target = element as HTMLElement;
    if (target.dataset.motionAnimated === 'true') {
      return;
    }
    if (target.dataset.motionOpacity !== 'false') {
      target.style.opacity = '0';
    }
    const translateY = `translateY(${options.y ?? 0}px)`;
    const scaleValue = options.scale ?? 1;
    target.style.transform = `${translateY} scale(${scaleValue})`;
  });
};

const animateFadeUp = (elements: Element[]) => {
  if (!elements.length) return;

  elements.forEach((element) => {
    const target = element as HTMLElement;
    const offset = Number(target.dataset.motionOffset ?? '28');
    const scale = Number(target.dataset.motionScale ?? '1');
    const duration = Number(
      target.dataset.motionDuration ?? baseOptions.duration
    );

    setInitial([element], { y: offset, scale });

    let stop = () => {};
    const margin = (target.dataset.motionMargin ?? '0px 0px -10% 0px') as any;
    stop = inView(
      element,
      () => {
        const useOpacity = target.dataset.motionOpacity !== 'false';
        const scaleValue = Number(target.dataset.motionScale ?? '1');
        // Allow custom end scale, defaulting to 1.001 to prevent layer de-promotion flicker
        const scaleEndValue = Number(target.dataset.motionScaleEnd ?? '1.001');

        const finalTransform =
          offset === 0
            ? `scale(${scaleEndValue})`
            : `translateY(0px) scale(${scaleEndValue})`;

        animate(
          element as Element,
          {
            ...(useOpacity ? { opacity: [0, 1] } : {}),
            transform: [
              `translateY(${offset}px) scale(${scaleValue})`,
              finalTransform,
            ],
          } as unknown as Record<string, unknown>,
          {
            ...baseOptions,
            duration,
          } as unknown as Record<string, unknown>
        );
        (element as HTMLElement).dataset.motionAnimated = 'true';
        stop();
      },
      { margin }
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
    const margin = ((container as HTMLElement).dataset.motionMargin ??
      '0px 0px -10% 0px') as any;

    children.forEach((child, index) => {
      const target = child as HTMLElement;
      if (target.dataset.motionAnimated === 'true') {
        return;
      }
      const useOpacity = target.dataset.motionOpacity !== 'false';
      let stop = () => {};
      stop = inView(
        child,
        () => {
          animate(
            child as Element,
            {
              ...(useOpacity ? { opacity: [0, 1] } : {}),
              transform: ['translateY(22px)', 'translateY(0px)'],
            } as unknown as Record<string, unknown>,
            {
              ...baseOptions,
              delay: index * staggerDelay,
            } as unknown as Record<string, unknown>
          );
          target.dataset.motionAnimated = 'true';
          stop();
        },
        { margin }
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
