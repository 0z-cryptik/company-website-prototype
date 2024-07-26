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
    <div className="flex flex-col gap-y-7">
      {Icon}
      <Counter
        duration={counterDuration}
        end={followers}
      />
      <div className="w-fit mx-auto">
        <p>{nameArr[0]}</p>
        <p>{nameArr[1]}</p>
      </div>
    </div>
  );
};
