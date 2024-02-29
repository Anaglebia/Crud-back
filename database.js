require('dotenv').config()

// mongodb+srv://bia22sp:<1AXbE0WhzypadMum>@cluster0.7aoab0g.mongodb.net/

const mongoose = require('mongoose')
mongoose.set('strictQuery', true)

const connectDb = () =>{
    console.log("Conectado com Mongo")

    mongoose.connect(process.env.MONGO_URI)
    .then(()=> console.log('Mongo Conectado com sucesso'))
    .catch(error => console.log(error))
}

module.exports = connectDb