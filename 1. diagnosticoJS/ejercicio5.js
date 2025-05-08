/*. Contar ocurrencias en un array
Crea una función llamada contarOcurrencias que reciba un array y un valor, y retorne cuántas veces aparece ese valor en el array. */


function contarOcurrencias(array, valor) {
    let filtrados = array.filter(filtrado => filtrado === valor)

    return filtrados.length
}

console.log(contarOcurrencias([1, 2, 3, 1, 4, 1], 1)); // 3
console.log(contarOcurrencias(["a", "b", "a", "c", "a"], "a")); // 3