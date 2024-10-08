import { IoMdMenu } from "react-icons/io";
import { useList } from "@/app/hooks/context";

export const MenuButton = () => {
  const { menuOpen, setMenuOpen } = useList();

  return (
    <button
      onClick={() => {
        setMenuOpen(!menuOpen);
      }}
      className="ml-auto lg:hidden">
      <IoMdMenu size={35} />
    </button>
  );
};
