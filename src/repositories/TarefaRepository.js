const Tarefa = require('../models/Tarefa');

exports.buscarTarefas = async() => {
    const tarefas = await Tarefa.find({});
    return tarefas;
}

exports.buscarTarefasPorId = async(id) => {
    const tarefa = await Tarefa.findById(id);
    return tarefa;
}

exports.inserirTarefa = async(tarefa) => {
    const tarefaPopulada = await Tarefa.create(tarefa);
    return tarefaPopulada;
}