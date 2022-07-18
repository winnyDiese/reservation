

require('dotenv').config()


// Module
const express = require('express')
const app = express()
const PORT = process.env.PORT || 4000


// My modules
const connectDb = require('./config/db')
const serviceRoute = require('./routers/serviceRoutes')
const clientRoute = require('./routers/clientRoutes')
const reservRoute = require('./routers/reservRoutes')
const offreRoute = require('./routers/offreRoutes')
const entrepriseRoute = require('./routers/entrepriseRoutes')


// Using module
app.use(express.json())

// Routes
app.use('/api/service', serviceRoute)
app.use('/api/client', clientRoute)
app.use('/api/reservation', reservRoute)
app.use('/api/offre', offreRoute)
app.use('/api/entreprise', entrepriseRoute)


connectDb()


app.listen(PORT, ()=> console.log(`The server is starting on port ${PORT}`))


