import { FC, useEffect, useState } from "react";
import "./styles.scss";
import { TextInputField } from "components/molecules/TextInputField";
import { SoftSkillsList } from "./SoftSkillsList";
import { SoftSkill, useSoftSkillsQuery } from "generated/graphql";

interface ISoftSkills { }

const SoftSkills: FC<ISoftSkills> = () => {
  // TODO: 1. Implement getting soft skills from api.
  const [softSkills, setSoftSkills] = useState<SoftSkill[]>([] as SoftSkill[]);
  const [filteredSoftSkills, setFilteredSoftSkills] = useState<SoftSkill[]>([] as SoftSkill[]);
  const [searchText, setSearchText] = useState<string>('');

  const { data, loading, error } = useSoftSkillsQuery();
  // console.log(softSkills)
  // const blah = { __typename: 'SoftSkill', id: 'CtGOY0mZZN4c6tgYj4fKB', name: 'Adapts to change', description: '' } as SoftSkill;
  // const { data, loading, error } = useSoftSkillsQuery({
  //   variables: {
  //     softSkills: [blah]
  //   },
  // });

  const retrieveSoftSkills = () => {
    // const { data, loading, error } = useSoftSkillsQuery();

    const result = data?.softSkills;
    console.log(result)
    if (result) {
      setSoftSkills(result as SoftSkill[]);
      setFilteredSoftSkills(result as SoftSkill[]);
    }
  }




  //console.log(data);

  // TODO: 3. Implement logic for searching soft skills.
  const searchSoftSkills = (enteredText: string) => {
    if (enteredText) {
      const result = filteredSoftSkills.filter(skill =>
        skill.name.startsWith(enteredText)
      );
      // console.log(blah)

      setSoftSkills(result as SoftSkill[]);
    } else {
      retrieveSoftSkills();
    }
  }



  const handleOnTextChange = (enteredText: string) => {
    setSearchText(enteredText);
    searchSoftSkills(enteredText);
  }

  const renderLoadingMessage = () => <p>Loading...</p>

  const renderErrorMessage = () => <p>Error: {error?.message}</p>

  // useEffect(() => {
  //   if (data) { retrieveSoftSkills(); }
  // }, []);

  useEffect(() => {
    if (!loading && softSkills.length === 0) { retrieveSoftSkills(); }
  });

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
                onChange={handleOnTextChange}
                value={searchText}
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
