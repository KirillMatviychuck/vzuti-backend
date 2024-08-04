const mongoose = require('mongoose')
const Schema = mongoose.Schema

const shoeSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    provider: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    is_in_inventory: {
        type: Boolean,
        required: true
    },
    sizes: [
        {
            size: Number,
            count: Number
        }
    ],
    imageURL: {
        type: String,
        required: true
    }
});

const Shoe = mongoose.model('Shoe', shoeSchema);

module.exports = Shoe;