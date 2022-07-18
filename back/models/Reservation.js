
const mongoose = require('mongoose')

const reservSchema = mongoose.Schema({

    // Cle etrangere
    idOffre:{
        type: String,
        require: true
    },
    idClient: {
        type: String,
        require: true
    },

    
    // Transport
    // destination: String,
    // provenance: String,
    // prix: String,
    // marqueCar: String,
    // photoVehicul: String,
    // nbrePlace: String,
    

    // Hotelerie
    // nbreSalon:Number,
    // nbreChambre: Number,
    // nbreSallebain: Number,
    // nbreCuisine: Number,
    // photoAppart: Number
})

const Reservation = mongoose.model('Reservation', reservSchema)

module.exports = Reservation
