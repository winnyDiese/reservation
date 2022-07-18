

require('dotenv').config()
const mongoose = require('mongoose')

const connectDb = async ()=> {
    try{
        await mongoose.connect(process.env.MONGO_DB)
        console.log('Mongodb connection SUCCESSFULL ')
    }catch(error){
        console.error('Mongodb connection Fail')
        // console.log(error)
    }
}

module.exports = connectDb

