const UsuarioRepository = require('../repositories/UsuarioRepository');
const CryptographyService = require('../services/cryptographyService');

exports.cadastrarUsuario = async(usuario) => {
    const usuarioJaExistente = await UsuarioRepository.buscarUsuario(usuario.Nome);
    if(usuarioJaExistente) return { message: "Usuário já cadastrado" };

    let senhaCriptografada = await CryptographyService.crypt(usuario.Senha);
    usuario.Senha = senhaCriptografada;
    
    const usuarioCadastrado = await UsuarioRepository.cadastrarUsuario(usuario);
    return usuarioCadastrado;
}