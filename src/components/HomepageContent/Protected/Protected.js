import React from "react";


import {Segment, Header} from "semantic-ui-react";


const Protected = () => (
  <Segment style={{ padding: '8em 0em' }} vertical>
    <Header as='h3' style={{ fontSize: '2em' }}>
      PROTECTED!!!
    </Header>
  </Segment>
);

export default Protected;