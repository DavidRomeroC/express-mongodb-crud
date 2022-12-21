const mongoose = require('mongoose')

mongoose.set('strictQuery', true)

const mongoDataBase = async() => {

    try {
        const db = await mongoose.connect("mongodb+srv://david-mongodb-crud:1SR33lHmBXIXgaok@cluster0.9z7mbt1.mongodb.net/?retryWrites=true&w=majority")
        console.log('DB connceted to', db.connection.name)
    } catch (error) {
        console.log(error)
    }
}

module.exports = mongoDataBase;
