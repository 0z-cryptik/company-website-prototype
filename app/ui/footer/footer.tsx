export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className="lg:mt-[3rem] mt-[1.5rem] ml-[7.5%] pb-5 lg:flex lg:flex-row font-mono">
      <p className="mt-[-0.15rem] hidden lg:block">©</p>
      <p className="font-thin text-sm ml-2 hidden lg:block">
        {year} BlueWave. All rights reserved.
      </p>
      <p className="lg:hidden font-thin text-sm">© {year} BlueWave. All rights reserved.</p>
    </div>
  );
};
