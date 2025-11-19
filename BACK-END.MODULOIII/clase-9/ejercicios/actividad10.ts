/*Ejercicio 10: Sistema de Gestión de Inventario en una Tienda de Belleza
Crea un sistema de gestión de productos en una tienda de belleza. Define una clase Producto con atributos como nombre, 
precio y categoria. Luego, crea una clase Inventario que gestione un conjunto de productos y tenga métodos para
agregar, eliminar y buscar productos por categoría. Usa polimorfismo para manejar diferentes tipos de productos, 
como Cosmetico, TratamientoCapilar, etc.*/

abstract class Producto {
    nombre:string;
    precio: number;
    categoria: string;
    constructor(nombre: string, precio: number, categoria: string){
        this.nombre = nombre;
        this.precio = precio;
        this.categoria = categoria;
    }
    abstract mostrarInfo(): void;
}

class TratamientoCapilar extends Producto {
    constructor(nombre: string, precio: number, categoria: string, public tipoDePelo: string, public marca:string){
        super(nombre, precio, categoria)
    }

    mostrarInfo(){
        console.log(`👩‍🦰 TRATAMIENTO CAPILAR: 
            Nombre: ${this.nombre}
            Marca: ${this.marca}
            Precio: ${this.precio}
            Categoría: ${this.categoria}
            Tipo de cabello: ${this.tipoDePelo}`);
    }
}

class Cosmetico extends Producto {
        constructor(nombre: string, precio: number, categoria: string, public marca:string){
        super(nombre, precio, categoria)
    }

    mostrarInfo(){
        console.log(`💄 COSMETICOS: 
            Nombre: ${this.nombre}
            Marca: ${this.marca}
            Precio: ${this.precio}
            Categoría: ${this.categoria}`);
    }
}

class Inventario {
    productos: Producto[] = [];
    
    agregarProducto(producto: Producto) {
        if(this.productos.find(p => p.nombre === producto.nombre)){
            console.log(`❌ El producto ingresado ya se encuentra en nuestro inventario.`);
            return;
        }        
        this.productos.push(producto);
        console.log(`✅ Producto agregado correctamente.`);
    }

    eliminarProducto(nombre: string) {
        if(!this.productos.find(p => p.nombre === nombre)){
            console.log(`🚫 El producto no se encuentra en nuestro inventario.`);
            return;
        } 

        this.productos = this.productos.filter(p => p.nombre !== nombre); //Poner el this.productos así lo asignamos al nuevo array
        console.log(`✔️ Producto '${nombre}' eliminado con éxito.`);
    
}

    buscarProductoPorCategoria(categoria: string) {
        const encontrar = this.productos.filter(p => p.categoria === categoria);
        if(encontrar.length === 0) {
            console.log(`🚫 No se encontró nungún producto en la categoría '${categoria}'.` );
            return;
        } 
        encontrar.forEach(p => p.mostrarInfo())

    }

}

// Crear inventario
const inventario = new Inventario();

// Crear productos
const shampoo = new TratamientoCapilar("Shampoo Reparador",4500,"tratamiento","Seco","Pantene");

const mascara = new TratamientoCapilar("Máscara Nutritiva",5200,"tratamiento","Dañado","L'Oréal");

const labial = new Cosmetico("Labial Mate Rojo",3200,"cosmetico", "Maybelline");

const rimel = new Cosmetico("Rimel Waterproof",4100,"cosmetico","Vogue");

// Agregar productos
inventario.agregarProducto(shampoo);
inventario.agregarProducto(mascara);
inventario.agregarProducto(labial);
inventario.agregarProducto(rimel);

// Intentar agregar uno repetido
inventario.agregarProducto(shampoo);

console.log(`Buscar productos por categoría`);
inventario.buscarProductoPorCategoria("cosmetico");
inventario.buscarProductoPorCategoria("tratamiento");
inventario.buscarProductoPorCategoria("perfume"); // no existe

console.log(`--Eliminamos producto--`);
inventario.eliminarProducto("Labial Mate Rojo");

console.log(`--Buscamos producto--`);
inventario.buscarProductoPorCategoria("cosmetico"); // Verificar que se eliminó

console.log(`--Intentamos eliminar producto inexistente--`);
inventario.eliminarProducto("Polvo Compacto"); // Intentar eliminar uno inexistente









