import { useMemo } from "react";
import { Column } from "../../constants/types";
import { Heading, Table } from "../../components";
import { PAGES } from "../../constants/data/pages";
import { Page } from "../../constants/types/types";

export default function Pages() {
  const columns: Column<Page>[] = useMemo(
    () => [
      { key: "id", title: "ID" },
      { key: "title", title: "Title" },
      { key: "active", title: "Active" },
      { key: "updatedAt", title: "Last updated" },
      { key: "publishedAt", title: "Date published" },
      { key: "edit", title: "Edit" },
    ],
    []
  );
  return (
    <>
      <Heading title="Pages" />
      <Table data={PAGES} columns={columns} />
    </>
  );
}
