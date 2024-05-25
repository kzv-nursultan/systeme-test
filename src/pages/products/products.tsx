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

const searchByString = (search: string, object: object): boolean => {
  return Object.values(object).some((value) => {
    if (typeof value === "string") {
      return value.toLowerCase().includes(search.toLowerCase());
    } else if (typeof value === "object") {
      return searchByString(search, value);
    } else {
      return value?.toString().toLowerCase().includes(search.toLowerCase());
    }
  });
};

const filterData = <T extends object>(data: T[], search: string): T[] => {
  if (search === "") return data;
  return [...data].filter((item) => {
    console.log(searchByString(search, item));
    return searchByString(search, item);
  });
};

export default function Products() {
  const [search, setSearch] = useState("");
  const filteredData = useMemo(() => filterData(PRODUCTS, search), [search]);

  const columns: Array<Column<Product>> = useMemo(
    () => [
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
