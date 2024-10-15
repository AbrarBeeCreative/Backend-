// require('dotenv').config({path: './env'}); this is required example

import dotenv from 'dotenv';
import connectDB from './db/database.js';

// Load environment variables from .env file
dotenv.config({ path: './.env' });

// Call the function to connect to the database
connectDB();