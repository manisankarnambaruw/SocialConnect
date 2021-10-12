import ReactDataGrid from "@inovua/reactdatagrid-community";
import { IDataGrid } from "../interfaces";
import styled from "styled-components";

const GridWrapper = styled(ReactDataGrid)`
  margin-bottom: 1rem;
`;

export default function DataGrid({
  idProperty,
  columns,
  rows,
  minHeight,
  checkboxColumn,
  checkboxOnlyRowSelect,
  onSelectionChange,
}: IDataGrid) {
  return (
    <GridWrapper
      idProperty={idProperty}
      columns={columns}
      dataSource={rows}
      style={{ minHeight }}
      pagination
      limit={40}
      checkboxColumn={checkboxColumn}
      checkboxOnlyRowSelect={checkboxOnlyRowSelect}
      onSelectionChange={(data: any) => {
        if (!!onSelectionChange) onSelectionChange(data);
      }}
    />
  );
}
