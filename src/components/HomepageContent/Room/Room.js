import React, { Component } from 'react';

import {Segment, Header, Form, Button, Accordion, Icon} from "semantic-ui-react";

import apiService from '../../../service/apiService';



import auth from '../../../service/auth';


import AllRooms from './AllRooms';

class Room extends Component {

  constructor(props) {
    super(props);

    this.state = {

      newRoom: '',

      rooms: [],

    }

  }
  
  submitHandler() {
    apiService.newRoom(auth.user, this.state.newRoom).then(() => {
      this.setState({newRoom: ''});
    });

  }

  changeHandler(evt, target) {
    this.setState({newRoom: target.value});
  }




  render() {

    return (
      <Segment style={{ padding: '2em 2em' }} vertical>
        <Header as='h3' style={{ fontSize: '2em' }}>
          Room
        </Header>

        <AllRooms />

        <br/><br/><br/>


        <Form onSubmit={this.submitHandler.bind(this)}>
          <Form.Input fluid label='New Room' placeholder='Room name' value={this.state.newRoom} onChange={this.changeHandler.bind(this)} />
          <Button type='submit'>Submit</Button>
        </Form>



      </Segment>
    );

  }
}

export default Room;