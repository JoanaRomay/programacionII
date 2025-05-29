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
  
const carrito1 = new CarritoDeCompras("usuario1");

carrito1.agregarItem("producto1", "licuadora", 50, 3);
console.log(carrito1.listarItems());