const Usuario = require('../models/Usuario');

exports.buscarUsuario = async(nomeUsuario) => {
    const usuario = await Usuario.findOne({ "Nome": nomeUsuario });
    return usuario;
}

exports.cadastrarUsuario = async(usuario) => {
    const usuarioCadastrado = await Usuario.create(usuario);
    return usuarioCadastrado;
}

exports.deletarUsuario = async(id) => {
    const usuarioDeletado = await Usuario.deleteOne({ "_id": id });
    return usuarioDeletado;
}