import { createContext, useState } from "react";
import { generateFakePeople, getRelationTypes, getRelations } from "../seeds";
import { ChildrenProps, ISocialContext } from "../interfaces";
import { idGenerator } from "../utils";

export const SocialContext = createContext({} as ISocialContext);

const idGen = idGenerator();
const connections = generateFakePeople(15, idGen);
const relationTypes = getRelationTypes();
const relations = getRelations();

export const SocialProvider = ({ children }: ChildrenProps) => {
  const [state, setState] = useState({
    connections,
    relationTypes,
    relations,
  });
  return (
    <SocialContext.Provider
      value={{
        ...state,
        addConnection: (data: any) => {
          const { connections } = state,
            connection = { ...data, id: idGen.next().value };
          connections.push(connection);
          setState({ ...state, connections: [...connections] });
          return connection;
        },
        updateConnection: (data: any) => {
          const findConnection = state.connections.find(
            (connect) => connect.id === Number(data.id)
          );
          if (!!findConnection) {
            findConnection.firstName = data.firstName;
            findConnection.lastName = data.lastName;
          }
          return findConnection || data;
        },
        addRelation: (data: any) => {
          const { relations } = state,
            relation = { ...data };
          relations.push(relation);
          setState({ ...state, relations: [...relations] });
          return relation;
        },
        deleteRelation: (Ids, referenceId) => {
          const { relations } = state;
          setState({
            ...state,
            relations: [
              ...relations.filter(
                (r) =>
                  !(
                    (Ids.includes(r.connectedPeopleId) &&
                      r.peopleId === referenceId) ||
                    (Ids.includes(r.peopleId) &&
                      r.connectedPeopleId === referenceId)
                  )
              ),
            ],
          });
        },
        addRelationType: (value: string, text: string) => {
          const { relationTypes } = state;
          relationTypes.push({ value, text });
          setState({
            ...state,
            relationTypes: [...relationTypes],
          });
        },
        deleteRelationType: (values: string[]) => {
          const { relationTypes, relations } = state;
          if (relations.some((r) => values.includes(r.relationType))) {
            throw new Error();
          }
          setState({
            ...state,
            relationTypes: relationTypes.filter(
              (r) => !values.includes(r.value)
            ),
          });
        },
      }}
    >
      {children}
    </SocialContext.Provider>
  );
};
