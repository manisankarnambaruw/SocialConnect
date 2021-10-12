import { ReactNode } from "react";
import { TypeColumn } from "@inovua/reactdatagrid-community/types";
import { ButtonProps, PopupProps } from "semantic-ui-react";

export interface ChildrenProps {
  children?: ReactNode | undefined;
}

export interface ExtendedSuspenseProps extends ChildrenProps {
  fallback?: ReactNode;
}

export interface IUserData {
  firstName: string;
  lastName: string;
  id: number | string;
}

export interface IRelationData {
  peopleId: number;
  connectedPeopleId: number;
  relationType: string;
}

export interface IRelationType {
  value: string;
  text: string;
}

export interface ISocialContext {
  connections: IUserData[];
  addConnection: (data: any) => IUserData;
  updateConnection: (data: any) => IUserData;
  relations: IRelationData[];
  relationTypes: IRelationType[];
  addRelation: (data: any) => IRelationData;
  deleteRelation: (selectedIds: number[], referenceId: number) => void;
  addRelationType: (value: string, text: string) => void;
  deleteRelationType: (values: string[]) => void;
}

export interface IPeopleGrid {
  rows: IUserData[];
  minHeight: number | string;
  onSelectionChange: (data: any) => void;
}

export interface IDataGrid {
  columns: TypeColumn[];
  rows: object[];
  idProperty: string;
  minHeight: number | string;
  checkboxColumn?: boolean;
  checkboxOnlyRowSelect?: boolean;
  onSelectionChange?: (data: any) => void;
}

export interface IPeopleParams {
  peopleId?: string | undefined;
}

export interface IPopupProps extends PopupProps {
  disabledContent?: boolean;
}

export interface IButtonProps extends ButtonProps {
  to?: string;
}

export interface IRelationshipGridProps {
  rows: IRelationType[];
  minHeight: number | string;
  onSelectionChange: (data: any) => void;
}

export interface IDropdownOptionProps {
  text: string | number;
  value: string | number;
}

export interface IDegreeOfRelation {
  idsArr: (number | string)[][];
  done: boolean;
}

export interface IStyles {
  width?: string | number;
  content?: string;
}
