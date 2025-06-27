import { useEffect, useRef, type ReactNode } from "react";

type AnimationType =
  | "fade-up"
  | "fade-down"
  | "fade-left"
  | "fade-right"
  | "fade-in"
  | "zoom-in"
  | "flip-up";

interface EffectProps {
  children: ReactNode;
  animationType?: AnimationType;
  delay?: number;
  threshold?: number;
  rootMargin?: string;
}

const ParallaxContents: React.FC<EffectProps> = ({
  children,
  animationType = "fade-up",
  delay = 0,
  threshold = 0.1,
  rootMargin = "0px 0px -29px 0px",
}) => {
  const elementRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add("animate");
          }, delay);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [delay, threshold, rootMargin]);

  const getAnimationClasses = (): string => {
    switch (animationType) {
      case "fade-up":
        return `transition-all ease-out opacity-0 translate-y-16 scale-95`;
      case "fade-down":
        return `transition-all ease-out opacity-0 -translate-y-16 scale-95`;
      case "fade-left":
        return `transition-all ease-out opacity-0 translate-x-16 scale-95`;
      case "fade-right":
        return `transition-all ease-out opacity-0 -translate-x-16 scale-95`;
      case "fade-in":
        return `transition-all ease-out opacity-0 scale-90`;
      case "zoom-in":
        return `transition-all ease-out opacity-0 scale-75`;
      case "flip-up":
        return `transition-all ease-out opacity-0 rotate-x-90 perspective-1000`;
      default:
        return `transition-all ease-out opacity-0 translate-y-16`;
    }
  };

  return (
    <div ref={elementRef} className={getAnimationClasses()}>
      {children}
    </div>
  );
};

export default ParallaxContents;
