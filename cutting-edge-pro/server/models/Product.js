// import schema snd mongoose
const { Schema, model } = require("mongoose");


const productSchema = new Schema (
    {
        productName: {
            type: String,
            required: true
        }, 
        descriptionBody: {
            type: String,
            required: true,
            maxlength: 150
        },
        image: {
            type: String 
        },
        productSize: {
            type: String
        },
        quantity: {
            type: Number
        },
        category: {
            type: Schema.Types.ObjectId,
            ref: 'Category'
        },
        price: {
            type: Number
        }

        

    }
);

const Product = model("Product", productSchema);

module.exports = Product;