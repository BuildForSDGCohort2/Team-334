import React from 'react';
import { Container, Form, Button} from 'react-bootstrap'

const Lobby = ({
  roomName,
  handleRoomNameChange,
  userName,
  handleUserNameChange,
  handleSubmit
}) => {
  return (
    <Container className="my-5">
      <Form style={{maxWidth: "60%", marginLeft: "20%"}} onSubmit={handleSubmit} >
        <Form.Group controlId="username" >
          <Form.Label>User Name</Form.Label>
          <Form.Control type="text" placeholder="Room" value={userName} required onChange={handleUserNameChange} />
        </Form.Group>

        <Form.Group controlId="room" >
          <Form.Label>Room name</Form.Label>
          <Form.Control type="text" placeholder="Room" value={roomName} required onChange={handleRoomNameChange} />
        </Form.Group>
        <Button type="submit">Connect</Button>
      </Form>
    </Container>
  );
};

export default Lobby;
