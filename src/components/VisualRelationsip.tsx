import { useEffect, useState } from "react";
import { useParams, useHistory, NavLink } from "react-router-dom";
import { Icon, Segment, Menu, Message } from "semantic-ui-react";
import { toast } from "react-toastify";
import useSocial from "../hooks/useSocial";
import {
  IDegreeOfRelation,
  IRelationData,
  IStyles,
  IUserData,
} from "../interfaces";
import {
  DegreeOfSeparationWrapper,
  PersonWrapper,
  ScrollingX,
  SeparationLine,
} from "./styled";

export default function VisualRelationship() {
  const { relation } = useParams<{ relation: string }>();
  const { connections, relations } = useSocial();
  const [person1, setPerson1] = useState<IUserData>({} as IUserData);
  const [person2, setPerson2] = useState<IUserData>({} as IUserData);
  const [degreeOfRelation, setDegreeOfRelation] = useState<IDegreeOfRelation>({
    idsArr: [],
    done: false,
  });

  const history = useHistory();

  useEffect(() => {
    const personId1 = relation.includes("-")
      ? Number(relation.split("-")[0])
      : -1;
    const personId2 = relation.includes("-")
      ? Number(relation.split("-")[1])
      : -1;

    const person1 = connections.find((c) => c.id === personId1);
    const person2 = connections.find((c) => c.id === personId2);

    const degreeOfSeparation = (
      pId: string | number,
      cId: string | number,
      relations: IRelationData[]
    ) => {
      const ids = [pId] as (string | number)[],
        idsArr = [] as (string | number)[][];
      relations.forEach((r) => {
        if (
          (r.peopleId === pId || r.connectedPeopleId === pId) &&
          pId !== cId
        ) {
          if (r.connectedPeopleId === cId || r.peopleId === cId) {
            ids.push(cId);
            if (ids.length > 1) idsArr.push([...ids]);
            ids.splice(1, ids.length - 1);
          } else {
            const value = degreeOfSeparation(
              r.peopleId === pId ? r.connectedPeopleId : r.peopleId,
              cId,
              relations.filter(
                (r) => !(r.peopleId === pId || r.connectedPeopleId === pId)
              )
            );
            if (value.idsArr.length > 0) {
              value.idsArr.forEach((v) => {
                if (
                  !idsArr.some(
                    (id) =>
                      [...ids, ...v].length === id.length &&
                      id.every((e) => [...ids, ...v].includes(e))
                  )
                )
                  idsArr.push([...ids, ...v]);
              });
            }
          }
        }
      });
      return { idsArr, done: true };
    };

    if (!(person1 && person2)) {
      toast.warning("Unable to find person");
      history.push("/relationship");
    } else {
      setPerson1(person1);
      setPerson2(person2);
      setDegreeOfRelation(
        degreeOfSeparation(person1.id, person2.id, relations)
      );
    }
  }, [relation]);

  return (
    <>
      <Menu attached="top">
        <Menu.Item header>
          {person1.firstName}&nbsp; <Icon name="linkify" /> {person2.firstName}
        </Menu.Item>
      </Menu>
      <Segment attached="bottom">
        <ScrollingX>
          {!degreeOfRelation.done ? (
            <>
              <Icon name="circle notched" size="large" color="blue" loading />{" "}
              Loading
            </>
          ) : degreeOfRelation.idsArr.length > 0 ? (
            degreeOfRelation.idsArr.map((idArr) => (
              <DegreeOfSeparationWrapper>
                {idArr.map((id, index) => (
                  <>
                    <RelationPerson id={id} />
                    {idArr.length - 1 !== index && (
                      <CalculateSeparationLine
                        id={id}
                        refId={idArr[index + 1]}
                      />
                    )}
                  </>
                ))}
              </DegreeOfSeparationWrapper>
            ))
          ) : (
            <Message info>No Relations found</Message>
          )}
        </ScrollingX>
      </Segment>
    </>
  );
}

function RelationPerson(props: { id: string | number }) {
  const { connections } = useSocial();
  const connection = connections.find((c) => c.id === props.id);
  return !!connection ? (
    <PersonWrapper
      style={{
        minWidth:
          `${connection.firstName} ${connection.lastName}`.length * 10 +
          44 +
          "px",
        maxWidth:
          `${connection.firstName} ${connection.lastName}`.length * 10 +
          44 +
          "px",
      }}
    >
      <NavLink to={`/add/${connection.id}`}>
        <Icon name="user" size="large" circular />
        {`${connection.firstName} ${connection.lastName}`}
      </NavLink>
    </PersonWrapper>
  ) : (
    <>Couldn't find the person</>
  );
}

function CalculateSeparationLine(props: {
  id: number | string;
  refId: number | string;
}) {
  const { relations, relationTypes } = useSocial();
  const [state, setState] = useState<IStyles>({
    content: "Calculating...",
    width: "100px",
  });

  useEffect(() => {
    const relation = relations.find(
      (rel) =>
        (rel.peopleId === props.id && rel.connectedPeopleId === props.refId) ||
        (rel.connectedPeopleId === props.id && rel.peopleId === props.refId)
    );
    const relationType = relationTypes.find(
      (relType) => relType.value === relation?.relationType
    );
    setState({
      content: relationType?.text || "Unknown",
      width: !!relationType ? `${relationType?.text.length * 15}px` : "100px",
    });
  }, [relations, relationTypes, props.id, props.refId]);
  return (
    <SeparationLine width={state.width}>
      <span>{state.content}</span>
    </SeparationLine>
  );
}
