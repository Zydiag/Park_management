import mongoose, { Connection, ConnectOptions } from 'mongoose';

const MONGODB_URI = process.env.DATABASE_URL as string;



interface MongooseGlobal extends NodeJS.Global {
  mongoose: {
    conn: Connection | null;
    promise: Promise<Connection> | null;
  };
}

declare const global: MongooseGlobal;

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function connectDB(): Promise<Connection> {
  if (!MONGODB_URI) {
    throw new Error(
      'Please define the MONGODB_URI environment variable inside .env.local'
    );
  }
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts: ConnectOptions = { dbName: 'park' };

    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      return mongoose.connection;
    });
  }
  cached.conn = await cached.promise;
  return cached.conn;
}

export default connectDB;
