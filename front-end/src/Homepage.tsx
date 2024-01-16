import { useContext, useState } from "react";
import { createNewRoom, joinSessionById } from "./services/SocketFunctions";
import { SocketContext } from "./contexts/socket";



const Homepage: React.FC = () => {


    const socket = useContext(SocketContext);
    const [name, setName]: [string, Function] = useState("")
    const [sessionId, setSessionId]: [string, Function] = useState("")
    
    const onCreateRoom = (name: string)=>{
        const trimmedName: string = name.trim();
        console.log("Name: ", trimmedName)
        createNewRoom(socket,
            {
                name: trimmedName,
            })
        setName("");
    }
    const onJoinRoom = (name: string, sessionId: string)=>{
        joinSessionById(socket,
            {
                name: name, 
                sessionId: sessionId,
            })
    }

    return(
        <div>
            <input type="text" id="player_name" tabIndex={1} onKeyDown={(e)=>{ (e.key === "Enter") ? (name.trim() ? onCreateRoom(name) : null ) : null}} value = {name} onChange = {(e)=>{
            setName(e.target.value);
             }} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Your Name"></input>
            <button tabIndex={0} onClick= {()=>{name.trim() ? onCreateRoom(name) : ()=>{} }}>Submit</button>
        </div>
    )
} 
export default Homepage;