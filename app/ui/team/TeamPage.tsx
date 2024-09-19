import { AnimatedHeader } from "../header";
import { AllTeamMembers } from "./allTeamMembers";

export const TeamPage = () => {
  return (
    <section className="mt-[5rem] mb-[7rem]">
      <AnimatedHeader
        text="Meet Our Team"
        extraStyling="w-fit mx-auto"
      />
      <AllTeamMembers />
    </section>
  );
};
