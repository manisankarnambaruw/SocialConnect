import { Message, Segment } from "semantic-ui-react";

export default function NotFound() {
  return (
    <Segment>
      <Message error>
        <Message.Content>404 Not Found</Message.Content>
      </Message>
    </Segment>
  );
}
