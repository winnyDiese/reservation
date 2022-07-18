

const Client = require('../models/Client')

const getAllClient = async (req,res)=>{
    try{
        const clients = await Client.find({})
        res.json(clients)
    }catch(error){
        console.error(error)
        // res.status(500).json({message:'Server error'})
        // console.log(error)
    }
}

const getOneClient = async (req,res)=>{
    try {
        const client = await Client.findById(req.params.id)
        res.json(client)
    } catch (error) {
        console.error(error)
    }
}

const newClient = (req, res) =>{
    try{
        const client = new Client({
            nom: req.body.nom,
            postnom: req.body.postnom,
            prenom: req.body.prenom,
            numTel: req.body.numTel,
            dateNaiss: req.body.dateNaiss,
            adresse: req.body.adresse,
            sexe: req.body.sexe,
            password: req.body.password
        })

        client.save()
        res.json(client)

    }catch(error){
        console.error(error)
    }
}

const deleteClient = async (req, res) => {
    try{
        const client = await Client.findByIdAndDelete(req.params.id)
        res.json(client)
    }catch(error){
        console.error(error)
    }
}

const updateClient = async (req, res) => {
    try {
        // const newClient = {
            // nom: req.body.nom,
            // postnom: req.body.postnom,
            // prenom: req.body.prenom,
            // numTel: req.body.numTel,
            // dateNaiss: req.body.dateNaiss,
            // adresse: req.body.adresse,
            // sexe: req.body.sexe,
            // password: req.body.password
        // }

        // const client = Client.findOneAndUpdate({"_id":req.params.id}, newClient, {new: true})
        // console.log(client)
        // client.save()
        // res.json(client)

        const client = await Client.findById(req.params.id)

        client.nom = req.body.nom,
        client.postnom = req.body.postnom,
        client.prenom = req.body.prenom,
        client.numTel = req.body.numTel,
        client.dateNaiss = req.body.dateNaiss,
        client.adresse = req.body.adresse,
        client.sexe = req.body.sexe,
        client.password = req.body.password

        client.save()
        

    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    getAllClient,
    getOneClient,
    newClient,
    deleteClient,
    updateClient
}

