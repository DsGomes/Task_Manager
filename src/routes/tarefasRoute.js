const express = require('express');
const router = express.Router();
const TarefasController = require('./../controllers/tarefasController');

router.get('/:usuarioId', TarefasController.get);

router.get('/:idTarefa/:usuarioId', TarefasController.getById);

router.post('/post', TarefasController.Post);

router.put('/put', TarefasController.Put);

router.delete('/:idTarefa/:usuarioId', TarefasController.Delete);

module.exports = router;
