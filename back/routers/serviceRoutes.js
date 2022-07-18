
const express = require('express')
const router = express.Router()

const {
    getAllService,
    getOneService,
    newService,
    deleteService,
    updateService
} = require('../controller/serviceController')


router.get('/',getAllService)
router.post('/new/',newService)
router.get('/descri/:id',getOneService)
router.delete('/delete/:id',deleteService)
router.post('/update/:id',updateService)

module.exports = router

