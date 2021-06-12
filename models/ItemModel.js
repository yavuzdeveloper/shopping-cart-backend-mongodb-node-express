const mongoose = require('mongoose');


const ItemSchema = mongoose.Schema({ 
    count: {
        type: Number,
        required: true
    },
    book:{
        name: {
            type: String,
            required: true 
        },
        author:{
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        image: {
            type: String,
            required: true
        }
    }
        
});

module.exports = mongoose.model('Items', ItemSchema);