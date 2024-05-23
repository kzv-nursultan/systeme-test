import { ReactNode } from "react";

interface DataCellProps {
  children: ReactNode;
  styles?: string;
}

interface mockData1 {
  id: number;
  name: string;
  options: {
    size: "XL";
    amount: number;
  };
  active: boolean;
  createdAt: string;
}

const mockData: mockData1[] = [
  {
    id: 14381328,
    name: "id quis voluptate nostrud",
    options: {
      size: "XL",
      amount: 100,
    },
    active: true,
    createdAt: "1985-08-09T02:10:18.0Z",
  },
];

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

export default function TableBody() {
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
        mockData?.map((data) => (
          <tr key={data.id}>
            <DataCell styles="sticky left-0 h-fit text-black bg-slate-100 capitalize">
              {data.name}
            </DataCell>
            <DataCell>{data.options.size}</DataCell>
            <DataCell>{data.options.amount}</DataCell>
            <DataCell>{data.active ? "true" : "false"}</DataCell>
            <DataCell>{data.createdAt}</DataCell>
          </tr>
        ))
      )}
    </tbody>
  );
}
