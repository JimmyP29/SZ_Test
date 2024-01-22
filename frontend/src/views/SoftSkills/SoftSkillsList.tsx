import Card from "components/atoms/Card";
import { SoftSkill } from "generated/graphql";
import { FC } from "react";

interface ISoftSkillsList {
  softSkills: SoftSkill[];
}

// TODO: 2. Implement soft skills list.
export const SoftSkillsList: FC<ISoftSkillsList> = ({ softSkills }: ISoftSkillsList) => {
  const createSkillsList = () => <>
    {
      softSkills?.map(softSkill => (
        <Card key={softSkill.id}>
          <p>{softSkill.name}</p>
        </Card>
      ))
    }
  </>

  return (<div className="soft-skills-list">
    {createSkillsList()}
  </div>);
};
