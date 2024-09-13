import { EachTeamMember } from "./eachTeamMember";

export const AllTeamMembers = () => {
  return (
    <div className="lg:flex lg:flex-row grid grid-cols-2  gap-4 max-lg:px-4 lg:gap-10 lg:w-[85%] lg:mx-auto mt-[3rem] lg:mt-[5rem]">
      <EachTeamMember
        name="Anne"
        src="/team/1.jpg"
        position="Co-founder"
        desc="Co-founder's picture"
      />
      <EachTeamMember
        name="Timmy"
        src="/team/2.jpg"
        position="Project Manager"
        desc="Project manager's picture"
        raise
      />
      <EachTeamMember
        name="James"
        src="/team/3.jpg"
        position="Founder"
        desc="Founder's picture"
      />
      <EachTeamMember
        name="Marcus"
        src="/team/4.jpg"
        position="CEO"
        desc="CEO's picture"
        raise
      />
    </div>
  );
};
