

const Service = require('../models/Service')

const getAllService = async(req,res)=>{
    try {
        const services = await Service.find({})
        res.json(services)
    } catch (error) {
        console.error(error)
        res.status(500).json({message:'Server error'})
    }
}

const newService = (req, res)=>{
    try {
        const service = new Service({
            service: req.body.service
        })

        service.save()
        res.json(service)

    } catch (error) {
        console.error(error)
    }
}

const getOneService = async (req, res)=>{
    try {
        const service = await Service.findById(req.params.id)
        res.json(service)
    } catch (error) {
        console.error(error)
    }
}

const deleteService = async (req,res)=>{
    try {
        const service = await Service.findByIdAndDelete(req.params.id)
        res.json(service)
    } catch (error) {
        console.error(error)
    }
}

const updateService = async (req, res) =>  {
    try {
        const newService = {service: req.body.service}
        const service = await Service.findOneAndUpdate(req.params.id, newService, {new:true})
        service.save()
        res.json(service)
    } catch (error) {
        console.error(error)
    }
}

module.exports = {
    getAllService,
    getOneService,
    newService,
    deleteService,
    updateService
}
