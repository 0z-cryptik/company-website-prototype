import { partnersArr } from "./partners";
import { EachPartner } from "./eachPartner";

export const AllPartners = () => {
  return (
    <section className="grid grid-cols-4 gap-y-7 gap-x-[9rem] w-fit mx-auto mt-[3rem]">
      {partnersArr.map((partnerLogoLink, i) => (
        <EachPartner
          key={i}
          src={partnerLogoLink}
        />
      ))}
    </section>
  );
};
