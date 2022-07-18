

const mongoose = require('mongoose')

const serviceSchema = new mongoose.Schema({
    service:{
        type : String,
        required: true
    },
    icon: String 
})

const Service = mongoose.model('Service', serviceSchema)

module.exports = Service


