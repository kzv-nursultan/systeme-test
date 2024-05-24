import { Column } from "../../constants/types";

type HeaderProps<T> = {
  columns: Column<T>[];
};

export default function Head<T>({ columns }: HeaderProps<T>) {
  return (
    <thead className="bg-gray-50">
      <tr>
        {columns?.map((column, i) => (
          <th
            key={i}
            scope="col"
            className={`px-6 py-3 capitalize border ${
              !i && "sticky left-0 h-fit text-black bg-slate-200"
            }`}
          >
            {column.title || column.key}
          </th>
        ))}
      </tr>
    </thead>
  );
}
