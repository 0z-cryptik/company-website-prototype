import Image from "next/image";
import { useIntersectionObserver } from "@/app/hooks/intersectionObserver";

export const Divider = () => {
  const [visible, containerRef] = useIntersectionObserver();

  return (
    <center
      ref={containerRef}
      className={`divider ${visible && "dividerAnimation"}`}>
      <Image
        src={"./divider.svg"}
        alt="page divider"
        width={100}
        height={100}
      />
    </center>
  );
};
