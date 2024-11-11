import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGOURI);
        console.log(`DB connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Connection error: ${error.stack}`);
        process.exit(1);
    }
};

//mathesh290905