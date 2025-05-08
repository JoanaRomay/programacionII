/*Simular llamada a una API
Crear una función que reciba un valor booleano exito. Si exito es false, lanzar un error como si la API hubiera fallado. Usar try/catch para manejarlo.  */

const exito = false;

function api(exito) {
    try {
        if (exito === false) {
            throw new Error("falló conexión")
            
        }
        return "Conexión exitosa";
    } catch (error) {
       return "Error: " + error.message;
        
    }
    
}


console.log(api(exito));
