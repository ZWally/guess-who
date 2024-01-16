import { io } from "socket.io-client";
import { SERVER_PATH } from "../../../shared/environment";
import React from "react";

export const socket = io(SERVER_PATH);
export const SocketContext = React.createContext(socket);