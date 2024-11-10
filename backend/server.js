import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import { connectDB } from "./config/db.js"; // Adjust path if necessary
import Product from "./models/product.model.js";

dotenv.config();
connectDB();

const app = express();

app.use(express.json());

app.get("/api/products", async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json({ success: true, data: products })
    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: "No products" });
    }

})


app.post("/api/products", async (req, res) => {
    const product = req.body;
    if (!product.name || !product.price || !product.image) {
        return res.status(404).json({ success: false, message: "Please enter the fields" })
    }
    else {
        const newProduct = new Product(product);
        try {
            await newProduct.save();
            res.status(200).json({ success: true, data: newProduct });

        } catch (error) {
            console.log(error);
            res.status(500).json({ success: false, message: "Server Error" });
        }
    }
})


app.put("/api/products/:id", async (req, res) => {
    const { id } = req.params;
    const products = req.body;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ success: false, message: "Please enter Valid id" })
    }
    else {
        try {
            const update = await Product.findByIdAndUpdate(id, products, { new: true })
            res.status(200).json({ success: true, data: update })
        } catch (error) {
            console.error(error);
            res.status(500).json({ success: false, message: "Server Error" });
        }
    }

})
app.delete("/api/products/:id", async (req, res) => {
    const { id } = req.params;
    console.log("id", id);
    try {
        await Product.findByIdAndDelete(id);
        res.status(200).json({ success: true, message: "Product deleted" });
        // console.log(res.json());S
    } catch (error) {
        res.status(500).json({ success: false, message: "Product Not found" });

    }
})
app.listen(5000, () => {
    console.log("Server started at http://localhost:5000");
});
