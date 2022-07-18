
const mongoose = require('mongoose')

const offreSchema = mongoose.Schema({

    // Cle etrangere
    idService:{
        type: String,
        require: true
    },
    idEntreprise:{
        type: String,
        require: true
    },
    offre:{
        type: Object,
        require: true
    }
    
})

const Offre = mongoose.model('offre', offreSchema)

module.exports = Offre
