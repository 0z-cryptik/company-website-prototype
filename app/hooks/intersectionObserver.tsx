import { useState, useEffect, useRef, MutableRefObject } from "react";

interface Options {
  root: null;
  rootMargin: string;
  threshold: number;
}

export const useIntersectionObserver = (
  threshold?: number,
  observeOnce = true
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
    //entry is destructured from an array of entries
    const observer = new IntersectionObserver(([entry]) => {
      if (!observeOnce) {
        setVisible(entry.isIntersecting);
      } else if (observeOnce && entry.isIntersecting) {
        setVisible(true);
      }
    }, options);

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  });

  return [visible, containerRef];
};
