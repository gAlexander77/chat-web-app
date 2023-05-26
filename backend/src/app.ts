import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import cors from 'cors';

import { connectToDatabase } from './database/db';
import setupChat from './chat/chatService';

const port = 3000;

const app = express();
const server = http.createServer(app);
const io = new Server(server);

connectToDatabase();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

setupChat(io);

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});