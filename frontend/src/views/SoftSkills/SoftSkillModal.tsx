import { FC, useState } from "react";
import { Modal } from "components/atoms/Modal";
import { TextInputField } from "components/molecules/TextInputField";
import { Button } from "components/atoms/Button";

interface ISoftSkillModal {
  onClose: () => void;
  isOpen: boolean;
}

// Do not work with this component, it will be referenced in joint coding session.
const SoftSkillModal: FC<ISoftSkillModal> = ({ onClose, isOpen }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");

  const handleChangeName = (value: string) => {
    setName(value);

    if (error) {
      setError("");
    }
  };

  const handleCancelClick = () => {
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} className="soft-skill-modal">
      <div className="soft-skill-modal__form">
        <h2 className="soft-skill-modal__title">Soft skill</h2>
        <div className="soft-skill-modal__form-fields">
          <TextInputField
            id="name"
            onChange={handleChangeName}
            label="Name"
            placeholder="Name"
            value={name}
            hasError={Boolean(error)}
            bottomText={error}
          />
          <TextInputField
            id="description"
            onChange={setDescription}
            label="Description"
            placeholder="Description"
            value={description}
          />
        </div>
        <div className="soft-skill-modal__actions">
          <Button variant="secondary" size="medium" onClick={handleCancelClick}>
            Cancel
          </Button>
          <Button size="medium" onClick={() => {}}>
            Submit
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default SoftSkillModal;
