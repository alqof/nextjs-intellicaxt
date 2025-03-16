// import mongoose from "mongoose";

// const { MONGODB_URI } = process.env;

// export const connectToDatabase = async () => {
//     try {
//         const { connection } = await mongoose.connect(MONGODB_URI as string);
//         if (connection.readyState === 1) {
//             return Promise.resolve(true);
//         }
//     } catch (error) {
//         console.error(error);
//         return Promise.reject(error);
//     }
// };







import mongoose, { Mongoose } from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

interface MongooseConnection {
    conn: Mongoose | null;
    promise: Promise<Mongoose> | null;
}

let cached: MongooseConnection = (global as any).mongoose
if(!cached) {
    cached = (global as any).mongoose = { 
        conn: null, 
        promise: null 
    }
}

export const connectToDatabase = async () => {
    if(cached.conn) return cached.conn;
    if(!MONGODB_URI) throw new Error('Missing MONGODB_URI');

    cached.promise = cached.promise || mongoose.connect(MONGODB_URI, {dbName: 'db-intellicaxt', bufferCommands: false})
    cached.conn = await cached.promise;

    return cached.conn;
}