import Usuario from './../models/Schemas/UsuarioSchema';

class UsuarioRepository{
    buscarUsuarios = () => {
       let usuarios = Usuario.find();
       return usuarios;     
    }
}

module.exports = UsuarioRepository;