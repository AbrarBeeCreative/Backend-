import mongoose from "mongoose";
import { DB_Name } from "../constants.js";

const connectDB = async () => {
  try {
    // Connect to MongoDB
    const connectionInstance = await mongoose.connect(process.env.MONGODB_URI, {
      dbName: DB_Name, // Explicitly specify the database name
    });

    console.log(
      `MongoDB Connected! DB Host: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.error("DB Connection Failed", error.message);
    process.exit(1); // Exit process with failure
  }
};

export default connectDB;
