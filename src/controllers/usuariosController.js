const UsuarioService = require('../services/UsuarioService');

exports.Login = async(req, res) => {
    UsuarioService.Login(req.body)
        .then(usuario => {
            if(usuario.message) return res.send(usuario.message);

            res.status(200).json(usuario);
        })
        .catch(error => {
            res.status(500).send("Não foi possível fazer o login. Tente novamente mais tarde!");
        })
}

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


exports.Delete = async(req, res) => {

}