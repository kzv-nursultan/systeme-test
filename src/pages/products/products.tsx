import { useMemo } from "react";
import { Table } from "../../components";
import { Column } from "../../constants/types";

interface Product {
  id: number;
  name: string;
  options: {
    size: string;
    amount: number;
  };
  active: boolean;
  createdAt: string;
}

const products: Product[] = [
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

  {
    id: 26785188,

    name: "esse elit",

    options: {
      size: "S",

      amount: 10,
    },

    active: true,

    createdAt: "1956-03-20T08:59:40.0Z",
  },

  {
    id: 63878634,

    name: "enim",

    options: {
      size: "L",

      amount: 20,
    },

    active: false,

    createdAt: "2016-07-27T16:05:57.0Z",
  },
];

export default function Products() {

  const tableColumns: Array<Column<Product>> = useMemo(
    () => [
      { key: "name", title: "Name" },
      { key: "active", title: "Status" },
      { key: "createdAt", title: "Created" },
    ],
    []
  );

  return <Table data={products} columns={tableColumns}/>;
}
