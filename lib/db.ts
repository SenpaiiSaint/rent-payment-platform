import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
    throw new Error("Missing MONGO_URI enviroment variable");
}

export const connectDB = async () => {
    if (mongoose.connection.readyState >= 1) {
        console.log("Already connected to MongoDB");
        return;
    }

    try {
        await mongoose.connect(MONGO_URI);
        console.log("MongoDB connected (Rent Payment Platform)");
    } catch (err) {
        console.error("MongoDB connection error:", err);
        throw err;
    }
};