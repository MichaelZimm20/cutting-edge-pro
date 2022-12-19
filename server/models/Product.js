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
  image: {
    type: String,
  },
  size: {
    type: String,
  },
  quantity: {
    type: Number,
    min: 0,
    default: 0
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: "Category",
  },
  price: {
    type: Number,
  },
});

const Product = model("Product", productSchema);

// export product model
module.exports = Product;
