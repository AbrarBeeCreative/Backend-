// require('dotenv').config({path: './env'}); this is required example

import dotenv from "dotenv";
import connectDB from "./db/database.js";
import app from "./app.js";

// Load environment variables from .env file
dotenv.config({ path: "./.env" });

// Call the function to connect to the database
connectDB()
  .then(() => {
    try {
      app.listen(process.env.PORT || 4000, () => {
        console.log(`Server is Running on PORT : ${process.env.PORT}`);
      });
    } catch (error) {
      console.log(`Server Connection Failed`, error);
    }
  })
  .catch((error) => {
    console.log("MongoDB Connection Failed !!!", error);
  });
