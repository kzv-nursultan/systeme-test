import debounce from "lodash.debounce";

interface Props {
  title: string;
  onChangeHandler: (value: React.SetStateAction<string>) => void;
}
export default function Heading({ title, onChangeHandler }: Props) {
  const changeHandler = debounce(
    (e: React.ChangeEvent<HTMLInputElement>) => onChangeHandler(e.target.value),
    600
  );
  return (
    <div className="flex items-center justify-between pb-3">
      <h1 className="text-xl capitalize font-bold">{title}</h1>
      <input
        className="border p-2 rounded-lg min-w-52 md:w-1/4"
        placeholder="Search..."
        onChange={changeHandler}
      />
    </div>
  );
}
