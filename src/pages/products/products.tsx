import { useMemo, useState } from "react";
import { Heading, Table } from "../../components";
import { Column } from "../../constants/types";
import { PRODUCTS } from "../../constants/data/products";
import { Product } from "../../constants/types/types";

const filterBySearch = (value: string) => {
  const filtered = [...PRODUCTS].filter((prod) =>
    prod.name.toLowerCase().includes(value.toLowerCase())
  );
  return filtered;
};

export default function Products() {
  const [search, setSearch] = useState("");
  const filteredData = useMemo(() => filterBySearch(search), [search]);

  const columns: Array<Column<Product>> = useMemo(
    () => [
      { key: "id", title: "ID" },
      { key: "name", title: "Name" },
      { key: "active", title: "Status" },
      {
        key: "options",
        title: "Options",
        subColumns: [
          { key: "amount", title: "Amount" },
          {
            key: "size",
            title: "Size",
          },
        ],
      },
      { key: "createdAt", title: "Created" },
      { key: "edit", title: "Edit" },
    ],
    []
  );

  return (
    <>
      <Heading title="Products" onChangeHandler={setSearch} />
      <Table data={filteredData} columns={columns} />
    </>
  );
}
