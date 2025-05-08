/*3. Filtrar números pares
Escribe una función llamada filtrarPares que reciba un array de números y devuelva un nuevo array solo con los números pares. */

function filtrarPares(numeros) {
    let numerosPares = numeros.filter(numero => numero % 2 ===  0)
    return numerosPares;
}

console.log(filtrarPares([1, 2, 3, 4, 5, 6]));