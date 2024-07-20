import Image from "next/image";
import { inknutAntiqua } from "../../fonts";

interface EachServiceProps {
  image: string;
  heading: string;
  text: string;
  imageAlt: string;
}

export const EachService: React.FC<EachServiceProps> = ({
  image,
  heading,
  text,
  imageAlt
}) => {
  return (
    <div className="flex flex-row">
      <Image
        src={image}
        alt={imageAlt}
        width={30}
        height={30}
      />
      <div>
        <h1
          className={`${inknutAntiqua.className} antialiased text-[1.9rem] font-extrabold`}>
          {heading}
        </h1>
        <p className="mt-5">{text}</p>
      </div>
    </div>
  );
};
