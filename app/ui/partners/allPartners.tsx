import { partnersArr } from "./partners";
import { EachPartner } from "./eachPartner";

export const AllPartners = () => {
  return (
    <section className="overflow-hidden border w-[80%] mx-auto mt-[3rem]">
        {/* There's a bug in the line below w-[120vw] */}
      <div className="scroll-content w-[120vw] grid grid-cols-10 gap-y-4 gap-x-4">
        {partnersArr.map((partnerLogoLink, i) => (
          <EachPartner
            key={i}
            src={partnerLogoLink}
          />
        ))}
      </div>
    </section>
  );
};
