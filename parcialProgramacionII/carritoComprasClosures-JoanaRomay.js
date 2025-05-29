function carritoDeCompras(idUsuario) {

    if (!idUsuario) {
        throw new Error("El ID de usuario es obligatorio para el carrito.");
    }
    let items = [];
    const fechaCreacion = Date.now();

    function agregarItem(productoId, nombre, precio, cantidad = 1) {
        if (!productoId || !nombre || typeof precio !== 'number' || precio <= 0 || typeof cantidad !== 'number' || cantidad <= 0) {
            console.error("Datos de ítem inválidos.");
            return false;
        }
        const existente = items.find((item) => item.productoId === productoId);

        if (existente) { //si es true
            existente.cantidad += cantidad;
        } else { 
            items.push({ productoId, nombre, precio, cantidad });
        }
        console.log(`${cantidad} x ${nombre} agregado(s)/actualizado(s) al carrito.`);
        return true;
    }

    function removerItem(productoId, cantidadARemover = Infinity) {
        const itemIndex = items.findIndex(item => item.productoId === productoId);
        if (itemIndex === -1) { 
            console.warn(`El producto con ID ${productoId} no se encuentra en el carrito.`);
            return false;
        }
        const item = items[itemIndex];
        if (cantidadARemover >= item.cantidad) {
            items.splice(itemIndex, 1)
            console.log(`Producto ${item.nombre} completamente removido del carrito.`);
        }else { 
            item.cantidad -= cantidadARemover;
            console.log(`${cantidadARemover} unidades de ${item.nombre} removidas. Quedan: ${item.cantidad}`);
        }
        return true;
    }
    function obtenerTotal() {
            return items.reduce((total, item) => total + (item.precio * item.cantidad), 0);
            
    }
    function listarItems() { 
        if (items.length === 0) {
            return  "El carrito está vacío."
        }

        let listado = `Carrito de ${idUsuario} (Total: $${obtenerTotal().toFixed(2)}):\n`
        
        items.forEach((item) => {
            listado += `- ${item.nombre} (ID: ${item.productoId}) x ${item.cantidad} @ $${item.precio.toFixed(2)} c/u\n`;
        });
        return listado;
    }
    function vaciarCarrito() {
        items = [];
        console.log("El carrito ha sido vaciado.");
    }

    return {
        agregarItem,
        removerItem,
        obtenerTotal,
        listarItems,
        vaciarCarrito
    }
}

const carrito = carritoDeCompras("usuario1")
carrito.agregarItem("producto1", "licuadora", 50.00, 3)
carrito.agregarItem("producto2", "celular", 150.00, 1);
carrito.agregarItem("producto3", "tostadora", 70.00, 2);
console.log(carrito.listarItems());  

console.log("total:", carrito.obtenerTotal());

carrito.removerItem("producto1", 1)
console.log(carrito.listarItems());  

carrito.vaciarCarrito();
console.log(carrito.listarItems());  