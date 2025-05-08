import usuarios from '../manejoDeUsuarios/usuarios.js'; 

/*3. Agrupar usuarios por ciudad
Enunciado: Crear una función que agrupe los usuarios por ciudad. El resultado debe ser un objeto cuyas claves sean las ciudades y los valores arrays con los nombres de los usuarios que viven allí. */


function agruparPorCiudad(usuarios) {

    const agrupadosPorCiudad = usuarios.reduce((agrupacionCiudades, usuario) => {
        if (!agrupacionCiudades[usuario.domicilio.ciudad]) {
            agrupacionCiudades[usuario.domicilio.ciudad] = [usuario.nombre];
        } else {
            agrupacionCiudades[usuario.domicilio.ciudad].push(usuario.nombre)
        }
        return agrupacionCiudades;

    }, {})
    
    return agrupadosPorCiudad
    
}

console.log(agruparPorCiudad(usuarios));