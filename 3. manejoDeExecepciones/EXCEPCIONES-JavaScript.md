#  Manejo de Excepciones en JavaScript

## ¿Qué es una excepción?

Una **excepción** es un error que ocurre **durante la ejecución** del programa. JavaScript permite **capturar y manejar** esos errores para evitar que el programa se detenga inesperadamente.

---

##  Estructura básica: `try` / `catch`

```js
try {
  // Código que podría lanzar un error
} catch (error) {
  // Código que maneja el error
}
```

###  Ejemplo:
```js
try {
  const numero = parseInt("no es un número");
  if (isNaN(numero)) {
    throw new Error("No se pudo convertir a número");
  }
  console.log(numero);
} catch (err) {
  console.error("Ocurrió un error:", err.message);
}
```

---

##  Bloque `finally`

El bloque `finally` se ejecuta **siempre**, ocurra o no un error.

```js
try {
  console.log("Intentando ejecutar algo...");
} catch (error) {
  console.log("Algo salió mal.");
} finally {
  console.log("Esto se ejecuta siempre.");
}
```

>  Útil para cerrar conexiones, liberar recursos, o mostrar mensajes finales.

---

##  Lanzar errores manualmente con `throw`

Podés lanzar tus propios errores con la palabra clave `throw`.

```js
function dividir(a, b) {
  if (b === 0) {
    throw new Error("No se puede dividir por cero");
  }
  return a / b;
}

try {
  const resultado = dividir(10, 0);
  console.log(resultado);
} catch (error) {
  console.error("Error al dividir:", error.message);
}
```

---

##  Tipos de error comunes en JS

- `SyntaxError`: error de sintaxis.
- `TypeError`: uso de tipo incorrecto.
- `ReferenceError`: variable no definida.
- `RangeError`: valor fuera de rango aceptable.
- `Error`: clase general para lanzar errores personalizados.

---

##  Buenas prácticas

- No atrapar errores que no sabés cómo manejar.
- Usar `throw` solo cuando sea necesario y con mensajes claros.
- Evitar dejar `catch` vacío.
- Manejar errores de forma predecible para el usuario.

---

##  Ejercicio 

1. Crear una función que reciba una edad.
2. Si la edad no es un número o es menor a 0, lanzar un error.
3. Si todo es correcto, mostrar un mensaje de bienvenida.

```js
function verificarEdad(edad) {
  if (typeof edad !== "number" || edad < 0) {
    throw new Error("Edad inválida");
  }
  return "Bienvenido/a";
}

try {
  console.log(verificarEdad(-5));
} catch (e) {
  console.error("Validación fallida:", e.message);
}
```

---

##  Ejercicios de práctica

1. **Validación de nombre de usuario**  
   Crear una función que reciba un nombre de usuario. Si el nombre está vacío o no es una cadena, lanzar un error.

2. **Conversión de fecha**  
   Crear una función que reciba un string y lo intente convertir a objeto `Date`. Si la conversión falla (fecha inválida), lanzar un error.

3. **Verificar acceso**  
   Crear una función que reciba un objeto con los campos `usuario` y `rol`. Si el rol no es "admin", lanzar un error.

4. **Procesamiento de array de números**  
   Recorrer un array de números y lanzar un error si alguno no es un número válido.

5. **Simular llamada a una API**  
   Crear una función que reciba un valor booleano `exito`. Si `exito` es `false`, lanzar un error como si la API hubiera fallado. Usar `try/catch` para manejarlo.
