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

export default function Body<T>({ data }: Props<T>) {
  // if (employeesList?.length === 0 && !isLoading)
  //   return (
  //     <tbody>
  //       <TableState text="No Data Found..." />
  //     </tbody>
  //   );

  return (
    <tbody>
      {false ? (
        <TableState text="Loading..." />
      ) : (
        data?.map((row, i) => (
          <tr key={i}>
            {Object.keys(row as object).map((key) => (
              <DataCell key={key}>
                {(typeof row[key as keyof object] === "string" ||
                  typeof row[key as keyof object] === "number") &&
                  `${row[key as keyof object]}`}
              </DataCell>
            ))}
          </tr>
        ))
      )}
    </tbody>
  );
}
