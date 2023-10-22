import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const app = express();

mongoose.connect(
  `mongodb+srv://tejasvaidya59:${process.env.MONGODB_PASSWORD}@cluster0.7rmpst2.mongodb.net/?retryWrites=true&w=majority`
).then(() => app.listen(5000, () => console.log("Connected to MongoDB")))
  .catch((err) => console.log(err));


