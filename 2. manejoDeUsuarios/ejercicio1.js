import usuarios from '../manejoDeUsuarios/usuarios.js'; 

/*1. Obtener los usuarios activos
Enunciado: Crear una función que devuelva todos los usuarios que estén activos (activo: true). */

export function usuariosActivos(usuarios) {
    let usuariosActivos = usuarios.filter(usuario => usuario.activo === true);

    return usuariosActivos;
    
}

//console.log(usuariosActivos(usuarios));
