"use client";

import {
  useContext,
  createContext,
  useState,
  Dispatch,
  SetStateAction
} from "react";

interface Context {
  menuOpen: boolean;
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
}

const myContext = createContext<Context | undefined>(undefined);

export const useList = () => {
  const context = useContext(myContext);

  if (!context) {
    throw new Error("must be used within a state provider");
  }

  return context;
};

interface GlobalState {
  children: React.ReactNode;
}

export const StateProvider: React.FC<GlobalState> = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <myContext.Provider value={{ menuOpen, setMenuOpen }}>
      {children}
    </myContext.Provider>
  );
};
