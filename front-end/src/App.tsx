
import { io } from 'socket.io-client';
import './App.css'
import { SERVER_PATH } from "../../shared/environment"
import GuessWhoCharacter from './GuessWhoCharacter'
import { useEffect } from 'react';
import { SocketContext, socket } from './contexts/socket';
import Homepage from './Homepage';


function App() {

  useEffect(() => {
    socket.on('connect', () => {
      console.log("connected successfully")
    });

    return () => {
      socket.off('connect')
    }
  }, []);

  return (
    <SocketContext.Provider value = {socket}>
      <Homepage></Homepage>
    </SocketContext.Provider>
  )
}

export default App
