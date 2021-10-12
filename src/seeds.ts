import faker from "faker";
import { IRelationType, IRelationData } from "./interfaces";

export const generateFakePeople = (n: number, idGenerator: Generator) =>
  new Array(n).fill(0).map(() => ({
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    id: idGenerator.next().value,
  }));

export const getRelationTypes = (): IRelationType[] => [
  { value: "FRND", text: "Friend" },
  { value: "BRO", text: "Brother" },
];

export const getRelations = (): IRelationData[] => [
  { peopleId: 1, connectedPeopleId: 2, relationType: "FRND" },
  { peopleId: 1, connectedPeopleId: 3, relationType: "FRND" },
  { peopleId: 1, connectedPeopleId: 4, relationType: "FRND" },
  { peopleId: 1, connectedPeopleId: 5, relationType: "BRO" },
  { peopleId: 5, connectedPeopleId: 2, relationType: "FRND" },
  { peopleId: 5, connectedPeopleId: 3, relationType: "FRND" },
  { peopleId: 5, connectedPeopleId: 4, relationType: "FRND" },
  { peopleId: 2, connectedPeopleId: 3, relationType: "FRND" },
  { peopleId: 2, connectedPeopleId: 4, relationType: "FRND" },
  { peopleId: 3, connectedPeopleId: 4, relationType: "FRND" },
  { peopleId: 6, connectedPeopleId: 1, relationType: "FRND" },
  { peopleId: 6, connectedPeopleId: 3, relationType: "FRND" },
];
