import { FC } from "react";
import "./styles.scss";
import { TextInputField } from "components/molecules/TextInputField";
import { SoftSkillsList } from "./SoftSkillsList";
import { useSoftSkillsQuery } from "generated/graphql";

interface ISoftSkills { }

const SoftSkills: FC<ISoftSkills> = () => {
  // TODO: 1. Implement getting soft skills from api.
  const { data, loading, error } = useSoftSkillsQuery();

  console.log(data);

  // TODO: 3. Implement logic for searching soft skills.

  return (
    <div className="soft-skills">
      <div className="soft-skills__content">
        <h1 className="soft-skills__title">Soft Skills</h1>
        <div className="soft-skills__actions">
          <TextInputField
            id="search"
            label="Search"
            placeholder="Search"
            onChange={() => { }}
            value={""}
          />
        </div>
        <SoftSkillsList />
      </div>
    </div>
  );
};

export default SoftSkills;
