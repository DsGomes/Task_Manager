const Usuario = require('../models/Usuario');

exports.buscarUsuario = async(nomeUsuario) => {
    const usuario = await Usuario.findOne({ "Nome": nomeUsuario });
    return usuario;
}

exports.cadastrarUsuario = async(usuario) => {
    const usuario = await Usuario.create(usuario);
    return usuario;
}

exports.alterarSenhaUsuario = async() => {
    const usuario = await Usuario.findByIdAndUpdate();
    return usuario;
}

exports.deletarUsuario = async(id) => {
    const usuario = await Usuario.deleteOne({ "_id": id });
    return usuario;
}