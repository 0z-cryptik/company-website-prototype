import { EachTeamMember } from "./eachTeamMember";

export const AllTeamMembers = () => {
  return (
    <div className="flex flex-row gap-10 w-[85%] mx-auto mt-[5rem]">
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
