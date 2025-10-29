// Definimos la clase Gato
class Gato {
    //Propiedades
    public nombre: string;
    public edad: number;
    private raza: string;

    //Constructor
    constructor(nombre:string, edad: number, raza: string){
        this.nombre = nombre; //Va a ser igual al nombre que ingrese en el constructor
        this.edad = edad;
        this.raza = raza;
    }

    // Método para información del gato
    public obtenerInformacion(): string {
        return `Nombre: ${this.nombre}\nEdad:${this.edad}\nRaza: ${this.raza}`
    }

    // Método para cambiar la raza del gato
    public cambiarRaza(nuevaRaza: string) : void {
        this.raza = nuevaRaza; // Asignamos la nueva raza.
    }
}

// Instanciamos la clase Gato
const arturo = new Gato('Arturo', 2, 'Siames');

// Llamamos al método obtenerInformacion
console.log(arturo.obtenerInformacion());

console.log('---------------------');


// Utilizamos el método de cambiar raza
arturo.cambiarRaza('Europeo');
console.log(arturo.obtenerInformacion());




