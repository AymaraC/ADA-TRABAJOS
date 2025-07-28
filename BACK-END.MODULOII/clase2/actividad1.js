/*Crea un objeto JSON que represente un libro. El objeto 
debe tener las siguientes propiedades: titulo, autor, año, genero (puede 
ser un array de géneros). 
Instrucciones: 
• Muestra en la consola el título y el autor del libro. 
• Actualiza el año del libro a un valor más reciente. 
• Añade una nueva propiedad llamada páginas que indique el número 
de páginas del libro. 
• Muestra el objeto actualizado en la consola.*/

let libro = {
    titulo : "El poder del ahora",
    autor : "Eckhart Tolle",
    anio : 1997,
    genero : ["Autoayuda ", " Superación personal"]
};

console.log (`El título de nuestro libro es ${libro.titulo}`) //primero se accede al objeto y luego a la propiedad
console.log (`Su autor es ${libro.autor}`)

libro.anio = 2005
console.log (libro.anio)

libro.paginas = 200

console.log (`📚Libro actualizado: 
- Libro: ${libro.titulo}
- Autor: ${libro.autor}
- Año de publicación actualizado: ${libro.anio}
- Genero: ${libro.genero}
- Cantidad de páginas: ${libro.paginas}`)



