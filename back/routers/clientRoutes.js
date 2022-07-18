
const express = require('express')
const router = express.Router()

const {
    getAllClient,
    getOneClient,
    newClient,
    deleteClient,
    updateClient
} = require('../controller/clientController')


router.get('/',getAllClient)
router.get('/descri/:id',getOneClient)
router.post('/new/',newClient)
router.delete('/delete/:id',deleteClient)
router.post('/update/:id',updateClient)

module.exports = router

