// import mongoose
const mongoose = require("mongoose");

// import schema from mongoose
const { Schema } = mongoose;

// Start of order schema model
const orderSchema = new Schema({
  purchaseDate: {
    type: Date,
    default: Date.now,
  },
  products: [
    {
      type: Schema.Types.ObjectId,
      ref: "Product",
    },
  ],
});

// assign schema to mongoose model
const Order = mongoose.model("Order", orderSchema);

// export model
module.exports = Order;
