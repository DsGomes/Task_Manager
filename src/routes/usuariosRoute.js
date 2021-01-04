const express = require('express');
const router = express.Router();
const UsuarioController = require('../controllers/usuariosController');

router.post('/login', UsuarioController.Login);

router.post('/post', UsuarioController.Post);

router.delete('/', UsuarioController.Delete);

module.exports = router;
