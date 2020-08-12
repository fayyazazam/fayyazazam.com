// Modernized + Minified version of https://github.com/jonathandion/react-tilt
import React from 'react';

type TiltProps = {
  children: React.ReactNode;
  className?: string;
  options?: typeof DEFAULT_SETTINGS | Record<string, any>;
  style?: React.CSSProperties;
};

const DEFAULT_SETTINGS = {
  easing: 'cubic-bezier(.03,.98,.52,.99)',
  max: 2,
  perspective: 1000,
  scale: 0.999,
  speed: 1000
};

function Tilt({ className, children, options = {} }: TiltProps) {
  const elementRef = React.useRef<HTMLDivElement>(null);
  const transitionTimeout = React.useRef<number>();

  const [settings] = React.useState({
    ...DEFAULT_SETTINGS,
    ...options
  });

  const [transform, setTransform] = React.useState('');
  const [transition, setTransition] = React.useState('');

  const getValues = React.useCallback(
    (e: React.MouseEvent) => {
      const rect = elementRef?.current?.getBoundingClientRect();
      const width = elementRef?.current?.offsetWidth || 0;
      const height = elementRef?.current?.offsetHeight || 0;
      const left = rect?.left || 0;
      const top = rect?.top || 0;

      const x = (e.nativeEvent.clientX - left) / width;
      const y = (e.nativeEvent.clientY - top) / height;
      const boundedX = Math.min(Math.max(x, 0), 1);
      const boundedY = Math.min(Math.max(y, 0), 1);

      const tiltX = (-1 * (settings.max / 2 - boundedX * settings.max)).toFixed(
        2
      );
      const tiltY = (-1 * (boundedY * settings.max - settings.max / 2)).toFixed(
        2
      );

      return {
        tiltX,
        tiltY
      };
    },
    [settings.max]
  );

  const onMouseLeave = React.useCallback(() => {
    window.clearTimeout(transitionTimeout.current);
    setTransition(`${settings.speed}ms ${settings.easing}`);

    transitionTimeout.current = window.setTimeout(() => {
      setTransition('');
    }, settings.speed);

    requestAnimationFrame(() => {
      setTransform(
        `perspective(${settings.perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`
      );
    });
  }, [settings.speed, settings.easing, settings.perspective]);

  const onMouseMove = React.useCallback(
    (e: React.MouseEvent) => {
      // Need to persist, otherwise we might lose reference due to
      // event pooling + requestAnimationFrame stack
      e.persist();

      requestAnimationFrame(() => {
        const values = getValues(e);

        setTransform(`perspective(${settings.perspective}px) 
        rotateX(${values.tiltY}deg) 
        rotateY(${values.tiltX}deg) 
        scale3d(${settings.scale}, ${settings.scale}, ${settings.scale})`);
      });
    },
    [getValues, settings.perspective, settings.scale]
  );

  return (
    <div
      className={className}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      ref={elementRef}
      style={{ transition, transform }}
    >
      {children}
    </div>
  );
}

export default Tilt;
