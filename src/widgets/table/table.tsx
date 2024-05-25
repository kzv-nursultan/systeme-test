import { Dispatch, SetStateAction } from "react";
import Body from "./components/body";
import Head from "./components/head";
import { Column } from "../../app/constants/types";

type TableProps<T> = {
  data: T[];
  columns: Column<T>[];
  setData: Dispatch<SetStateAction<T[]>>;
  editable?: boolean;
};

export default function Table<T>({
  data,
  columns,
  editable,
  setData,
}: TableProps<T>) {
  return (
    <div className="overflow-auto">
      <table className="w-full">
        <Head columns={columns} />
        <Body data={data} renderEdit={editable} setData={setData} />
      </table>
    </div>
  );
}
