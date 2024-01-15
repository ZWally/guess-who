import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import {SERVER_PORT} from "../shared/environment"

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
    cors: {
        origin: "http://localhost:5173"
    }
});



io.on("connection", (socket) => {
  console.log("Client connected:", socket.id);

  socket.on("message", (msg) => {
    console.log("Received message from client:", msg);
    socket.emit("message", "Hello, client!");
  });

  socket.on("disconnect", () => {
    console.log("Client disconnected:", socket.id);
  });
});

httpServer.listen(SERVER_PORT, () => {
  console.log(`Server listening on port ${SERVER_PORT}`);
});