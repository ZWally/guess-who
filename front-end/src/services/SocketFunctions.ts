import { Socket} from "socket.io-client";
import { CREATE_EVENT, CreateEventParams, JOIN_EVENT, JoinEventParams, UPDATE_BOARD_EVENT, UpdateBoardEventParams } from "../../../shared/events";
import { ServerResponse } from "http";


export const createNewRoom = (socket: Socket, params: CreateEventParams,) =>{
    socket.emit(CREATE_EVENT,params,(response:ServerResponse) => {console.log(response)});
}

export const joinSessionById = (socket: Socket, params: JoinEventParams)=>{
    socket.emit(JOIN_EVENT,params,(response:ServerResponse) => {console.log(response)});
}

export const updateBoard = (socket: Socket, params: UpdateBoardEventParams)=>{
    socket.emit(UPDATE_BOARD_EVENT,params,(response:ServerResponse) => {console.log(response)});
}