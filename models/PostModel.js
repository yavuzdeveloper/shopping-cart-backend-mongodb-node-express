const mongoose = require('mongoose');


const postSchema = mongoose.Schema({ 
    title: {
        type: String,
        required: true 
    },
    description:{
        type: String,
        required: true 
    },
    date: {
        type: Date,
        deafult: Date.now
    }
});

module.exports = mongoose.model('Posts', postSchema);