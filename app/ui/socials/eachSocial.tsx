import { Counter } from "./counter";

interface Social {
  name: string;
  followers: number;
  counterDuration: number;
  Icon: React.ReactNode;
}

export const SocialMedia: React.FC<Social> = ({
  name,
  followers,
  counterDuration,
  Icon
}) => {
  const nameArr = name.split(" ");

  return (
    <div className="flex flex-col gap-y-3">
      {Icon}
      <Counter
        duration={counterDuration}
        end={followers}
      />
      <div className="w-fit mx-auto text-center">
        <p className="hidden lg:block">{nameArr[0]}</p>
        <p className="hidden lg:block">{nameArr[1]}</p>
        <p className="lg:hidden">{nameArr[0]} {nameArr[1]}</p>
      </div>
    </div>
  );
};
