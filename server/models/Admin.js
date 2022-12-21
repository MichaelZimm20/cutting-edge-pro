// username, email, password , users [User.schema]
// import mongoose
const mongoose = require("mongoose");

// import schema from mongoose
const { Schema } = mongoose;

// import bcrypt for password hashing
const bcrypt = require("bcrypt");

// import User model and assign it to array so the admin can populate all user accounts
const User = require("./User");

// start new admin schema model
const adminSchema = new Schema({
  username: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  users: [User.schema],
});

// setup pre-save middleware to create password
adminSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltrounds = 10;
    this.password = await bcrypt.hash(this.password, saltrounds);
  }

  next();
});

// compare the incoming password with the hashed password
adminSchema.methods.isCorrectPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

// assign schema to a mongoose model
const Admin = mongoose.model("Admin", adminSchema);

// export model
module.exports = Admin;
