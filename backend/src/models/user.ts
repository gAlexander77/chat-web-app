import { ObjectId } from 'mongodb';

interface Chat {
    chatId: ObjectId;
    accepted: boolean;
}

interface User {
    _id: ObjectId;
    username: string;
    password: string;
    chats: Chat[];  // Chat requests
}

export default User;