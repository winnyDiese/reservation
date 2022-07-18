

const Entreprise = require('../models/Entreprise')

const getAllEntreprise = async (req,res)=>{
    try{
        const entreprise = await Entreprise.find({})
        res.json(entreprise)
    }catch(error){
        console.error(error)
        // res.status(500).json({message:'Server error'})
        // console.log(error)
    }
}


const newEntreprise = (req, res)=>{
    try {
        const entreprise = new Entreprise({
            name: req.body.name,
            sigle: req.body.sigle,
            email: req.body.email,
            adresse: req.body.adresse,
            siteweb: req.body.siteweb,

        })

        entreprise.save()
        res.json(entreprise)

    } catch (error) {
        console.error(error)
    }
}

const getOneEntreprise = async (req, res)=>{
    try {
        const entreprise = await Entreprise.findById(req.params.id)
        res.json(entreprise)
    } catch (error) {
        console.error(error)
    }
}

const deleteEntreprise = async (req,res)=>{
    try {
        const entreprise = await Entreprise.findByIdAndDelete(req.params.id)
        res.json(entreprise)
    } catch (error) {
        console.error(error)
    }
}


module.exports = {
    getAllEntreprise,
    newEntreprise,
    getOneEntreprise,
    deleteEntreprise
}

