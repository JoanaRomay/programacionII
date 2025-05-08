/*Agrupar personas por ciudad
Crea una función agruparPorCiudad que reciba un array de objetos con la estructura {nombre, ciudad} y retorne un objeto donde las claves sean las ciudades y los valores sean arrays con los nombres de las personas de cada ciudad. */

function agruparPorCiudad(personas) {
    let personasAgrupadasPorCiudad = {}; 

    personas.forEach(persona => {
        if (personasAgrupadasPorCiudad[persona.ciudad]) {
            personasAgrupadasPorCiudad[persona.ciudad].push(persona.nombre);
        } else {
            personasAgrupadasPorCiudad[persona.ciudad] = [persona.nombre];
        }
    });

    return personasAgrupadasPorCiudad;
}

const personas = [
    { nombre: "Juan", ciudad: "Madrid" },
    { nombre: "Ana", ciudad: "Barcelona" },
    { nombre: "Carlos", ciudad: "Madrid" },
    { nombre: "Luis", ciudad: "Sevilla" },
    { nombre: "Elena", ciudad: "Barcelona" }
];

console.log(agruparPorCiudad(personas));
