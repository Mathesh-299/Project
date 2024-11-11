import mongoose from "mongoose";

// Define the schema with a conventional name
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

// Define and export the model
const Product = mongoose.model('Product', productSchema);
export default Product;
