import React, { useState, useEffect } from 'react';
import Video from 'twilio-video';
import Participant from './Participant';
import { Container, Button, Row, Col } from 'react-bootstrap';

const Room = ({ roomName, token , handleLogout }) => {
  const [room, setRoom] = useState(null);
  const [participants, setParticipants] = useState([]);

  useEffect(() => {
    const participantConnected = participant => {
      setParticipants(prevParticipants => [...prevParticipants, participant]);
    };

    const participantDisconnected = participant => {
      setParticipants(prevParticipants =>
        prevParticipants.filter(p => p !== participant)
      );
    };

    Video.connect(token, {
      name: roomName
    }).then(room => {
      setRoom(room);
      room.on('participantConnected', participantConnected);
      room.on('participantDisconnected', participantDisconnected);
      room.participants.forEach(participantConnected);
    });

    return () => {
      setRoom(currentRoom => {
        if (currentRoom && currentRoom.localParticipant.state === 'connected') {
          currentRoom.localParticipant.tracks.forEach(function(trackPublication) {
            trackPublication.track.stop();
          });
          currentRoom.disconnect();
          return null;
        } else {
          return currentRoom;
        }
      });
    };
  }, [roomName, token]);

  const remoteParticipants = participants.map(participant => (
    <Col className="remote-box">
      <Participant key={participant.sid} participant={participant} />
    </Col>
  ));

  return (
    <Container className="room">
      <h5>Room: {roomName}</h5>
      <Button variant="outline-dark" onClick={handleLogout} >Leave</Button>
      <Container className="local-participant">
        {room ? (
          <Participant
            key={room.localParticipant.sid}
            participant={room.localParticipant}
          />
        ) : (
          ''
        )}
      </Container>
      <h6>Patient</h6>
      <Container className="remote-participants">
        <Row>{remoteParticipants}</Row>
      </Container>
    </Container>
  );
};

export default Room;
