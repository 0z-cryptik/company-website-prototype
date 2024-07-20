import { inknutAntiqua } from "./fonts";

interface HeaderProps {
  text: string;
  extraStyling?: string;
}

export const Header: React.FC<HeaderProps> = ({ text, extraStyling }) => {
  return (
    <h1
      className={`${inknutAntiqua.className} ${extraStyling} antialiased text-[3.8rem] font-extrabold`}>
      {text}
    </h1>
  );
};
