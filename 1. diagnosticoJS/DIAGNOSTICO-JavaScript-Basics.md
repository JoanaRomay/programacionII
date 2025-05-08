# Desafíos de Programación en JavaScript

## 1. Clase "Círculo"
Crea una clase llamada `Circulo` que reciba un radio en su constructor y tenga dos métodos:
- `area()`: Retorna el área del círculo.
- `perimetro()`: Retorna el perímetro del círculo.

**Ejemplo de uso:**  
```js
const c = new Circulo(5);
console.log(c.area()); // 78.54
console.log(c.perimetro()); // 31.42
```

## 2. Función "mayorQue"
Escribe una función llamada `mayorQue` que reciba dos números y retorne cuál es mayor. Si son iguales, debe devolver `"Son iguales"`.

**Ejemplo de uso:**
```js
console.log(mayorQue(10, 5)); // 10
console.log(mayorQue(3, 8)); // 8
console.log(mayorQue(7, 7)); // "Son iguales"
```

## 3. Filtrar números pares
Escribe una función llamada `filtrarPares` que reciba un array de números y devuelva un nuevo array solo con los números pares.

**Ejemplo de uso:**
```js
console.log(filtrarPares([1, 2, 3, 4, 5, 6])); // [2, 4, 6]
```

## 4. Método "promedio" en una clase "Estudiante"
Crea una clase `Estudiante` que reciba un nombre y un array de calificaciones en su constructor. Agrega un método `promedio()` que calcule el promedio de las calificaciones.

**Ejemplo de uso:**
```js
const estudiante = new Estudiante("Ana", [90, 80, 100, 70]);
console.log(estudiante.promedio()); // 85
```

## 5. Contar ocurrencias en un array
Crea una función llamada `contarOcurrencias` que reciba un array y un valor, y retorne cuántas veces aparece ese valor en el array.

**Ejemplo de uso:**
```js
console.log(contarOcurrencias([1, 2, 3, 1, 4, 1], 1)); // 3
console.log(contarOcurrencias(["a", "b", "a", "c", "a"], "a")); // 3
```

## 6. Filtrar objetos por propiedad
Escribe una función llamada `filtrarPorEdad` que reciba un array de objetos con la estructura `{nombre, edad}` y devuelva solo aquellos con edad mayor o igual a 18.

**Ejemplo de uso:**
```js
const personas = [
    { nombre: "Juan", edad: 16 },
    { nombre: "Ana", edad: 22 },
    { nombre: "Carlos", edad: 18 },
    { nombre: "Luis", edad: 15 }
];

console.log(filtrarPorEdad(personas));
// [{ nombre: "Ana", edad: 22 }, { nombre: "Carlos", edad: 18 }]
```

## 7. Contar el total de un carrito de compras
Crea una función `calcularTotal` que reciba un array de objetos representando productos con las propiedades `{nombre, precio, cantidad}` y retorne el total a pagar.

**Ejemplo de uso:**
```js
const carrito = [
    { nombre: "Laptop", precio: 1000, cantidad: 2 },
    { nombre: "Mouse", precio: 50, cantidad: 3 },
    { nombre: "Teclado", precio: 80, cantidad: 1 }
];

console.log(calcularTotal(carrito)); // 2280
```

## 8. Agrupar personas por ciudad
Crea una función `agruparPorCiudad` que reciba un array de objetos con la estructura `{nombre, ciudad}` y retorne un objeto donde las claves sean las ciudades y los valores sean arrays con los nombres de las personas de cada ciudad.

**Ejemplo de uso:**
```js
const personas = [
    { nombre: "Juan", ciudad: "Madrid" },
    { nombre: "Ana", ciudad: "Barcelona" },
    { nombre: "Carlos", ciudad: "Madrid" },
    { nombre: "Luis", ciudad: "Sevilla" },
    { nombre: "Elena", ciudad: "Barcelona" }
];

console.log(agruparPorCiudad(personas));
// {
//     Madrid: ["Juan", "Carlos"],
//     Barcelona: ["Ana", "Elena"],
//     Sevilla: ["Luis"]
// }
