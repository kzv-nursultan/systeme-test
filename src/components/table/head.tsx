import { useMemo } from "react";
import { Column } from "../../constants/types";

type HeaderProps<T> = {
  columns: Column<T>[];
};

const arrangeSubColumns = <T,>(
  columns: Column<T>[]
): { columnsTree: Array<Column<T>[]>; nestingDepth: number } => {
  const columnsTree: Array<Column<T>[]> = [[]];
  let nestingDepth = 0;
  columns.forEach((col) => {
    if (col.subColumns) {
      nestingDepth += 1;
      const { columnsTree: nestedTree } = arrangeSubColumns(col.subColumns);
      columnsTree.push(...nestedTree);
      columnsTree[nestingDepth ? nestingDepth - 1 : nestingDepth].push(col);
    } else {
      columnsTree[0].push(col);
    }
  });
  return { columnsTree, nestingDepth };
};

export default function Head<T>({ columns }: HeaderProps<T>) {
  const { columnsTree, nestingDepth } = useMemo(
    () => arrangeSubColumns(columns),
    [columns]
  );
  return (
    <thead className="bg-gray-50">
      {columnsTree.map((headRow, ind) => (
        <tr key={ind}>
          {headRow.map((column, i) => (
            <th
              key={i}
              scope="col"
              rowSpan={column.subColumns ? undefined : nestingDepth + 1}
              colSpan={column.subColumns && nestingDepth + 1}
              className={`px-6 py-3 capitalize border`}
            >
              {column.title || column.key}
            </th>
          ))}
        </tr>
      ))}
    </thead>
  );
}