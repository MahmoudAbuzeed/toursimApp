const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const itemImagesSchema = new Schema({

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

    image4: {
        type: String,
        
    },
    altr4: {
        type: String
    },

    image5: {
        type: String,
        
    },
    altr5: {
        type: String
    },

    itemId: {
        type: String,
        required: true
        
    }
});

module.exports = mongoose.model('ItemImages', itemImagesSchema);