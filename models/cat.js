const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const catSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    breed: {
        type: String,
        required: true
    },
    sex: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    age: {
        type: Number,
    },
    image: {
        type: String,
        required: true
    }
})

const Cat = mongoose.model('Cat', partnerSchema);

module.exports = Cat;