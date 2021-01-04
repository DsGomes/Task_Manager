const UsuarioRepository = require('../repositories/UsuarioRepository');
const CryptographyService = require('../services/cryptographyService');

exports.Login = async(usuario) => {
    const usuarioExistente = await validarExistenciaUsuario(usuario);
    if(usuarioExistente){
        const decrypted = CryptographyService.decrypt(usuarioExistente.Senha);
        if (usuario.Senha === decrypted) return "OK";

        return { message: "Senha incorreta!" };
    }

    return { message: "Usuário não cadastrado" };
}

exports.cadastrarUsuario = async(usuario) => {
    const usuarioExistente = validarExistenciaUsuario(usuario);
    if(usuarioExistente) return { message: "Usuário já cadastrado" };

    let senhaCriptografada = CryptographyService.crypt(usuario.Senha);
    usuario.Senha = senhaCriptografada;
    
    const usuarioCadastrado = await UsuarioRepository.cadastrarUsuario(usuario);
    return usuarioCadastrado;
}

const validarExistenciaUsuario = async(usuario) => {
    const usuarioJaExistente = await UsuarioRepository.buscarUsuario(usuario.Nome);
    return usuarioJaExistente;
} 