const mongoose = require("mongoose")

const productSchema = mongoose.Schema({
    image: String,
    name: String,
    description: String,
    price: Number,


}, { collection: "Product", timestamps: true })

module.exports = mongoose.model("Product", productSchema)