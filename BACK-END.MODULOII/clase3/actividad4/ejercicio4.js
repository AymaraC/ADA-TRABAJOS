/*Consigna: Crea un programa para llevar el control de un inventario. El programa debe permitirte:
1. Agregar un producto: Registrar un producto con su nombre y cantidad disponible.
2. Listar los productos: Mostrar todos los productos registrados.
3. Actualizar la cantidad de un producto: Modificar la cantidad de un producto en el inventario.*/

const fs = require('fs');
const path = './inventario.json';

function leerArchivo() {
    if (!fs.existsSync(path)) {
        fs.writeFileSync(path, '[]', 'utf-8');
    }

    const contenido = fs.readFileSync(path, 'utf-8');
    return JSON.parse(contenido);           //parse porque nos tiene que traer del JSON a JS
}

// Guardar array en archivo JSON
function guardarProducto(array) {
    fs.writeFileSync(path, JSON.stringify(array, null, 2), 'utf-8');
}

function resetearInventario() {
  fs.writeFileSync(path, '[]', 'utf-8');
  console.log('Inventario reseteado.');
}

function agregarProducto(nombre, cantidad){
    const productos = leerArchivo()
    const nuevoProducto = ({id: productos.length + 1, nombre, cantidad})
    productos.push(nuevoProducto)
    guardarProducto(productos)
    console.log(`El producto ${nombre} fue agregado con éxito.`)
}

function listarProductos(){
    const productos = leerArchivo()
    if(productos.length === 0){
        console.log(`❌No hay productos para mostrar.`)
        return
    }
    console.log(`Los productos los cuáles tenemos actualemente son: `)
    productos.forEach(productos => {
        console.log(`ID: ${productos.id} | Producto: ${productos.nombre} | Cantidad: ${productos.cantidad}`)
    });
}

function actualizarProductos(id, nuevaCantidad){
    const productos = leerArchivo()
    const encontrarProducto = productos.find(prod => prod.id === id)
    if(encontrarProducto){
        encontrarProducto.cantidad = nuevaCantidad
        guardarProducto(productos)
        console.log(`✔️  Cantidad actualizada correctamente.`)
    } else {
        console.log(`❌Error. No se pudo actualizar.`)
    }
}

agregarProducto('Camisa', 5)
agregarProducto('Campera', 2)
agregarProducto('Jeans', 1)
listarProductos()
actualizarProductos(2,10)










