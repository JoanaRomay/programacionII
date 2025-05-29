/*Ejercicio 2: Procesador de Listas de Invitados
Debes crear una función procesarListas que acepte un número variable de listas de invitados (arrays de strings con nombres). La función debe:

Combinar todas las listas en una sola.
Eliminar nombres duplicados (cada invitado debe aparecer solo una vez).
Devolver un objeto con dos propiedades:
invitadosUnicos: Un Set con los nombres únicos de los invitados.
conteoTotalInvitados: El número total de nombres recibidos antes de la deduplicación.
conteoInvitadosUnicos: El número de invitados únicos.
Pistas:

Usa el operador rest para aceptar múltiples listas.
Usa el operador spread para combinar los arrays.
Usa Set para obtener los nombres únicos. */


function procesarListas(...listaInvitados) {
    
    let listaConvinada = listaInvitados.flat();
    let listaConvinadaSinDuplicados = new Set(listaConvinada);
    let invitadosConteoTotal = listaConvinada.length;
    let invitadosUnicos = listaConvinadaSinDuplicados.size;

    return {
        invitadosUnicos: listaConvinadaSinDuplicados,
        totalInvitados: invitadosConteoTotal,
        conteoInvitadosUnicos: invitadosUnicos
    };
}
