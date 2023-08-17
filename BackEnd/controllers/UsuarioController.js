const UsuarioModel = require("../models/Usuario")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")

module.exports = class UsuarioController {
    static async cadastraUsuario(req, res) {
        const { nome, sobrenome, nomeDeUsuario, senha, repitaSenha } = req.body

        if (!nome || !sobrenome || !nomeDeUsuario || !senha || !repitaSenha) {
            return res.status(400).send({
                mensagem: "Todos os campos devem ser preenchidos!"
            })
        }

        if (nome.length < 3 || nome.length > 300) {
            return res.status(422).send({
                mensagem: "Nome deve ter no mínimo 3 caracteres!"
            })
        } else if (sobrenome.length < 5 || sobrenome.length > 500) {
            return res.status(422).send({
                mensagem: "Sobrenome deve ter no mínimo 5 caracteres!"
            })
        }

        const validaNomeDeUsuario = await UsuarioModel.findOne({ nomeDeUsuario })

        if (validaNomeDeUsuario) {
            return res.status(422).send({
                mensagem: "Nome de usuario já foi cadastrado!"
            })
        }

        const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/

        if (!passwordRegex.test(senha)) {
            return res.status(422).send({
                mensagem: "Senha ter no mínimo 8 caracteres, uma letra maiúscula e um número!"
            })
        } else if (repitaSenha !== senha) {
            return res.status(422).send({
                mensagem: "Senhas devem ser iguais!"
            })
        }

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

        if (!nomeDeUsuario || !senha) {
            return res.status(400).send({
                mensagem: "Todos os campos são obrigatórios!"
            })
        }

        const usuario = await UsuarioModel.findOne({ nomeDeUsuario: nomeDeUsuario });

        if (!usuario) {
            return res.status(404).send({
                mensagem: "Nome de usuário ou senha incorretos!"
            })
        }

        const verificaSenha = await bcrypt.compare(senha, usuario.senha)

        if (!verificaSenha) {
            return res.status(404).send({
                mensagem: "Nome de usuário ou senha incorretos!"
            })
        }

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