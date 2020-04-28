const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const placeCatSchema = new Schema({
   
    rank: {
        type: String,
        
    },
    placeId: {
        type: String,
        required: true
    },
    catId: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('PlaceCat', placeCatSchema);