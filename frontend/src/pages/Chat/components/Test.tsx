import React, { useEffect } from 'react';
import { io, Socket } from 'socket.io-client';

interface ChatMessage {
  chatId: string;
  username: string;
  message: string;
  timestamp: Date;
}

const Test: React.FC = () => {
  useEffect(() => {
    const socket: Socket = io('http://localhost:3001'); // Replace with your server URL

    socket.on('connect', () => {
      console.log('Connected to the server.');

      // Join a chat room
      socket.emit('join', 'chatRoom1');
    });

    socket.on('disconnect', () => {
      console.log('Disconnected from the server.');
    });

    socket.on('chat message', (chatMessage: ChatMessage) => {
      console.log('Received message:', chatMessage);
    });

    return () => {
      // Clean up event listeners
      socket.disconnect();
    };
  }, []);

  return <div>Open the browser console to see the output.</div>;
};

export default Test;