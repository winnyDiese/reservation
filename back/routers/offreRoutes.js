
const express = require('express')
const router = express.Router()

const {
    getAllOffre,
    getOneOffre,
    newOffre,
    deleteOffre
} = require('../controller/offreControllers')


router.get('/',getAllOffre)
router.get('/descri/:id',getOneOffre)
router.post('/new/',newOffre)
router.delete('/delete/:id',deleteOffre)

module.exports = router

