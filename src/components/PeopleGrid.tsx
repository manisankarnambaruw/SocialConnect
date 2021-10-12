import DataGrid from "./DataGrid";
import { IPeopleGrid } from "../interfaces";

const columns = [
  {
    name: "id",
    header: "ID",
    minWidth: 60,
    defaultFlex: 0.4,
  },
  {
    name: "fullName",
    header: "Name",
    minWidth: 50,
    defaultFlex: 3,
    render: ({ data }: any) => `${data.firstName} ${data.lastName}`,
  },
];

export default function PeopleGrid({
  rows,
  minHeight,
  onSelectionChange,
}: IPeopleGrid) {
  return (
    <DataGrid
      idProperty="id"
      minHeight={minHeight}
      columns={columns}
      rows={rows}
      checkboxColumn
      checkboxOnlyRowSelect
      onSelectionChange={({ selected }) => onSelectionChange(selected)}
    />
  );
}
