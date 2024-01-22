import { FC, useEffect, useState } from "react";
import "./styles.scss";
import { TextInputField } from "components/molecules/TextInputField";
import { SoftSkillsList } from "./SoftSkillsList";
import { SoftSkill, useSoftSkillsQuery } from "generated/graphql";

interface ISoftSkills { }

const SoftSkills: FC<ISoftSkills> = () => {
  // TODO: 1. Implement getting soft skills from api.
  const [softSkills, setSoftSkills] = useState<SoftSkill[]>([] as SoftSkill[]);
  const { data, loading, error } = useSoftSkillsQuery();
  console.log(softSkills)
  // const blah = { __typename: 'SoftSkill', id: 'CtGOY0mZZN4c6tgYj4fKB', name: 'Adapts to change', description: '' } as SoftSkill;
  // const { data, loading, error } = useSoftSkillsQuery({
  //   variables: {
  //     softSkills: [blah]
  //   },
  // });

  const retrieveSoftSkills = () => {
    // const { data, loading, error } = useSoftSkillsQuery();
    const result = data?.softSkills;

    if (result) {
      setSoftSkills(result as SoftSkill[]);
    }
  }

  useEffect(() => {
    retrieveSoftSkills();
  });


  //console.log(data);

  // TODO: 3. Implement logic for searching soft skills.


  const renderLoadingMessage = () => <p>Loading...</p>

  const renderErrorMessage = () => <p>Error: {error?.message}</p>

  return (
    <div className="soft-skills">
      <div className="soft-skills__content">
        <h1 className="soft-skills__title">Soft Skills</h1>
        {
          loading && renderLoadingMessage()
        }
        {
          error && renderErrorMessage()
        }
        {
          !loading && !error &&
          <>
            <div className="soft-skills__actions">
              <TextInputField
                id="search"
                label="Search"
                placeholder="Search"
                onChange={() => { }}
                value={""}
              />
            </div>
            <SoftSkillsList softSkills={softSkills} />
          </>
        }
      </div>
    </div>
  );
};

export default SoftSkills;
