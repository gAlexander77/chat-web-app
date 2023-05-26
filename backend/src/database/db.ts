import { MongoClient, Db } from 'mongodb';

let db: Db;

export const connectToDatabase = async (): Promise<void> => {
  try {
    const uri = 'mongodb://localhost:27017';
    const client = new MongoClient(uri);
    await client.connect();
    db = client.db('myapp');
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Failed to connect to MongoDB:', error);
  }
};

export const getDB = (): Db => {
  if (!db) {
    throw new Error('Database not initialized');
  }
  return db;
};