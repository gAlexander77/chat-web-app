import { ObjectId } from 'mongodb';

interface Message {
    sender: string; // Username of sender
    message: string;
    timeSent: Date;
}

interface Chat {
    _id: ObjectId;
    type: string;
    members: string[]; // usernames of members
    messages: Message[];
}

export default Chat;