import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface AnimatedTextProps {
  children: React.ReactNode;
  delay?: number;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ children, delay = 0 }) => {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (textRef.current) {
      gsap.from(textRef.current, {
        y: 30,
        opacity: 0,
        duration: 1,
        delay,
        ease: "power3.out"
      });
    }
  }, [delay]);

  return <div ref={textRef}>{children}</div>;
};

export default AnimatedText;