
const mongoose = require('mongoose')

const EntrepriseSchema = mongoose.Schema({

    name:{
        type: String,
        require: true
    },
    sigle: String,
    numTel:{
        type: String,
        require: true
    },
    email:{
        type: Object,
        require: true
    },
    adresse:{
        type: Object,
        require: true
    },
    siteWeb:{
        type: Object,
        require: true
    }
    
})

const Entreprise = mongoose.model('entreprise', EntrepriseSchema)

module.exports = Entreprise
