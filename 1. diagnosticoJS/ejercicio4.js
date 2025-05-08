/*Método "promedio" en una clase "Estudiante"
Crea una clase Estudiante que reciba un nombre y un array de calificaciones en su constructor. Agrega un método promedio() que calcule el promedio de las calificaciones. */

class Estudiante { 
    constructor(nombre, notas) { 
        this.nombre = nombre;
        this.notas = notas;
    }

    promedio() { 
        const sumaNotas = this.notas.reduce((acumulador, nota) => { 
            return acumulador + nota;
        }, 0)
        
        let promedio = sumaNotas / this.notas.length;
        return promedio;
    }
}

const estudiante = new Estudiante("Ana", [90, 80, 100, 70]);
console.log(estudiante.promedio());