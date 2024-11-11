import dotenv from "dotenv";
import express from "express";
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// Middleware to parse JSON
app.use(express.json());

// Routes
app.use("/api/products", productRoutes);  
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`);
});
