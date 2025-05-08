import usuarios from '../manejoDeUsuarios/usuarios.js'; 

/*2. Listar nombres y ciudades
Enunciado: Crear una función que devuelva un array con strings del tipo: "Nombre - Ciudad". */

function listarNombresYCiudades(usuarios) {

    const listarNombresYCiudades = usuarios.map(usuario => {
        return `${usuario.nombre} - ${usuario.domicilio.ciudad}`

    });

    return listarNombresYCiudades;
}

console.log(listarNombresYCiudades(usuarios));
