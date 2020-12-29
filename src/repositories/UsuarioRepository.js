const Usuario = require('../models/Usuario');

exports.buscarUsuario = async() => {
    const usuario = await Usuario.find();
    return usuario;
}

exports.cadastrarUsuario = async() => {
    const usuario = await Usuario.create();
    return usuario;
}

exports.alterarSenhaUsuario = async() => {
    const usuario = await Usuario.findByIdAndUpdate();
    return usuario;
}

exports.deletarUsuario = async() => {
    const usuario = await Usuario.deleteOne();
    return usuario;
}