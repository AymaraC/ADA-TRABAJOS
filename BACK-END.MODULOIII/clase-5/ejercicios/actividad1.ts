/*Ejercicio 1: Creación de Objetos y Atributos
1. Define un objeto que represente un libro con las siguientes propiedades: título, autor, y año de publicación.
2. Crea una instancia de ese objeto y muestra sus propiedades en la consola.*/

class Libro {
    titulo: string;
    autor: string;
    anioDePublicacion: number;

    constructor(titulo: string, autor: string, anioDePublicacion:number){
    this.titulo = titulo
    this.autor = autor
    this.anioDePublicacion = anioDePublicacion

    }

}
    const miLibro = new Libro('Harry Potter y la piedra Filosofal', 'J.k.Rowling', 1999)
    console.log(miLibro);








