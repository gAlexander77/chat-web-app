import React, { FC, useState } from 'react';

interface MenuProps {
    selectedChat: string;
    setSelectedChat: React.Dispatch<React.SetStateAction<string>>;
}

const Menu: FC<MenuProps> = ({ selectedChat, setSelectedChat }) => {
    return (
        <div className="flex-none w-80 bg-gray-200">
            Menu
        </div>
    );
}

export default Menu;