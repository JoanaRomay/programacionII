/*Clase "Círculo"
Crea una clase llamada Circulo que reciba un radio en su constructor y tenga dos métodos:

area(): Retorna el área del círculo.
perimetro(): Retorna el perímetro del círculo.*/

class Circulo { 
    constructor(radio) {
        this.radio = radio;
    }

    area() { 
        let area = Math.PI * Math.pow(this.radio, 2);
        return area.toFixed(2);
    }

    perimetro() { 
        let perimetro = 2 * Math.PI * this.radio;
        return perimetro.toFixed(2);
    }
}

const c = new Circulo(5);
console.log(c.area());
console.log(c.perimetro());