
const express = require('express')
const router = express.Router()

const {
    getAllReserv,
    getOneReserv,
    newReserv,
    deleteReserv
} = require('../controller/reservController')


router.get('/',getAllReserv)
router.get('/descri/:id',getOneReserv)
router.post('/new',newReserv)
router.delete('/delete/:id',deleteReserv)

module.exports = router

