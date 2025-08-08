/*Define dos objetos libro1 y libro2 con las siguientes propiedades y valores: 
✔ título: una cadena con el título del libro. 
✔ autor: una cadena con el nombre del autor del libro. 
✔ anioPublicacion: un número con el año de publicación del libro. 
Luego, crea una función llamada mostrarLibro que tome un arreglo de libros 
como parámetro y muestre por consola la información de cada libro en el 
formato especificado*/

let libro1 = {
    titulo: "Harry Potter",
    autor: "J.k.Rowling",
    anioPublicacion: 1997,
}
let libro2 = {
    titulo: "IT",
    autor: "Stephen King",
    anioPublicacion: 1986,
}
let mostrarLibro = function (arregloDeLibros) {
    for (let i = 0; i < arregloDeLibros.length; i++) {
        let libro = arregloDeLibros[i];
        console.log("Título: " + libro.titulo);
        console.log("Autor: " + libro.autor);
        console.log("Año de publicación: " + libro.anioPublicacion);
        console.log("------");
    }
}

mostrarLibro ([libro1, libro2]);        //El corchete indica que creamos un array de los dos objetos, libro 1 y 2

