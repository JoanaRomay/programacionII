/*Procesamiento de array de números
Recorrer un array de números y lanzar un error si alguno no es un número válido.
*/

const numeros = [1, 2, "tres", 4, 5];

numeros.forEach(numero => { 
    try {
        
        if (isNaN(numero)) {
            throw new Error("no es un numero")            
        }
        console.log(numero);
    } catch (error) {
        console.error("Error: ", error.message);
    }
    });