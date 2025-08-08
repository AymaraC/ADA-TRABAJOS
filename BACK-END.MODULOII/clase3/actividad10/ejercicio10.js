/*Consigna: Crea un programa que registre las compras realizadas. El programa debe permitirte:
1. Agregar una compra: Registrar una compra con su nombre y precio.
2. Listar las compras: Mostrar todas las compras registradas.
3. Eliminar una compra: Eliminar una compra de la lista.*/

const fs = require ('fs');
const { normalize } = require('path');
const path = './compras.json'

function leerArchivo() {
    if (!fs.existsSync(path)) {
        fs.writeFileSync(path, '[]', 'utf-8');
    }

    const contenido = fs.readFileSync(path, 'utf-8');
    return JSON.parse(contenido);           

};

function guardar(array) {
    fs.writeFileSync(path, JSON.stringify(array, null, 2), 'utf-8');

};

function resetear() {
  fs.writeFileSync(path, '[]', 'utf-8');
  console.log('Inventario reseteado.');

};

const agregarCompra = (nombre, precio) => {
    const compras = leerArchivo()
    const compra = {
        nombre,
        precio,
        id: Date.now()
    };
    compras.push(compra)
    guardar(compras)
    console.log(`✔️  La compra "${nombre}" con el precio ${precio} fue añadida con éxito. | ID: ${compra.id}`)
}

const listarCompras = () => {
    const compras = leerArchivo()
    
    if(compras.length === 0){
        console.log(`❌  El carrito de compras se encuentra vacío.`)
        return
    }
    compras.forEach(compras => {
        console.log(`Las compras que tiene hasta ahora son: ${compras.nombre}`)
    });
};

const eliminarCompra = (id) => {
    const compras = leerArchivo()
    const encontrarCompra = compras.find(compras => compras.id === id)
    if(!encontrarCompra){
        console.log(`No se encuentra la compra con el id ${id}`)
        return;
    }
    const nuevaLista = compras.filter(compra => compra.id !== id)
    guardar(nuevaLista)
    console.log(`La compra ${encontrarCompra.nombre} con ID ${id} fue eliminada con éxito.`)
};

//agregarCompra('Leche', '1500')
//agregarCompra('Pan','1000')
//agregarCompra('Huevos', '700')
//listarCompras()

eliminarCompra(1754585306124)
listarCompras()
















