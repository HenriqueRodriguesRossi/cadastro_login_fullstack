const express = require("express")
const app = express()
const cors = require("cors")
require("dotenv").config()
require("./db/connection")

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())

const UsuarioRouter = require("./router/UsuarioRouter")
app.use(UsuarioRouter)

app.listen(8080, ()=>{
    console.log("Servidor rodando na porta 8080!")
})