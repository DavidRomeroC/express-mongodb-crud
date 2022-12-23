const mongoose = require('mongoose')
const MONGODB_URI = require('./config')


mongoose.set('strictQuery', true)



const mongoDataBase = async () => {

    try {
        const db = await mongoose.connect(MONGODB_URI)
        console.log('DB connceted to', db.connection.name)
    } catch (error) {
        console.log(error)
    }
}

module.exports = mongoDataBase;
