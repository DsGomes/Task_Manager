const TarefaRepository = require('./../repositories/TarefaRepository');

exports.get = async(req, res) => {
    
    try{
        let tarefas = await TarefaRepository.buscarTarefas();
        res.status(200).json(tarefas);
    }catch{
        res.status(500).send("Erro interno do servidor");
    }   
}        

exports.getById = async(req, res) => {

    try{
        let tarefa = await TarefaRepository.buscarTarefasPorId(req.params.id);
        res.status(200).json(tarefa);
    }catch{
        if(err) return res.status(500).send("Erro interno do servidor");
    }
}

exports.Post = async(req, res) => {
    try{
        let response = await TarefaRepository.inserirTarefa(req.body);
        res.status(201).json(response);
    }catch{
        return res.status(500).send("Erro interno do servidor");
    }
}