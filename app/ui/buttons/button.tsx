import { inknutAntiqua } from "../fonts";

interface Button {
  children: React.ReactNode;
}

export const CustomButton: React.FC<Button> = ({ children }) => {
  return (
    <button
      className={`${inknutAntiqua.className} bg-gradient-to-r from-[#34a8c5] to-[#0c57ba] p-4 mt-7 rounded-2xl flex`}>
      {children}
    </button>
  );
};
