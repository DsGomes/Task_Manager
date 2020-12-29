const express = require('express');
const router = express.Router();
const UsuarioController = require('../controllers/usuariosController');

router.post('/post', UsuarioController.Post);

router.put('/put', UsuarioController.PutSenha);

router.delete('/', UsuarioController.Delete);

module.exports = router;
