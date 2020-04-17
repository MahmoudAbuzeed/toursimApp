const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const placeSchema = new Schema({
    
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    dates: {
        type: Date,

    },
    fees: {
        type: Number,
        required: true
        
    },
    image: {
        type: String,
        required: true
    },
    map: {
        type: String,
        
    }
    
});

module.exports = mongoose.model('Place', placeSchema);