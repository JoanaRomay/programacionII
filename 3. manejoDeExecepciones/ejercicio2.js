/*
Conversión de fecha
Crear una función que reciba un string y lo intente convertir a objeto Date. Si la conversión falla (fecha inválida), lanzar un error.
 */


function convertirObjDate(string) {

     const fecha = new Date(string);
        if (isNaN(fecha)) {
            throw new Error("Valor invalido")
        }
   
    return fecha
    
}
    try {
        console.log(convertirObjDate("hola"));
    
    } catch (error) {
        console.error("Error: ", error.message)
    }

    try {
        console.log(convertirObjDate("2020-03-02"));
    
    } catch (error) {
        console.error("Error: ", error.message)
    }

