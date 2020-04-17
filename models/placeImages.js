const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const placeImagesSchema = new Schema({
    image1: {
        type: String,
        required: true
    },
    altr1: {
        type: String
    },
    image2: {
        type: String,
       
    },
    altr2: {
        type: String
    },
    image3: {
        type: String,
       
    },
    altr3: {
        type: String
    },
    placeId: {
        type: String,
        required: true
        
    }
    
});

module.exports = mongoose.model('PlaceImages', placeImagesSchema);