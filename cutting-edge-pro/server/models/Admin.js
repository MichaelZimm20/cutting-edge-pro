// username, email, password , users [User.schema]

const mongoose = require('mongoose');

const { Schema } = mongoose;
const bcrypt = require('bcrypt');
const User = require('./User');

const adminSchema = new Schema({
    username: {
        type: String,
        required: true, 
        trim: true
    },
    email: { 
        type: String,
        required: true,
        unique: true
    },
    users: [User.schema]
});

// setup pre-save middleware to create password 
adminSchema.pre('save', async function(next) {
    if(this.isNew || this.isModified('password')) {
        const saltrounds = 10;
        this.password = await bcrypt.hash(this.password, saltrounds);
    }

    next();
});


// compare the incoming password with the hashed password 
adminSchema.methods.isCorrectPassword = async function(password) {
    return await bcrypt.compare(password, this.password);
};

const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;