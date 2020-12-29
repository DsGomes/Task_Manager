const express = require('express');
const router = express.Router();
const TarefasController = require('./../controllers/tarefasController');

router.get('/', TarefasController.get);

router.get('/:id', TarefasController.getById);

router.post('/post', TarefasController.Post);

module.exports = router;
