/*Ejercicio 4: Función que devuelve un objeto
Consigna: Crea una función llamada crearLibro que acepte tres parámetros: titulo (string), autor (string) y paginas (number). 
La función debe devolver un objeto con esas propiedades. Luego, crea dos libros utilizando la función y
muestra sus detalles en la consola*/

function crearLibro(titulo:string, autor:string, paginas:number): {titulo: string, autor: string, paginas:number} { //Los parametros tipan lo que entra y lo que va entre {} tipa lo que sale
    return{titulo, autor, paginas}
};

const primerLibro = crearLibro('Harry Potter y el legado maldito','J.K.Rowling', 333);
const segundoLibro = crearLibro('La milla verde', 'Sthephen King', 444);

console.log(JSON.stringify(primerLibro, null, 2));
console.log(JSON.stringify(segundoLibro,null, 2));









