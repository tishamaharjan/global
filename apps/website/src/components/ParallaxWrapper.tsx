import { useEffect, useRef, useState, type ReactNode } from "react";

type AnimationType =
  | "fade-up"
  | "fade-down"
  | "fade-left"
  | "fade-right"
  | "fade-in"
  | "zoom-in"
  | "flip-up";

interface ParallaxWrapperProps {
  children: ReactNode;
  animationType?: AnimationType;
  delay?: number;
  duration?: number;
  threshold?: number;
  rootMargin?: string;
  // once?: boolean;
}

const ParallaxWrapper: React.FC<ParallaxWrapperProps> = ({
  children,
  animationType = "fade-up",
  delay = 0,
  duration = 100,
  threshold = 0.1,
  rootMargin = "0px 0px -29px 0px",
  // once = true,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setTimeout(() => {
            setIsVisible(true);
            // if (once) {
            //   setHasAnimated(true);
            // }
          }, delay);
        } else if (!entry.isIntersecting) {
          setIsVisible(false);
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
  }, [delay, threshold, rootMargin, hasAnimated]);

  const getDuration = (): string => {
    switch (duration) {
      case 300:
        return "duration-300";
      case 500:
        return "duration-500";
      case 700:
        return "duration-700";
      case 1000:
        return "duration-1000";
      default:
        return "duration-1000";
    }
  };

  const getAnimationClasses = (): string => {
    const baseAnimate = `transition-all ${getDuration()} ease-out`;

    if (!isVisible) {
      switch (animationType) {
        case "fade-up":
          return `${baseAnimate} opacity-0 translate-y-16 scale-95`;
        case "fade-down":
          return `${baseAnimate} opacity-0 -translate-y-16 scale-95`;
        case "fade-left":
          return `${baseAnimate} opacity-0 translate-x-16 scale-95`;
        case "fade-right":
          return `${baseAnimate} opacity-0 -translate-x-16 scale-95`;
        case "fade-in":
          return `${baseAnimate} opacity-0 scale-90`;
        case "zoom-in":
          return `${baseAnimate} opacity-0 scale-75`;
        case "flip-up":
          return `${baseAnimate} opacity-0 rotate-x-90 perspective-1000`;
        default:
          return `${baseAnimate} opacity-0 translate-y-16`;
      }
    } else {
      return `transition-all ${getDuration()} ease-out opacity-100 translate-y-0 translate-x-0 scale-100 rotate-x-0`;
    }
  };
  return (
    <div ref={elementRef} className={getAnimationClasses()}>
      {children}
    </div>
  );
};

export default ParallaxWrapper;
