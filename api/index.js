import express from "express";
import mongoose from "mongoose";
const app = express();
import dotenv from "dotenv";
import { error } from "console";

dotenv.config();
mongoose
  .connect(process.env.MONGO)
  .then(() => console.log("Connected"))
  .catch((error) => console.log(error));

app.listen(3000, () => console.log("Server is running on 3000!!!"));
