import { IRelationshipGridProps } from "../interfaces";
import DataGrid from "./DataGrid";

const columns = [
  {
    name: "text",
    header: "Type",
    maxWidth: 100,
    defaultFlex: 2,
  },
  {
    name: "value",
    header: "code",
    minWidth: 50,
    defaultFlex: 1,
  },
];

export default function RelationshipGrid({
  rows,
  onSelectionChange,
  minHeight,
}: IRelationshipGridProps) {
  return (
    <DataGrid
      idProperty="value"
      columns={columns}
      minHeight={minHeight}
      rows={rows}
      onSelectionChange={({ selected }) => onSelectionChange(selected)}
      checkboxColumn
      checkboxOnlyRowSelect
    />
  );
}
