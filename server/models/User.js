const mongoose = require("mongoose");

const { Schema } = require("mongoose");
const bcrypt = require("bcrypt");
const Order = require("./Order");

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, "Must match an email address!"],
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
  },
  orders: [Order.schema],
});

// setting up middleware to create password
userSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// comparing typed password to hashed password
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

userSchema.virtual("orderCount").get(function () {
  return this.orders.length;
});

const User = mongoose.model("User", userSchema);

module.exports = User;
