// import schema snd mongoose
const { Schema, model } = require("mongoose");

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
    maxlength: 150,
  },
  price: {
    type: Number,
  },
  quantity: {
    type: Number,
    min: 0,
    default: 0
  },
});

const Product = model("Product", productSchema);

// export product model
module.exports = Product;
