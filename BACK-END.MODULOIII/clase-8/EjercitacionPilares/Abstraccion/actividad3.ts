/*Ejercicio 3: Sistema de Gestión de Compras
Crea un sistema que gestione productos y órdenes de compra. Usa una clase abstracta Producto, clases concretas Electrónico
y Alimento, y una clase OrdenCompra que contenga múltiples productos*/

abstract class Producto {
    constructor(public nombre: string, public precio: number, public cantidad: number){}
    abstract mostrarProducto(): void;
}

class Electrónico extends Producto {
    mostrarProducto(): void {
        console.log(`💻 Producto: ${this.nombre}\nPrecio: ${this.precio}\nCantidad: ${this.cantidad}`);
    }
}

class Alimento extends Producto {
    mostrarProducto(): void {
        console.log(`🥖 Producto: ${this.nombre}\nPrecio: ${this.precio}\nCantidad: ${this.cantidad}`);
    }
}

class OrdenCompra{
    productos : Producto[] = [];

    agregarProducto(producto: Producto) {
        this.productos.push(producto)
        console.log(`✅ Agregado con éxito.'${producto.nombre}' ya se encuentra en el carrito.`);
    }

    listarProductos(){
        this.productos.forEach((p, index) => {
            console.log(`${index+1}. ${p.nombre} \nCantidad: ${p.cantidad}\nPrecio: ${p.precio}`);
        })
    }

    calcularTotalDeCompra(){
    const total = this.productos.reduce((total, producto) => {
        return total + (producto.precio * producto.cantidad);
    }, 0);

    console.log(`🛒 Total: $${total}`);
    return total;
    
    }

}

const p1 = new Electrónico('Televisor', 5000, 1);
const p2 = new Alimento('Pan', 50, 3);
const p3 = new Alimento('Milanesas', 10, 30);
const p4 = new Alimento('Gaseosas', 8, 5);

p1.mostrarProducto();
p2.mostrarProducto();
p3.mostrarProducto()
p4.mostrarProducto();

const total = new OrdenCompra();
total.agregarProducto(p1);
total.agregarProducto(p2);
total.agregarProducto(p3);
total.agregarProducto(p4);

total.listarProductos();
total.calcularTotalDeCompra()



