const mongoose = require("mongoose")

const db = async()=>{
    try {
        mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDb connected")
    } catch (error) {
        console.log("error",error)
    }
}
module.exports = db;