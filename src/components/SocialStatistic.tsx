import { Statistic, Icon } from "semantic-ui-react";
import useSocial from "../hooks/useSocial";

export default function SocialStatistic() {
  const { connections, relations } = useSocial();
  return (
    <Statistic.Group widths="two">
      <Statistic color="blue">
        <Statistic.Value>{connections.length}</Statistic.Value>
        <Statistic.Label>Persons</Statistic.Label>
      </Statistic>

      <Statistic color="purple">
        <Statistic.Value>
          <Icon name="angle right" />
          {relations.length}
        </Statistic.Value>
        <Statistic.Label>In Relations</Statistic.Label>
      </Statistic>
    </Statistic.Group>
  );
}
