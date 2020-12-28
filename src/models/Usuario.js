const mongoose = require('mongoose');
const { Schema } = mongoose;

const UsuarioSchema = new Schema({
    _id: Number,
    Nome: String,
    Senha: String
});

module.exports = mongoose.model('Usuario', UsuarioSchema);