import { Column } from "../../constants/types";
import Body from "./body";
import Head from "./head";

type TableProps<T> = {
  data: T[];
  columns: Column<T>[];
  editable?: boolean;
};

export default function Table<T>({ data, columns, editable }: TableProps<T>) {
  return (
    <table className="border w-full whitespace-nowrap">
      <Head columns={columns} />
      <Body data={data} renderEdit={editable} />
    </table>
  );
}
