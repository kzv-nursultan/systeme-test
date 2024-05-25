import { useMemo, useState } from "react";
import { Column } from "../../constants/types";
import { Heading, Table } from "../../components";
import { PAGES } from "../../constants/data/pages";
import { Page } from "../../constants/types/types";
import { filterData } from "../../utils/inputSearch";

const tableColumns = [
  { key: "id", title: "ID" },
  { key: "title", title: "Title" },
  { key: "active", title: "Active" },
  { key: "updatedAt", title: "Last updated" },
  { key: "publishedAt", title: "Date published" },
  { key: "edit", title: "Edit" },
];

export default function Pages() {
  const [search, setSearch] = useState("");
  const filteredData = useMemo(() => filterData(PAGES, search), [search]);

  const columns: Column<Page>[] = useMemo(() => tableColumns, []);
  return (
    <>
      <Heading title="Pages" onChangeHandler={setSearch} />
      <Table data={filteredData} columns={columns} />
    </>
  );
}