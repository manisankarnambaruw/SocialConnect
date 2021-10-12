import { useState } from "react";
import { Segment } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import PeopleGrid from "../components/PeopleGrid";
import useSocial from "../hooks/useSocial";
import Button from "../components/Button";
import SocialStatistic from "../components/SocialStatistic";

function Home() {
  const { connections } = useSocial();
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  return (
    <>
      <Segment>
        <SocialStatistic />
      </Segment>
      <Segment>
        <PeopleGrid
          rows={connections}
          minHeight={550}
          onSelectionChange={(selected) =>
            setSelectedIds(
              typeof selected === "boolean"
                ? connections.map((r) => Number(r.id))
                : Object.keys(selected).map((s) => Number(s))
            )
          }
        />
        <Button
          color="instagram"
          disabled={selectedIds.length !== 1}
          as={NavLink}
          to={`/add/${selectedIds[0]}`}
          content={"Select one person"}
        >
          Update
        </Button>
        <Button
          color="instagram"
          disabled={selectedIds.length !== 2}
          content={"Select two person"}
          as={NavLink}
          to={`/relationship/${selectedIds[0]}-${selectedIds[1]}`}
        >
          Show
        </Button>
      </Segment>
    </>
  );
}

export default Home;
