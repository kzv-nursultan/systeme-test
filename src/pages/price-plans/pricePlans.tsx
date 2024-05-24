import { useMemo } from "react";
import { Heading, Table } from "../../components";
import { Column } from "../../constants/types";
import { PRICE_PLANS } from "../../constants/data/pricePlans";
import { PricePlan } from "../../constants/types/types";



export default function PricePlans() {
  const columns: Array<Column<PricePlan>> = useMemo(
    () => [
      { key: "id", title: "ID" },
      { key: "description", title: "Description" },
      { key: "active", title: "Active" },
      { key: "createdAt", title: "Date created" },
      { key: "removedAt", title: "Date removed" },
      { key: "edit", title: "Edit" },
    ],
    []
  );
  return (
    <>
      <Heading title="price plans"/>
      <Table data={PRICE_PLANS} columns={columns} />
    </>
  );
}
