import React, { FC, useState } from 'react';
import Menu from './components/Menu';
import Chat from './components/Chat';
import Test from './components/Test';

const ChatApplication: FC = () => {
    
    const [selectedChat, setSelectedChat] = useState<string>("");
    
    return  (
        <div className="flex flex-row h-screen">
            <Menu 
                selectedChat={selectedChat} 
                setSelectedChat={setSelectedChat}
            />
            <Chat
                selectedChat={selectedChat}
            />
            <Test/>
        </div>
    );
}

export default ChatApplication;