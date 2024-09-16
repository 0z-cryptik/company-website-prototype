import { inknutAntiqua } from "./fonts";

interface HeaderProps {
  text: string;
  extraStyling?: string;
  specifiedSizeInExtraStyling?: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  text,
  extraStyling,
  specifiedSizeInExtraStyling = false
}) => {
  return (
    <h1
      className={`${inknutAntiqua.className} ${extraStyling} antialiased ${
        !specifiedSizeInExtraStyling && "max-lg:text-4xl"
      } lg:text-[3.8rem] font-extrabold`}>
      {text}
    </h1>
  );
};
