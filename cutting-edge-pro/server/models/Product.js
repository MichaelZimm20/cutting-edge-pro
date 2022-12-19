// import schema snd mongoose
const mongoose = require('mongoose');
const { Schema } = require("mongoose");

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
    min: 0.99
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  }
});

const Product = mongoose.model("Product", productSchema);

// export product model
module.exports = Product;
