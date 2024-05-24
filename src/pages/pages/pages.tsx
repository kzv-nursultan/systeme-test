import { useMemo } from "react";
import { Column } from "../../constants/types";
import { Table } from "../../components";

interface Page {
  id: number;
  title: string;
  active: boolean;
  updatedAt: string;
  publishedAt: string;
}

const pages: Page[] = [
  {
    id: 23634610,
    title: "aliquip sit proident veniam tempor",
    active: false,
    updatedAt: "1948-04-09T10:15:44.0Z",
    publishedAt: "1956-09-25T20:13:19.0Z",
  },
  {
    id: 67303872,
    title: "dolor pariatur et ipsum fugiat",
    active: false,
    updatedAt: "2021-10-23T04:51:35.0Z",
    publishedAt: "1987-02-20T02:45:15.0Z",
  },
  {
    id: 49117143,
    title: "amet ut cillum tempor",
    active: false,
    updatedAt: "2007-04-09T13:18:03.0Z",
    publishedAt: "1955-07-01T17:29:49.0Z",
  },
];
export default function Pages() {
  const columns: Column<Page>[] = useMemo(
    () => [
      { key: "title", title: "Title" },
      { key: "active", title: "Active" },
      { key: "updatedAt", title: "Last updated" },
      { key: "publishedAt", title: "Date published" },
    ],
    []
  );
  return <Table data={pages} columns={columns} />;
}
