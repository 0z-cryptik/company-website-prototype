interface Icon {
  icon: React.ReactNode;
}
export const IconWrapper: React.FC<Icon> = ({ icon }) => {
  return (
    <div className="rounded-full bg-gradient-to-r from-[#34a8c5] to-[#0c57ba] p-2 w-fit">
      {icon}
    </div>
  );
};
