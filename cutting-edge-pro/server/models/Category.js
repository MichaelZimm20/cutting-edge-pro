// import mongoose 
const mongoose = require('mongoose');

// import schema from mongoose 
const { Schema } = mongoose;

// start new category schema model
const categorySchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    // products: [{
    //     type: Schema.Types.ObjectId,
    //     ref: 'Product'
    // }]
});
// assign schema to a mongoose model
const Category = mongoose.model('Category', categorySchema); 

// export model
module.exports = Category;