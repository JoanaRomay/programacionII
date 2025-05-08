/*6. Filtrar objetos por propiedad
Escribe una función llamada filtrarPorEdad que reciba un array de objetos con la estructura {nombre, edad} y devuelva solo aquellos con edad mayor o igual a 18. */


function filtrarPorEdad(personas) {
    let mayoresOIgualA18 = personas.filter(persona => persona.edad >= 18)
    return mayoresOIgualA18;
}

const personas = [
    { nombre: "Juan", edad: 16 },
    { nombre: "Ana", edad: 22 },
    { nombre: "Carlos", edad: 18 },
    { nombre: "Luis", edad: 15 }
];

console.log(filtrarPorEdad(personas));
