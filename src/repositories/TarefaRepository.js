const Tarefa = require('../models/Tarefa');

exports.buscarTarefas = async(usuarioId) => {
    const tarefas = await Tarefa.find({ 'UsuarioId': usuarioId });
    return tarefas;
}

exports.buscarTarefasPorId = async(id, usuarioId) => {
    const tarefa = await Tarefa.find({ '_id': id, 'UsuarioId': usuarioId });
    return tarefa;
}

exports.inserirTarefa = async(tarefa) => {
    const tarefaPopulada = await Tarefa.create(tarefa);
    return tarefaPopulada;
}

exports.atualizarTarefa = async(tarefa) => {
    const tarefaAtualizada = await Tarefa.findByIdAndUpdate(tarefa._id, tarefa);
    return tarefaAtualizada;
}

exports.deletarTarefa = async(idTarefa, usuarioId) => {
    const tarefaDeletada = await Tarefa.deleteOne({ "_id": idTarefa, "UsuarioId": usuarioId });
    return tarefaDeletada;
}