// import schema snd mongoose
const { Schema } = require("mongoose");
const mongoose = require("mongoose");

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
  category: {
    type: Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
  image: {
    type: String,
  },
});

const Product = mongoose.model("Product", productSchema);

// export product model
module.exports = Product;
