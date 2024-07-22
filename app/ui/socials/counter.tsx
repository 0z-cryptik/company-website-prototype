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
    console.log(interval);

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

  return <p className="text-2xl">{Math.ceil(value)}</p>;
};
