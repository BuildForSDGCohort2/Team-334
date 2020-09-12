import React, { useState, useCallback } from 'react';
import Lobby from './Lobby';
import Room from './Room';
import axios from 'axios';
// import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

const VideoChat = ({ provider }) => {
  const [roomName, setRoomName] = useState('');
  const [token, setToken] = useState(null);
  const [userName, setUserName] = useState('');

  const handleRoomNameChange = useCallback(e => {
    setRoomName(e.target.value);
  }, []);

  const handleUserNameChange = useCallback(e => {
    setUserName(e.target.value);
  }, []);

  const handleSubmit = useCallback(
    async e => {
      e.preventDefault();
      axios.post('/video/token', {
        roomName,
        userName
      }).then(({ data }) => {
        console.log(data)
        setToken(data.jwt)
      })
        .catch(err => console.log(err))
    }, [roomName, userName]
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
        userName={userName}
        handleUserNameChange={handleUserNameChange}
      />
    );
  }
  // if (!auth.uid) return <Redirect to="/" />
  return render;
};

const mapStateToProps = (state) => {
  return {
    provider: state.provider.data
  }
}

export default connect(mapStateToProps)(VideoChat);
