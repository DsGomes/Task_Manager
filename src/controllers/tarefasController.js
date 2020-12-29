const TarefaRepository = require('./../repositories/TarefaRepository');

exports.get = async(req, res) => {
    
    TarefaRepository.buscarTarefas(req.params.usuarioId)
        .then(tarefas => {
            res.status(200).json(tarefas);
        })
        .catch(error => {
            res.status(500).send(error.message);
        })
}

exports.getById = async(req, res) => {

    TarefaRepository.buscarTarefasPorId(req.params.idTarefa, req.params.usuarioId)
        .then(tarefa => {
            if(!tarefa) return res.status(404).send("Tarefa não encontrada");
            
            res.status(200).json(tarefa);
        })
        .catch(error => {
            res.status(500).send(error.message);
        })
}

exports.Post = async(req, res) => {
    TarefaRepository.inserirTarefa(req.body)
        .then(tarefa => {
            res.status(201).json(tarefa);
        })
        .catch(error => {
            res.status(500).send(error.message);
        })
}

exports.Put = async(req, res) => {
    TarefaRepository.atualizarTarefa(req.body)
        .then(tarefa => {
            res.status(201).json(tarefa);
        })
        .catch(error => {
            res.status(500).send(error.message);
        })
}

exports.Delete = async(req, res) => {
    TarefaRepository.deletarTarefa(req.params.idTarefa, req.params.usuarioId)
        .then(tarefa => {
            res.status(200).json(tarefa);
        })
        .catch(error => {
            res.status(500).send(error.message);
        })
}