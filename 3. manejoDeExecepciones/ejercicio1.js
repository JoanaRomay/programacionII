/*Validación de nombre de usuario
Crear una función que reciba un nombre de usuario. Si el nombre está vacío o no es una cadena, lanzar un error.
 */

function nombreUsuario(nombre) {

    try {
        if (typeof nombre !== "string" || nombre === "" || !/[a-zA-Z]/.test(nombre)) { 
            throw new Error("valor equivocado")
        }
        console.log("el nombre ingresado es: ", nombre);
    } catch (error) {
        console.error("error: ", error.message)
    }
    
}

nombreUsuario(111);
nombreUsuario("111");
nombreUsuario("Joana");