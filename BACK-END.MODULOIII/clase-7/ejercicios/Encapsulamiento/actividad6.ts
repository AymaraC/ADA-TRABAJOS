/*6. Ejercicio de Supermercado
Crea una clase Producto que contenga propiedades privadas como nombre, precio y cantidad. Utiliza getters y setters, asegurándote de que 
precio no sea negativo y que cantidad no sea menor que 0.*/

class Producto {
    private _nombre: string;
    private _precio! : number;
    private _cantidad! : number;

    constructor(nombre: string, precio: number, cantidad:number){
        this._nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }

    public get nombre() : string{
        return this._nombre
    }

    public get precio() : number {
        return this._precio
    }

    public get cantidad() : number {
        return this._cantidad
    }

    public set precio(value:number){
        if(value < 0){
            console.log(`🚫 Precio no válido. Intente nuevamente.`);

        } else {
            this._precio = value; //Le asignamos el valor en el caso de que pase la validación
        }
    }

    public set cantidad(cuantia: number){
        if(cuantia < 0) {
            console.log(`🚫 Incorrecto, no se ingreso ningún producto. Intente nuevamente`);
            
        } else {
            this._cantidad = cuantia;
        }

    }
}

const compra = new Producto('Leche', 1500, 2)
console.log(
    `Producto: ${compra.nombre}\nPrecio: ${compra.precio}\nCantidad: ${compra.cantidad}`);
