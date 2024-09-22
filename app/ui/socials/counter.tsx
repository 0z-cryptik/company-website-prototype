"use client";

import { useEffect, useState } from "react";
import { useIntersectionObserver } from "@/app/hooks/intersectionObserver";

interface Counter {
  end: number;
  duration: number;
}

export const Counter: React.FC<Counter> = ({ end, duration }) => {
  const [value, setValue] = useState(0);
  const [counting, setCounting] = useState(false);
  const [visible, containerRef] = useIntersectionObserver();

  const count = (): void => {
    const interval = 1000 / 60; // Set a consistent frame rate (60fps)
    const totalSteps = Math.floor(duration / interval);
    const incrementValue = Math.ceil(end / totalSteps);

    const myInterval = setInterval(() => {
      setValue((prevValue) => {
        if (prevValue >= end) {
          clearInterval(myInterval);
          return end;
        }
        return prevValue + incrementValue;
      });
    }, interval);
  };

  useEffect(() => {
    if (visible && !counting) {
      setCounting(true);
      count();
    }
  }, [visible, counting]);

  const formatValue = (): string => {
    const valStr = value.toString();
    if (value >= 1000 && value < 10000) {
      return `${valStr[0]},${valStr[1]}${valStr[2]}${valStr[3]}+`;
    } else if (value >= 10000 && value < 100000) {
      return `${valStr[0]}${valStr[1]},${valStr[2]}${valStr[3]}${valStr[4]}+`;
    } else if (value >= 100000) {
      return `${valStr[0]}${valStr[1]}${valStr[2]},${valStr[3]}${valStr[4]}${valStr[5]}+`;
    } else {
      return `${valStr}+`;
    }
  };

  return (
    <p
      ref={containerRef}
      className="text-[1.6rem] font-bold max-md:w-fit md:w-[122.45px] text-center mx-auto">
      {formatValue()}
    </p>
  );
};

