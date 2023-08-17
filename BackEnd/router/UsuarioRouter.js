const router = require("express").Router()
const UsuarioController = require("../controllers/UsuarioController")

router.post("/nova/conta", UsuarioController.cadastraUsuario)
router.post("/novo/login", UsuarioController.login)

module.exports = router