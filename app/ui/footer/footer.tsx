export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className="mt-[3rem] ml-[7.5%] pb-5 flex flex-row">
      <p className="mt-[-0.15rem]">©</p>
      <p className="font-mono font-thin text-sm ml-2">
        {year} BlueWave. All rights reserved.
      </p>
    </div>
  );
};
