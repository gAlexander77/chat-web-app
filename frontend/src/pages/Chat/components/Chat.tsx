import React, { FC, useEffect, useState } from 'react';
import io from 'socket.io-client';

interface ChatProps {
    selectedChat: string;
}

interface ChatMessageProps {
    sender: string;
    message: string;
    timeSent: Date;
}

interface ChatBodyProps {
    chatMessages: ChatMessageProps[];
}

const Chat: FC<ChatProps> = ({ selectedChat }) => {

    const [chatHeader, setChatHeader] = useState();
    const [chatMessages, setChatMessages] = useState<ChatMessageProps[]>([]);
    const [chatInput, setChatInput] = useState<string>("");

    useEffect(() => {
        const socket = io('http://localhost:3000');
    
        socket.emit('join', selectedChat);
    
        return () => {
          socket.emit('leave', selectedChat);
          socket.disconnect();
        };
    }, [selectedChat]);

    return (
        <div className="flex-auto bg-gray-300">
            <ChatHeader/>
            <ChatBody chatMessages={chatMessages}/>
            <ChatInput/>
        </div>
    );
}

const ChatHeader: FC = () => {
    return (
        <div>
            <div>Profile</div>
            <div>Name of users</div>
            <div>Info</div>
        </div>
    );
}

const ChatBody: FC<ChatBodyProps> = ({chatMessages}) => {
    return (
        <div>
            {chatMessages.map((chatMessage, index) => (
                <ChatMessage 
                    key={index}
                    sender={chatMessage.sender}
                    message={chatMessage.message}
                    timeSent={chatMessage.timeSent}
                />
            ))}
        </div>
    );
}

const ChatMessage: FC<ChatMessageProps> = ({ sender, message, timeSent }) => {
    return (
        <div>
            <div>Profile</div>
            <div>
                <div>
                    <p>{sender}</p>
                    <p></p>
                </div>
                <div>
                    {message}
                </div>
            </div>
        </div>
    );
}

const ChatInput: FC = () => {
    return (
        <div>
            <input type="text"/>
            <button>Send</button>
        </div>
    );
}

export default Chat;