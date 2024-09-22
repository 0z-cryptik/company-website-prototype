import { useState, useEffect, useRef, MutableRefObject } from "react";

interface Options {
  root: null;
  rootMargin: string;
  threshold: number;
}

export const useIntersectionObserver = (
  threshold?: number
): [boolean, MutableRefObject<null>] => {
  const [visible, setVisible] = useState(false);
  const containerRef = useRef(null);
  const thresholdValue = threshold ? threshold : 1.0;

  const options: Options = {
    root: null,
    rootMargin: "0px",
    threshold: thresholdValue
  };

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        // Set visible to true only the first time it becomes intersecting
        setVisible(true);
      }
    }, options);

    const refActive = containerRef.current;

    if (refActive) {
      observer.observe(refActive);
    }

    return () => {
      if (refActive) {
        observer.unobserve(refActive);
      }
    };
  }, [visible, options]);

  return [visible, containerRef];
};
