const mongoose = require('mongoose')


const alienSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    id: {
        type: String,
        required: true,
        unique:true
    },
    title: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        required: true,
    }
    
})

module.exports = mongoose.model('Alien',alienSchema)