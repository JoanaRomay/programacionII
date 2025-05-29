### Ejercicio: Carrito de Compras

**Contexto:** En JavaScript, antes de la introducción de la sintaxis de `class` (ES6), los patrones basados en closures eran una forma común de lograr encapsulación y crear objetos con estado y comportamiento "privado". Este ejercicio te pide que conviertas una clase moderna a este patrón clásico.

**Tarea:**
Analiza la siguiente clase `CarritoDeCompras`. Tu tarea es crear una **función factory** llamada `crearCarritoDeCompras` que, utilizando closures, produzca objetos con la misma funcionalidad.

**Clase Original `CarritoDeCompras`:**

```javascript
class CarritoDeCompras {
  constructor(idUsuario) {
    if (!idUsuario) {
      throw new Error("El ID de usuario es obligatorio para el carrito.");
    }
    this.idUsuario = idUsuario;
    this.items = []; // Array de objetos { productoId, nombre, precio, cantidad }
    this.fechaCreacion = Date.now();
  }

  agregarItem(productoId, nombre, precio, cantidad = 1) {
    if (!productoId || !nombre || typeof precio !== 'number' || precio <= 0 || typeof cantidad !== 'number' || cantidad <= 0) {
      console.error("Datos de ítem inválidos.");
      return false;
    }
    const existente = this.items.find(item => item.productoId === productoId);
    if (existente) {
      existente.cantidad += cantidad;
    } else {
      this.items.push({ productoId, nombre, precio, cantidad });
    }
    console.log(`${cantidad} x ${nombre} agregado(s)/actualizado(s) al carrito.`);
    return true;
  }

  removerItem(productoId, cantidadARemover = Infinity) {
    const itemIndex = this.items.findIndex(item => item.productoId === productoId);
    if (itemIndex === -1) {
      console.warn(`El producto con ID ${productoId} no se encuentra en el carrito.`);
      return false;
    }
    
    const item = this.items[itemIndex];
    if (cantidadARemover >= item.cantidad) {
      this.items.splice(itemIndex, 1);
      console.log(`Producto ${item.nombre} completamente removido del carrito.`);
    } else {
      item.cantidad -= cantidadARemover;
      console.log(`${cantidadARemover} unidades de ${item.nombre} removidas. Quedan: ${item.cantidad}`);
    }
    return true;
  }

  obtenerTotal() {
    return this.items.reduce((total, item) => total + (item.precio * item.cantidad), 0);
  }

  listarItems() {
    if (this.items.length === 0) {
      return "El carrito está vacío.";
    }
    let listado = `Carrito de ${this.idUsuario} (Total: $${this.obtenerTotal().toFixed(2)}):\n`;
    this.items.forEach(item => {
      listado += `- ${item.nombre} (ID: ${item.productoId}) x ${item.cantidad} @ $${item.precio.toFixed(2)} c/u\n`;
    });
    return listado;
  }

  vaciarCarrito() {
    this.items = [];
    console.log("El carrito ha sido vaciado.");
  }
}
```

**Tu Implementación con Closures:**

Debes crear la función `crearCarritoDeCompras(idUsuario)`:
1.  Debe validar que `idUsuario` sea provisto.
2.  Devolverá un objeto con los métodos: `agregarItem`, `removerItem`, `obtenerTotal`, `listarItems` y `vaciarCarrito`, con comportamiento idéntico a la clase.
3.  El estado interno (`idUsuario`, `items`, `fechaCreacion`) será manejado por variables dentro del closure.

**Espacio para tu solución:**
```javascript
function crearCarritoDeCompras(idUsuario) {
  // Tu código aquí
}
```

**Comportamiento Esperado (Ejemplo de uso):**
```javascript

try {
  const miCarrito = crearCarritoDeCompras("user123");
  miCarrito.agregarItem("prod01", "Libro JS", 25.99, 2);
  miCarrito.agregarItem("prod02", "Mouse Ergonómico", 45.50);
  miCarrito.agregarItem("prod01", "Libro JS", 25.99, 1); // Actualiza cantidad
  console.log(miCarrito.listarItems());
  // Debería listar:
  // Carrito de user123 (Total: $123.47):
  // - Libro JS (ID: prod01) x 3 @ $25.99 c/u
  // - Mouse Ergonómico (ID: prod02) x 1 @ $45.50 c/u

  console.log("Total:", miCarrito.obtenerTotal().toFixed(2)); // 123.47

  miCarrito.removerItem("prod01", 1); // Remueve 1 Libro JS
  console.log(miCarrito.listarItems());
  // Debería listar Libro JS x 2

  miCarrito.removerItem("prod02"); // Remueve todo el Mouse
  console.log(miCarrito.listarItems());
  
  // console.log(miCarrito.items); // Debería ser undefined
  miCarrito.vaciarCarrito();      // El carrito ha sido vaciado.
  console.log(miCarrito.listarItems()); // El carrito está vacío.

  // const carritoError = crearCarritoDeCompras(); // Lanzaría error
} catch (e) {
  console.error("Error con el carrito:", e.message);
}

```
---

