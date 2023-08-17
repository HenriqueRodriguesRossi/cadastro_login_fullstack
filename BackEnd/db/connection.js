const mongoose = require("mongoose")
const dbUser = process.env.DBUSER
const dbPass = process.env.DBPASS

const connection = ()=>{
    mongoose.connect(`mongodb+srv://${dbUser}:${dbPass}@cluster0.suu8a1y.mongodb.net/?retryWrites=true&w=majority`)

    const connect = mongoose.connection

    connect.on("open", ()=>{
        console.log("Conectado com sucesso!")
    })

    connect.on("error", (error)=>{
        console.log("Erro ao conectar: " + error)
    })
}

connection()
module.exports = mongoose