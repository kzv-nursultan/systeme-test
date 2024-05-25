import { useMemo, useState } from "react";
import { Heading, Table } from "../../components";
import { Column } from "../../constants/types";
import { PRICE_PLANS } from "../../constants/data/pricePlans";
import { PricePlan } from "../../constants/types/types";
import { filterData } from "../../utils/inputSearch";

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
