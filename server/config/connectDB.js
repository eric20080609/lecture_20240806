const mongoose = require('mongoose')

async function connectDB(){
    try {
        var MONGODB_URI = process.env.MONGODB_URI
        console.log(MONGODB_URI)
        await mongoose.connect(MONGODB_URI)

        const connection = mongoose.connection

        connection.on('connected',()=>{
            console.log("Connect to DB")
        })

        connection.on('error',(error)=>{
            console.log("Something is wrong in mongodb ",error)
        })
    } catch (error) {
        console.log("Something is wrong ",error)
    }
}

module.exports = connectDB