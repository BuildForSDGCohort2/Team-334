import React, { useState, useCallback } from 'react';
import Lobby from './Lobby';
import Room from './Room';
import axios from 'axios';
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

const VideoChat = ({ auth }) => {
  const [roomName, setRoomName] = useState('');
  const [token, setToken] = useState(null);

  const handleRoomNameChange = useCallback(e => {
    setRoomName(e.target.value);
  }, []);

  const handleSubmit = useCallback(
    async e => {
      e.preventDefault();
      axios.post('/video/token', {
        roomName
      }).then(({ data }) => {
        setToken(data.jwt)
      })
        .catch(err => console.log(err))
    }, [roomName]
  )

  const handleLogout = useCallback(event => {
    setToken(null);
  }, []);

  let render;
  if (token) {
    render = (
      <Room roomName={roomName} token={token} handleLogout={handleLogout} />
    );
  } else {
    render = (
      <Lobby
        roomName={roomName}
        handleRoomNameChange={handleRoomNameChange}
        handleSubmit={handleSubmit}
      />
    );
  }
  if (!auth.uid) return <Redirect to="/" />
  return render;
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

export default connect(mapStateToProps)(VideoChat);
