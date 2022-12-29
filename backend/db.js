const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://mehran:memon786@cluster0.sqiwtqn.mongodb.net/?retryWrites=true&w=majority"

const connectToMongo = ()=>{
    mongoose.connect(mongoURI, ()=>{
        console.log("Connected to Mongo Successfully");
    })
}

module.exports = connectToMongo;