

const Offre = require('../models/Offre')

const getAllOffre = async(req,res)=>{
    try {
        const offre = await Offre.find({})
        res.json(offre)
    } catch (error) {
        console.error(error)
        res.status(500).json({message:'Server error'})
    }
}

const newOffre = (req, res)=>{
    try {
        const offre = new Offre({
            idService: req.body.idService,
            idEntreprise: req.body.idEntreprise,
            offre: req.body.offre
        })

        offre.save()
        res.json(offre)

    }catch (error) {
        console.error(error)
    }
}

const getOneOffre = async (req, res)=>{
    try {
        const offre = await Offre.findById(req.params.id)
        res.json(offre)
    } catch (error) {
        console.error(error)
    }
}

const deleteOffre = async (req,res)=>{
    try {
        const offre = await Offre.findByIdAndDelete(req.params.id)
        res.json(offre)
    } catch (error) {
        console.error(error)
    }
}

module.exports = {
    getAllOffre,
    getOneOffre,
    newOffre,
    deleteOffre
}
