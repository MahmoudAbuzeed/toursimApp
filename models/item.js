const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const itemSchema = new Schema ({

    name: {
        type: String,
        required: true
    },
    description: {
        type: String, 
        required: true
    },
    voiceNote: {
        type: String,
        required: true
    },
    qrImage: {
        type: String,
        required: true
    },
    noOfScans: {
        type: Number
    },
    placeId: {
        type: String,
        required: true
        
    }

});

module.exports = mongoose.model('Item', itemSchema);