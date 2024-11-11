import dotenv from "dotenv";
import express from "express";
import { connectDB } from "./config/db.js"; // Adjust path if necessary

dotenv.config();
connectDB();

const app = express();

app.use(express.json());


app.listen(5000, () => {
    console.log("Server started at http://localhost:5000");
});
