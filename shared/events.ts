import { Board } from "./types/Board";

export const JOIN_EVENT = 'join' as const;
export type JoinEventParams = {
    name: String,
    sessionId: String,
}

export const UPDATE_BOARD_EVENT = 'update-board' as const;
export type UpdateBoardEventParams = {
    board: Board,
}

export const CREATE_EVENT = 'create' as const;
export type CreateEventParams = {
    name: String
}