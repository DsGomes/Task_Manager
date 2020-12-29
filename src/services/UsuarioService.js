const UsuarioRepository = require('../repositories/UsuarioRepository');
const CryptographyService = require('../services/cryptographyService');

exports.cadastrarUsuario = async(usuario) => {
    const usuario = await UsuarioRepository.buscarUsuario(usuario.Nome);
    if(usuario) return { message: "Usuário já cadastrado" };

    let senhaCriptografada = CryptographyService.crypt(usuario.Senha);
    usuario.Senha = senhaCriptografada;
    
    const usuarioCadastrado = await UsuarioRepository.cadastrarUsuario(usuario);
    return usuarioCadastrado;
}