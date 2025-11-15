/*1. Ejercicio de Bodega 
Diseña una clase Bodega que tenga propiedades privadas para nombre, 
direccion, y inventario (un array de objetos con producto y cantidad). 
Implementa métodos para agregar productos al inventario, eliminar productos, 
y listar el inventario. Si se intenta agregar un producto con una cantidad 
negativa, imprime un mensaje informativo. */

class Bodega {
    private _nombre: string;
    private _direccion : string;
    private _inventario : {producto: string; cantidad: number}[]

    constructor(nombre: string, direccion: string){
        this._nombre = nombre;
        this._direccion = direccion;
        this._inventario = [];
    }

    // Getter para el nombre
    public get nombre(): string{
        return this._nombre // Devolvernos el nombre de la bodega.
    }

    public agregarProducto(producto: string, cantidad:number) : void {
        if(cantidad < 0) {
            console.log(`La cantidad del producto no puede ser negativa.`);
             
        } else {
            this._inventario.push({producto, cantidad}) //Agregamos el prducto al array inventario.
            console.log(`Producto: ${producto} agregado con cantidad ${cantidad}`);   
        }
    }

    public eliminarProducto(producto: string) : void {
        const index = this._inventario.findIndex(item => item.producto === producto)
        if(index === -1){       //Menos uno significa que no lo encontró
            console.log(`El producto ${producto} no está en el inventario.`);
        } else {
            this._inventario.splice(index,1);
            console.log(`✅ Producto ${producto} eliminado con éxito.`);
        }
    }

    public listarInventario() : void {
         this._inventario.forEach(item => {
            console.log(`Producto: ${item.producto}, cantidad ${item.cantidad}`);
         })
    }

}

// Uso de la clase
const bodega = new Bodega('Bodega Central', 'San martin 1500');
bodega.agregarProducto('Manzanas', 50);
bodega.agregarProducto('Leche',60);
console.log('----------');

bodega.listarInventario();
bodega.eliminarProducto('Manzanas')
console.log('----------');

bodega.listarInventario()











