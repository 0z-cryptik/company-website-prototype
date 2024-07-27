"use client";

import { useState } from "react";

interface Counter {
  end: number;
  duration: number;
}

export const Counter: React.FC<Counter> = ({ end, duration }) => {
  const [value, setValue] = useState(0);

  const count = (): void => {
    const interval = duration / end;

    const myInterval = setInterval(() => {
      setValue((prevValue) => {
        if (prevValue >= end) {
          clearInterval(myInterval);
          return end;
        }
        return prevValue + 1;
      });
    }, interval);
  };

  count();

  return <p className="text-[1.6rem] font-bold">{Math.ceil(value)}</p>;
};
