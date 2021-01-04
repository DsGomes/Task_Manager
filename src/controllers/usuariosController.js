const UsuarioRepository = require('../repositories/UsuarioRepository');
const UsuarioService = require('../services/UsuarioService');

exports.Post = async(req, res) => {
    UsuarioService.cadastrarUsuario(req.body)
        .then(usuario => {
            if(usuario.message) return res.send(usuario.message);

            res.status(201).json(usuario);
        })
        .catch(error => {
            res.status(500).send("Não foi possível cadastrar o usuário. Tente novamente mais tarde!");
        })
}

exports.PutSenha = async(req, res) => {
    
}

exports.Delete = async(req, res) => {

}