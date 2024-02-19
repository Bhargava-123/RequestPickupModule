import express from "express"
import mongoose from "mongoose"

// Create Express app
const app = express();

// MongoDB connection URL
const mongoURI = 'mongodb://127.0.0.1:27017/revive';

// Connect to MongoDB using Mongoose
export default function connectDB() {
    mongoose.connect(mongoURI)
        .then(() => {
            console.log('Connected to MongoDB');
        })
        .catch((err) => {
            console.error('Error connecting to MongoDB:', err);
        });
}