import { Socket} from "socket.io-client";
import { CREATE_EVENT, JOIN_EVENT, UPDATE_BOARD_EVENT } from "../../../shared/events";
import { Player } from "../../../shared/types/Player";
import { Board } from "../../../shared/types/Board";


export const createNewRoom = (socket: Socket, player: Player)=>{
    socket.emit(CREATE_EVENT,player,)
}

export const joinSessionById = (socket: Socket, sessionId: String)=>{
    socket.emit(JOIN_EVENT,sessionId,)
}

export const updateBoard = (socket: Socket, board: Board)=>{
    socket.emit(UPDATE_BOARD_EVENT,board,)
}