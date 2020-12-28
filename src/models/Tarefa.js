const mongoose = require('mongoose');
const { Schema } = mongoose;

const TarefaSchema = new Schema({
    _id: Number,
    Descricao: String,
    DataExecucao: Date,
    Duracao: Number,
    UsuarioId: Number
});

module.exports = mongoose.model('Tarefa', TarefaSchema);