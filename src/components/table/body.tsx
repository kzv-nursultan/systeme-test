import { ReactNode } from "react";

interface DataCellProps {
  children: ReactNode;
  styles?: string;
}

interface Props<T> {
  data: T[];
}

const DataCell = ({ children, styles }: DataCellProps) => (
  <td
    className={`px-6 py-4 font-medium text-gray-900 text-center border ${styles}`}
  >
    {children}
  </td>
);

const TableState = ({ text }: { text: string }) => (
  <tr>
    <td className="text-center" colSpan={8} rowSpan={3}>
      <p className="py-5">{text}</p>
    </td>
  </tr>
);

const handleNestedData = <T extends object,>(row: Record<string, T>): Record<string, T> => {
  const noNestingObj: Record<string, T> = {};
  Object.keys(row).forEach((key) => {
    //if (key.toUpperCase() === "ID") return;
    if (typeof row[key] === "object") {
      Object.entries(row[key]).forEach(
        ([name, value]) => (noNestingObj[name] = value)
      );
    } else {
      noNestingObj[key] = row[key];
    }
  });
  return noNestingObj;
};

export default function Body<T>({ data }: Props<T>) {
  if (data?.length === 0)
    return (
      <tbody>
        <TableState text="No Data Found..." />
      </tbody>
    );

  return (
    <tbody>
      {data?.map((row, i) => {
        const obj = handleNestedData(row as any);
        return (
          <tr key={i}>
            {Object.keys(obj).map((key) => (
              <DataCell key={key}>{obj[key]?.toString()}</DataCell>
            ))}
          </tr>
        );
      })}
    </tbody>
  );
}
