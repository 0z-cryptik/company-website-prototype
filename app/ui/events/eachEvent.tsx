import Image from "next/image";

interface Event {
  title: string;
  src: string;
}

export const EachEvent: React.FC<Event> = ({ title, src }) => {
  return (
    <div className="px-4 rounded-xl pt-4 pb">
      <Image className="rounded-xl"
        src={src}
        alt="event poster"
        width={100}
        height={100}
      />
    </div>
  );
};
