/*Ejercicio 2: Métodos en Objetos
1. Modifica el objeto del ejercicio anterior para que incluya un método llamado descripcion() que devuelva una descripción del libro.
2. Llama al método y muestra el resultado en la consola.*/

class Libro {
    titulo: string;
    autor: string;
    anioDePublicacion: number;
    description(): string {
        return `-Título: ${this.titulo}\n-Autor: ${this.autor}\n-Año de publicación: ${this.anioDePublicacion}`
    }

    constructor(titulo: string, autor: string, anioDePublicacion:number){
    this.titulo = titulo
    this.autor = autor
    this.anioDePublicacion = anioDePublicacion

    }

    
}
    const miLibro = new Libro('Harry Potter y la piedra Filosofal', 'J.k.Rowling', 1999)
    console.log(miLibro.description());
    














