// Definimos una clase Animal
class Animal {
    public nombre: string; // propiedad publica(accesible desde cualquier parte)
    private tipoAlimento: string; // propiedad privada (solo accesible dentro de la clase)
    protected especie: string; // propiedad protegida (accesible dentro de esta clase y clases que heredan)

    //Constructor
    constructor(nombre:string, tipoAlimento:string, especie:string){
        this.nombre = nombre;
        this.tipoAlimento = tipoAlimento;
        this.especie = especie; //Va a ser la especie que pase en el constructor
    }

    // Método público
    public describirAnimal() : void {
        console.log(`Este es: ${this.nombre}, un animal de la especie ${this.especie}`);
    }

    // Método privado
    private mostrarTipoAlimento() : void {
    console.log(`${this.nombre} se alimenta de ${this.tipoAlimento}`);
    }

    // Método protegico
    protected sonidoAnimal() : void {
        console.log(`${this.nombre} está haciendo un sonido.`);
    }

    // Método para acceder al privado de la clase
    public alimentarAnimal() : void {
        this.mostrarTipoAlimento(); // Llamo a método privado dentro de la clase
    }
}

// Clase hija 
class Perro extends Animal {
    constructor(nombre: string, tipoAlimento: string){
        super(nombre, tipoAlimento, 'Canino') // Llamo al constructor de animal
    }

    //Método público de la clase hija que va a acceder 
    public hacerSonido() : void {
        this.sonidoAnimal();
        console.log(`${this.nombre} está ladrando.`);
        
    }
}

// Crear una instancia de Animal
const miAnimal = new Animal('Michi', 'Pollo', 'Felino');
miAnimal.describirAnimal();
miAnimal.alimentarAnimal();

console.log('-----------------------');

// Crear una instancia de la clase Perro

const miPerro = new Perro('Firulais', "Croquetas");
miPerro.describirAnimal();
miPerro.hacerSonido();
miPerro.alimentarAnimal();

