const generateId = require("./generateId");

let softSkills = [
  {
    id: generateId(),
    name: "Adapts to change",
    description: "",
  },
  {
    id: generateId(),
    name: "Analyses information",
    description: "",
  },
  {
    id: generateId(),
    name: "Builds networks",
    description: "",
  },
  {
    id: generateId(),
    name: "Creates ideas",
    description: "",
  },
];

const getSoftSkills = () => softSkills;

const createSoftSkill = (name, description) => {
  const ss = {
    id: generateId(),
    name,
    description,
  };

  softSkills.push(ss);
  return ss;
};

module.exports = {
  getSoftSkills,
  createSoftSkill,
};
