/*Ejercicio 3: Sistema de Tienda en Línea
Consigna: Desarrolla un sistema para una tienda en línea. Crea una clase base Producto que tenga propiedades como nombre, precio, y un 
método detallesProducto(). Luego, crea dos clases derivadas: Electronico y Ropa, ambas deben sobrescribir el método detallesProducto() con 
información más específica. Crea una interfaz Envio que defina el método calcularEnvio(). La clase Electronico debe implementar esta interfaz y 
el cálculo del envío será un 10% del precio del producto.*/

// Interfaz
interface Envio {
 calcularEnvio() : void;
}

// Clase base Producto
class Producto {
    constructor(public nombre: string, public precio: number){} //Recibe la información que se pasa por parametros.
    detallesProducto() {
        console.log(`-Producto elegido: ${this.nombre}\n-Precio: $${this.precio}`);
    }
}

// Clase derivada Ropa
class Ropa extends Producto {       // No es necesario utilizar el constructor porque no le vamos a agregar ninguna propiedad a la clase hija.
    detallesProducto(): void {
        console.log(`-Prenda: ${this.nombre}\n-Costo: $${this.precio}.`);
    }
}

// Clase derivada Electronico
class Electronico extends Producto implements Envio {
    detallesProducto(): void {
        console.log(`-Artículo seleccionado: ${this.nombre}\n-Precio: $${this.precio}`);
    }

    calcularEnvio(): void {
        const porcentaje = this.precio * 10 / 100;
        console.log(`El envío cuesta: $${porcentaje}`);
    }
}

const producto = new Producto('Zapatillas Nike', 100000);
const prenda = new Ropa('Campera', 45000);
const electrodomestico = new Electronico('Heladera', 800000)

producto.detallesProducto();
console.log('-----------------------');
prenda.detallesProducto();
console.log('-----------------------');
electrodomestico.detallesProducto();
electrodomestico.calcularEnvio()














