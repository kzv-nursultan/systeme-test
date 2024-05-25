import { useMemo, useState } from "react";
import { PRICE_PLANS } from "../../app/constants/data/pricePlans";
import { Heading, Table } from "../../widgets";
import { filterData } from "../../shared";
import { Column, PricePlan } from "../../app/constants/types";

const tableColumns = [
  { key: "id", title: "ID" },
  { key: "description", title: "Description" },
  { key: "active", title: "Active" },
  { key: "createdAt", title: "Date created" },
  { key: "removedAt", title: "Date removed" },
  { key: "edit", title: "Edit" },
];

export default function PricePlans() {
  const [search, setSearch] = useState("");
  const [pricePlans, setPricePlans] = useState<PricePlan[]>(PRICE_PLANS);
  const filteredData = useMemo(
    () => filterData(pricePlans, search),
    [search, pricePlans]
  );
  const columns: Array<Column<PricePlan>> = useMemo(() => tableColumns, []);
  return (
    <>
      <Heading title="price plans" onChangeHandler={setSearch} />
      <Table
        data={filteredData}
        columns={columns}
        editable
        setData={setPricePlans}
      />
    </>
  );
}
