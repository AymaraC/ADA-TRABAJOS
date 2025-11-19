/*En una mueblería, se requiere un sistema que permita actualizar los precios de
los muebles cada vez que cambien. Cada mueble tiene un nombre, un precio y
un identificador único. Implementa las siguientes funciones:
• Añadir un nuevo mueble.
• Actualizar el precio de un mueble después de 3 segundos utilizando
setTimeout().
• Mostrar el inventario de muebles.*/

// Definimos una tupla para el mueble
type Mueble= [number, string, number]; // [id, nombre, precio]

// Definimos nuestro inventario
let inventario: Mueble[] = [];

// 1. Funcion para añadir un nuevo mueble
function agregarMueble(id: number, nombre: string, precio:number){
    const nuevoMueble: Mueble = [id, nombre, precio];
    inventario.push(nuevoMueble);
    console.log(`Mueble '${nombre}' añadido con éxito.`);
}

// Función para mostrar el inventario
function mostrarInventario(){
    console.log(`Inventario de la mueblería: `);
    inventario.forEach(mueble => {
        const[id, nombre, precio] = mueble;
        console.log(`ID: ${id}, Nombre: ${nombre}, precio $${precio}`);  
    })
}

// Funcion para actualizar precios
function actualizarPrecio(id: number, nuevoPrecio: number){
    setTimeout(() => {
        const mueble = inventario.find(m => m[0] === id)
        if(mueble){
            mueble[2] = nuevoPrecio; //Actualiza el precio
            console.log(`El precio del mueble ${mueble[1]} se ha actualizado.`);
        } else {
            console.log(`El mueble no encontrado.`);
        }
    }, 3000);
}

// Añadir muebles
agregarMueble(1, 'Sillon', 3000);
agregarMueble(2, 'Mesa', 1500);
agregarMueble(3, 'Silla', 400);

// Mostramos el inventario
mostrarInventario()

// Actualizar precio
actualizarPrecio(3, 450)
mostrarInventario()