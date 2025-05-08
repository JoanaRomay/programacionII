/*Verificar acceso
Crear una función que reciba un objeto con los campos usuario y rol. Si el rol no es "admin", lanzar un error.

 */

const usuario1 = {
    usuario: "juan",
    rol: "admin"
}
const usuario2 = {
    usuario: "joana",
    rol: "programadora"
}

function rol(usuario) {

    if (usuario.rol !== "admin") {
        throw new Error("Rol invalido")
        
    }
    return usuario
}


try {
    console.log(rol(usuario1));
} catch (error) {
    console.error("Error: ", error.message);
}

try {
    console.log(rol(usuario2));
} catch (error) {
    console.error("Error: ", error.message);
}