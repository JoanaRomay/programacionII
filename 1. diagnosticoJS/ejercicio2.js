/*2. Función "mayorQue"
Escribe una función llamada mayorQue que reciba dos números y retorne cuál es mayor. Si son iguales, debe devolver "Son iguales".*/

function mayorQue(num1, num2) {
    if (num1 > num2) {
        return `${num1} es mayor que ${num2}`
    } else if (num2 > num1) {
        return `${num2} es mayor que ${num1}`
    } else { 
      return  'Ambos numeros son iguales'
    }
}
console.log(mayorQue(10, 5));
console.log(mayorQue(3, 8));
console.log(mayorQue(7, 7)); 