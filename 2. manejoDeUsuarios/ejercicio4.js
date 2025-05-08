import usuarios from '../manejoDeUsuarios/usuarios.js'; 
import { usuariosActivos } from './ejercicio1.js';

/*4. Calcular el promedio de edad de los usuarios activos
Enunciado: Crear una función que calcule el promedio de edad de los usuarios que están activos. */
const activos = usuariosActivos(usuarios);


function calcularPromedio(activos) {
    let sumaEdades = activos.reduce((acum, usuario) => {
        return acum = acum + usuario.edad;
    }, 0)
    let promedio = sumaEdades / activos.length
    return`El promedio de las edades es ${promedio}` 
}

console.log(calcularPromedio(activos));