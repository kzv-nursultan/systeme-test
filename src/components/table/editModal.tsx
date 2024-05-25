import { useState } from "react";
import Modal from "./modal";

interface Props {
  row: Record<string, string | object>;
}

const getStringFields = <T extends object>(data: T) => {
  return Object.entries(data).reduce((acc, [key, value]) => {
    if (typeof value === "string") {
      acc[key] = value;
    } else if (typeof value === "object") {
      acc[key] = getStringFields(value);
    }
    return acc;
  }, {} as Record<string, string | object>);
};

export default function EditModal({ row }: Props) {
  const [showModal, setShowModal] = useState(false);
  const [defaultValue, setDefaultValue] = useState(() => getStringFields(row));
  const modalHandler = () => setShowModal((prev) => !prev);

  const changeHandler = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;
    setDefaultValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      <button
        type="button"
        onClick={modalHandler}
        className="focus:outline-none capitalize text-white bg-purple-700 hover:bg-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
      >
        edit
      </button>
      <Modal
        show={showModal}
        modalHandler={modalHandler}
        title="edit"
        onConfirm={() => {}}
      >
        <div className="flex gap-2 flex-col">
          {Object.entries(defaultValue).map(([key, value]) => (
            <input
              key={key}
              name={key}
              className="border py-1 px-2 rounded-lg"
              value={value as string}
              onChange={changeHandler}
            />
          ))}
        </div>
      </Modal>
    </>
  );
}
