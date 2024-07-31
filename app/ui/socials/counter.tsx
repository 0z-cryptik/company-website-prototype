"use client";

import { useEffect, useState } from "react";

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

  const formatValue = (): string => {
    const valStr = value.toString();
    if (value >= 1000 && value < 10000) {
      return `${valStr[0]},${valStr[1]}${valStr[2]}${valStr[3]}+`;
    } else if (value >= 10000 && value < 100000) {
      return `${valStr[0]}${valStr[1]},${valStr[2]}${valStr[3]}${valStr[4]}+`;
    } else if (value >= 100000) {
      return `${valStr[0]}${valStr[1]}${valStr[2]},${valStr[3]}${valStr[4]}${valStr[5]}+`;
    } else {
      return valStr;
    }
  };

  useEffect(() => {
    if (value != end) {
      count();
    }
  });

  return (
    <p className="text-[1.6rem] font-bold w-[8rem]">{formatValue()}</p>
  );
};
