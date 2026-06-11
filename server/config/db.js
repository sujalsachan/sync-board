import mongoose from "mongoose";
import "dotenv/config";

export async function connectDB() {
  try {
    await mongoose
    .connect(process.env.MONGODB_URI)
    console.log("MongoDB connected successfully.");
  } catch (error) {
    console.log("MongoDB connection error : ", error);
  }
}
