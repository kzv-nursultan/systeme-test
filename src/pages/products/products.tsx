import { useMemo, useState } from "react";
import { Heading, Table } from "../../components";
import { Column } from "../../constants/types";
import { PRODUCTS } from "../../constants/data/products";
import { Product } from "../../constants/types/types";
import { filterData } from "../../utils/inputSearch";

const tableColumns = [
  { key: "id", title: "ID" },
  { key: "name", title: "Name" },
  {
    key: "options",
    title: "Options",
    subColumns: [
      {
        key: "size",
        title: "Size",
      },
      { key: "amount", title: "Amount" },
    ],
  },
  { key: "active", title: "Status" },
  { key: "createdAt", title: "Created" },
  { key: "edit", title: "Edit" },
];

export default function Products() {
  const [search, setSearch] = useState("");
  const filteredData = useMemo(() => filterData(PRODUCTS, search), [search]);
  const columns: Array<Column<Product>> = useMemo(() => tableColumns, []);

  return (
    <>
      <Heading title="Products" onChangeHandler={setSearch} />
      <Table data={filteredData} columns={columns} />
    </>
  );
}
