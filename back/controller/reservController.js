

const Reserv = require('../models/Reservation')

const getAllReserv = async (req,res)=>{
    try{
        const reserv = await Reserv.find({})
        res.json(reserv)
    }catch(error){
        console.error(error)
        // res.status(500).json({message:'Server error'})
        // console.log(error)
    }
}

const newReserv = (req, res)=>{
    try {
        const reserv = new Reserv({
            idOffre: req.body.idOffre,
            idClient: req.body.idClient
        })

        reserv.save()
        res.json(reserv)

    } catch (error) {
        console.error(error)
    }
}

const getOneReserv = async (req, res)=>{
    try {
        const reserv = await Reserv.findById(req.params.id)
        res.json(reserv)
    } catch (error) {
        console.error(error)
    }
}

const deleteReserv = async (req,res)=>{
    try {
        const reserv = await Reserv.findByIdAndDelete(req.params.id)
        res.json(reserv)
    } catch (error) {
        console.error(error)
    }
}

module.exports = {
    getAllReserv,
    getOneReserv,
    newReserv,
    deleteReserv
}

