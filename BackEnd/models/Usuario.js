const mongoose = require("mongoose")

const UsuarioModel = new mongoose.Schema({
    nome:{
        type: String,
        require: true
    },
    sobrenome:{
        type:String,
        require: true
    },
    nomeDeUsuario:{
        type: String,
        require: true
    },
    senha: {
        type: String,
        require: true
    },
    repitaSenha:{
        type: String,
        require: true
    }
}, {versionKey: false})

module.exports = mongoose.model("Usuario", UsuarioModel)