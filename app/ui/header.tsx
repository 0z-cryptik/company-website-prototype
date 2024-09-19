import { inknutAntiqua } from "./fonts";
import { useIntersectionObserver } from "../hooks/intersectionObserver";

interface HeaderProps {
  text: string;
  extraStyling?: string;
  specifiedSizeInExtraStyling?: boolean;
}

export const AnimatedHeader: React.FC<HeaderProps> = ({
  text,
  extraStyling,
  specifiedSizeInExtraStyling = false
}) => {
  const [visible, containerRef] = useIntersectionObserver();

  return (
    <h1
      ref={containerRef}
      className={`${inknutAntiqua.className} ${extraStyling} antialiased ${
        !specifiedSizeInExtraStyling && "max-lg:text-4xl"
      } lg:text-[3.8rem] font-extrabold header ${
        visible && "headerAnimation"
      }`}>
      {text}
    </h1>
  );
};

export const NonAnimatedHeader: React.FC<HeaderProps> = ({
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
