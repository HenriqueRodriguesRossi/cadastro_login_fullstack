const express = require("express")
const app = express()
require("dotenv").config()
require("./db/connection")

app.use(express.json())
app.use(express.urlencoded({extended: true}))

const UsuarioRouter = require("./router/UsuarioRouter")
app.use(UsuarioRouter)

app.listen(8080, ()=>{
    console.log("Servidor rodando na porta 8080!")
})