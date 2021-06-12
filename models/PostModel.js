const mongoose = require('mongoose');


const postSchema = mongoose.Schema({ //tabloyu oluşturuyoruz;
    title: {
        type: String,
        required: true //zorunlu demek
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

module.exports = mongoose.model('Posts', postSchema);//export ediyoruz