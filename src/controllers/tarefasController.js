const TarefaRepository = require('./../repositories/TarefaRepository');

exports.get = async(req, res) => {
    
    TarefaRepository.buscarTarefas()
        .then(tarefas => {
            res.status(200).json(tarefas);
        })
        .catch(error => {
            res.status(500).send("Não foi possível retornar as tarefas. Tente novamente em poucos instantes!");
        })
}        

exports.getById = async(req, res) => {

    TarefaRepository.buscarTarefasPorId(req.params.id)
        .then(tarefa => {
            res.status(200).json(tarefa);
        })
        .catch(error => {
            res.status(500).send("Não foi possível retornar a tarefa. Tente novamente em poucos instantes!");
        })
}

exports.Post = async(req, res) => {
    TarefaRepository.inserirTarefa(req.body)
        .then(tarefa => {
            res.status(201).json(tarefa);
        })
        .catch(error => {
            res.status(500).send("Não foi possível cadastrar a tarefa. Tente novamente em poucos instantes!");
        })
}