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
      <h3 className="text-center">Start Video</h3>
      <Form style={{maxWidth: "60%", marginLeft: "20%"}} onSubmit={handleSubmit} >
        <Form.Group controlId="username" >
          <Form.Label>User Name</Form.Label>
          <Form.Control type="text" placeholder="Your name" value={userName} required onChange={handleUserNameChange} />
        </Form.Group>

        <Form.Group controlId="room" >
          <Form.Label>Room Id</Form.Label>
          <Form.Control type="number" placeholder="e.g 123456" value={roomName} required onChange={handleRoomNameChange} />
        </Form.Group>
        <Button type="submit">Create</Button>
      </Form>
    </Container>
  );
};

export default Lobby;
