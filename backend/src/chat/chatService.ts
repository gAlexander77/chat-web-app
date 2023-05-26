import { Server, Socket } from 'socket.io';

interface ChatMessage {
    chatId: string;
    username: string;
    message: string;
    timestamp: Date;
}

const setupChat = (io: Server) => {
    io.on('connection', (socket: Socket) => {
        console.log('A user connected.');

        socket.on('disconnect', () => {
            console.log('A user disconnected.');
        });

        // Join a chat room
        socket.on('join', (chatId: string) => {
            socket.join(chatId);
            console.log(`User joined chat: ${chatId}`);
        });

        // Leave a chat room
        socket.on('leave', (chatId: string) => {
            socket.leave(chatId);
            console.log(`User left chat: ${chatId}`);
        });

        // Handle chat messages
        socket.on('chat message', (chatId: string, username: string, message: string) => {
            console.log(`Received message (${chatId}): ${message}`);
            
            const chatMessage: ChatMessage = {
                chatId,
                username,
                message,
                timestamp: new Date(),
            };
            
            // Broadcast the message to all clients in the chat room
            io.to(chatId).emit('chat message', chatMessage);
        });
    });
};

export default setupChat;