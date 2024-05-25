import { useMemo, useState } from "react";
import { PAGES } from "../../app/constants/data/pages";
import { Heading, Table } from "../../widgets";
import { filterData } from "../../shared";
import { Column, Page } from "../../app/constants/types";

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
  const [data, setData] = useState(() => PAGES);
  const filteredData = useMemo(() => filterData(data, search), [search, data]);

  const columns: Column<Page>[] = useMemo(() => tableColumns, []);
  return (
    <>
      <Heading title="Pages" onChangeHandler={setSearch} />
      <Table data={filteredData} columns={columns} editable setData={setData} />
    </>
  );
}
