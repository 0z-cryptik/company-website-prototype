import { bebasNeue } from "../fonts";

interface LogoProps {
  size: string;
  additionalStyling?: string;
}

export const Logo: React.FC<LogoProps> = ({ size, additionalStyling }) => {
  return (
    <p
      className={`${bebasNeue.className} ${additionalStyling} ${size} antialiased`}>
      BlueWave
    </p>
  );
};
