
const mongoose = require('mongoose')

const ClientSchema = mongoose.Schema({

    nom:{
        type: String,
        require: true
    },
    prenom:{
        type: String,
        require: true
    },
    postnom:{
        type: String,
        require: true
    },
    numTel:{
        type: String,
        require: true
    },
    dateNaiss:{
        type: Date,
        require: true
    },
    adresse:{
        type: String,
        require: true
    },
    sexe:{
        type: String,
        require: true
    },
    password:{
        type: String,
        require: true
    },
    

    
})

const Client = mongoose.model('client', ClientSchema)

module.exports = Client
