
import { io } from 'socket.io-client';
import './App.css'
import { SERVER_PATH } from "../../shared/environment"
import GuessWhoCharacter from './GuessWhoCharacter'
import { useEffect } from 'react';

const socket = io(SERVER_PATH);


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
    <>
      <GuessWhoCharacter image={'vite.svg'} name={'Zach'}></GuessWhoCharacter>
    </>
  )
}

export default App
