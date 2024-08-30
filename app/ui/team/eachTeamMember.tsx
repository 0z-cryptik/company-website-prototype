import Image from "next/image";

interface TeamMember {
  name: string;
  position: string;
  src: string;
  raise?: boolean;
  desc: string;
}

export const EachTeamMember: React.FC<TeamMember> = ({
  name,
  position,
  src,
  desc,
  raise
}) => {
  return (
    <figure className={`${raise && "raise"} font-mono  border rounded-xl`}>
      <Image
        className="rounded-t-xl"
        src={src}
        height={400}
        width={400}
        alt={desc}
      />

      <figcaption className="py-7">
        <p className="text-center text-lg font-semibold">{name}</p>
        <p className="text-center text-xs font-thin mt-2">{position}</p>
      </figcaption>
    </figure>
  );
};
