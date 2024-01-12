import express from "express";
import { createServer } from "http";


const app = express();
const httpServer = createServer(app);

httpServer.listen(3001, () => {
    console.log("Server listening on port 3001");
  });