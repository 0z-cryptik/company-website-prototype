import Image from "next/image";

export const Divider = () => {
  return (
    <center>
      <Image
        src={"./divider.svg"}
        alt="page divider"
        width={100}
        height={100}
      />
    </center>
  );
};
