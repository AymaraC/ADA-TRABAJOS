// Clase base

class Animal {
    name: string; // Propiedad que almacena el nombre del animal

    constructor(name: string){ //Inicializamos la propiedad
        this.name = name;
    }
    //Método que va a imprimir el sonido generico del animal
    makeSound() : void {
        console.log(`${this.name} hace un sonido.`);
        
    }

}

// Clase derivada / subclase / clase hija
class Dog extends Animal {
    breed : string; //Nueva propiedad de la clase dog

    //Hacemos el constructor de la subclase que llama al constructor de la clase base
    constructor(name: string, breed: string){
        super(name) //Referencia a la superclase, llama al constructor de la clase Animal para inicializar el nombre
        this.breed = breed
    
    }
    makeSound(): void {
        console.log(`${this.name} está ladrando.`);
    }

    //Agregar un método especifíco de Dog
    fetch(): void {
        console.log(`${this.name} está buscando la pelota.`);
    }
}

//Instanciamos los objetos
const animalDesconocido = new Animal('Arturo') // Crear un objeto de la clase base
animalDesconocido.makeSound();
console.log('-----------------');
const myDog = new Dog('Max', 'Golden Retriever')
myDog.makeSound();
myDog.fetch()
