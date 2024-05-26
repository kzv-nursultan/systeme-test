import { useMemo, useState } from "react";
import { Heading, Table } from "../../widgets";
import { filterData } from "../../shared";
import { Column, PRODUCTS, Product } from "../../shared/constants";

const tableColumns = [
  {
    key: "id",
    title: "ID",
  },
  {
    key: "name",
    title: "Name",
  },

  {
    key: "options",
    title: "Options",
    subColumns: [
      {
        key: "size",
        title: "Size",
      },
      {
        key: "amount",
        title: "Amount",
      },
    ],
  },
  { key: "active", title: "Status" },
  { key: "createdAt", title: "Created" },
  {
    key: "edit",
    title: "Edit",
  },
];

export default function Products() {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState<Product[]>(() => PRODUCTS);
  const filteredData = useMemo(
    () => filterData(products, search),
    [search, products]
  );
  const columns: Array<Column<Product>> = useMemo(() => tableColumns, []);

  return (
    <>
      <Heading title="Products" onChangeHandler={setSearch} />
      <Table
        data={filteredData}
        columns={columns}
        editable
        setData={setProducts}
      />
    </>
  );
}
