const UsuarioModel = require("../models/Usuario")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")

module.exports = class UsuarioController {
    static async cadastraUsuario(req, res) {
        const { nome, sobrenome, nomeDeUsuario, senha, repitaSenha } = req.body

        const salt = await bcrypt.genSalt(12)
        const senhaHash = await bcrypt.hash(senha, salt)

        try {
            const novoUsuario = new UsuarioModel({
                nome,
                sobrenome,
                nomeDeUsuario,
                senha: senhaHash
            })

            await novoUsuario.save()

            return res.status(201).send({
                mensagem: "Usuário criado com sucesso!"
            })
        } catch (error) {
            return res.status(500).send({
                mensagem: "Erro ao cadastrar usuário!"
            },
                console.log(error)
            )
        }
    }

    static async login(req, res) {
        const { nomeDeUsuario, senha } = req.body
        
        try{
            const secret = process.env.SECRET

            const token = jwt.sign({
                id: usuario._id
            },
                secret
            )

            return res.status(200).send({
                mensagem: "Usuário autenticado com sucesso! <br> token: " + token
            })
        }catch(error){
            return res.status(500).send({
                mensagem: "Erro ao efetuar o login!"
            },
                console.log(error)
            )
        }
    }
}