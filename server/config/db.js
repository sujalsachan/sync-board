import mongoose from "mongoose";
import "dotenv/config";

export async function connectDB() {
  try {
    await mongoose
    .connect(process.env.MONGODB_URI)
    console.log("MongoDB Connected Successfully.");
  } catch (error) {
    console.log("MongoDB Connection Error : ", error);
  }
}
