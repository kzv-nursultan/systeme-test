import { useMemo } from "react";
import { Table } from "../../components";
import { Column } from "../../constants/types";

interface PricePlan {
  id: number;
  description: string;
  active: boolean;
  createdAt: string;
  removedAt: string;
}

const pricePlans: PricePlan[] = [
  {
    id: 13334466,
    description: "aute fugiat commodo id",
    active: false,
    createdAt: "1949-06-21T14:03:32.0Z",
    removedAt: "1960-09-22T13:43:32.0Z",
  },
  {
    id: 38738895,
    description: "esse dolore cillum anim",
    active: false,
    createdAt: "2014-09-09T02:06:07.0Z",
    removedAt: "2006-06-14T18:43:22.0Z",
  },
  {
    id: 69423742,
    description: "ullamco quis aliquip laborum",
    active: false,
    createdAt: "1982-10-18T01:51:07.0Z",
    removedAt: "1978-03-15T11:19:21.0Z",
  },
  {
    id: 78413703,
    description: "nulla elit anim mollit occaecat",
    active: false,
    createdAt: "1959-07-30T18:57:54.0Z",
    removedAt: "1980-01-31T01:46:32.0Z",
  },
];

export default function PricePlans() {
  const columns: Array<Column<PricePlan>> = useMemo(
    () => [
      { key: "description", title: "Description" },
      { key: "active", title: "Active" },
      { key: "createdAt", title: "Date created" },
      { key: "removedAt", title: "Date removed" },
    ],
    []
  );
  return <Table data={pricePlans} columns={columns} />;
}
