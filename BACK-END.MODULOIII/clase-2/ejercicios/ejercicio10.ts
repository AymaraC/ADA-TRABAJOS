/*Ejercicio 10: Funciones y arrays de objetos
Consigna: Crea una función llamada listarLibros que acepte un array de objetos libro, donde cada libro tiene las propiedades 
titulo(string) y autor(string). La función debe recorrer el array y mostrar los detalles de cada libro en la consola.*/

function listarLibros(libros:{titulo:string, autor:string}[]){
    libros.forEach((libro => {
        console.log(`-Título: ${libro.titulo}\n-Autor: ${libro.autor}`);        
    }));
}
console.log('📚 Lista de libros disponibles: ');

listarLibros([
    {titulo: 'Crepusculo', autor: 'Stephenie Meyer'}, 
    {titulo: 'Eclipse', autor: 'Stephenie Meyer'}
])



