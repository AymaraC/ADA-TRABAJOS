/*2. Ejercicio de Libro
Crea una clase Libro que represente un libro en una biblioteca. Esta clase debe tener propiedades privadas para titulo, 
autor, anioPublicacion, y disponible. Implementa métodos para prestar y devolver el libro, asegurando que solo se
pueda prestar si está disponible y que se pueda devolver solo si ha sido prestado. Imprime un mensaje en caso de que 
se intente realizar una acción no válida.*/

class Libro {
    private _titulo : string;
    private _autor : string;
    private _anioPublicacion: number;
    private _disponible: boolean;

    constructor(_titulo: string, _autor:string, _anioPublicacion: number, _disponible:boolean){
        this._titulo = _titulo;
        this._autor = _autor;
        this._anioPublicacion = _anioPublicacion;
        this._disponible = _disponible;
    }

    prestar() : void {

        if(this._disponible === true) {
            this._disponible = !this._disponible
            console.log(`✅ El libro ${this._titulo} fue prestado correctamente.`);
        } else { 
            console.log(`El libro ya fue prestado`);
        }
    }
    
    devolver() : void {
        if(this._disponible) {
            console.log(`El libro se encuentra disponible.`);

        } else {
            this._disponible = true
            console.log(`✅ Libro '${this._titulo}' fue devuelto correctamente`);
        }
    }

    public get disponible(): boolean {
        return this._disponible;
    }

}

const libro1 = new Libro('El Principito', 'Antoine de Saint-Exupéry', 1943, true);
console.log(libro1.disponible);
libro1.prestar()
libro1.devolver()




