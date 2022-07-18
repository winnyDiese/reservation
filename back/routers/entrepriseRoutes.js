
const express = require('express')
const router = express.Router()

const {
    getAllEntreprise,
    newEntreprise,
    getOneEntreprise,
    deleteEntreprise
} = require('../controller/entrepriseController')


router.get('/',getAllEntreprise)
router.get('/descri/:id',getOneEntreprise)
router.post('/new/',newEntreprise)
router.delete('/delete/:id',deleteEntreprise)

module.exports = router

