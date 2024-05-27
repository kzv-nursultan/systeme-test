import { Dispatch, SetStateAction, useCallback, useState } from "react";
import { Modal } from "../../shared";

type ID = {
  id: number;
};

type ID_Generic<T> = ID & T;

type Props<T> = {
  row: Record<string, string | object>;
  data: T[];
  setData: Dispatch<SetStateAction<T[]>>;
};

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

export default function EditModal<T>({ row, data, setData }: Props<T>) {
  const [showModal, setShowModal] = useState(false);
  const [defaultValue, setDefaultValue] = useState(() => getStringFields(row));
  const modalHandler = useCallback(() => setShowModal((prev) => !prev), []);

  const changeHandler = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;
    setDefaultValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const saveChanges = () => {
    const editedData = [...data].map((obj) =>
      (obj as ID_Generic<T>).id === Number(row.id)
        ? { ...obj, ...defaultValue }
        : obj
    );
    setData(editedData);
    modalHandler();
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
        onConfirm={saveChanges}
      >
        <div className="flex gap-2 flex-col">
          {Object.entries(defaultValue).map(([key, value]) => (
            <div className="text-left" key={key}>
              <h4 className="capitalize mb-2 font-bold">{key}</h4>
              <input
                name={key}
                className="border p-2 rounded-lg w-full"
                value={value as string}
                onChange={changeHandler}
              />
            </div>
          ))}
        </div>
      </Modal>
    </>
  );
}
