/*### Actividad 1: Registro de libros favoritos
**Consigna:** ¡Hola! Hoy serás una bibliotecaria digital. Debes crear un programa que permita registrar libros favoritos 
en un archivo JSON. Implementa las siguientes funciones:
1.  **Agregar un libro:** Se debe agregar un libro a la lista de favoritos. Para esto, el libro tendrá 
solo un campo: su nombre.
2.  **Listar los libros:** Muestra todos los libros registrados.
**Pistas:**
*   Usa un archivo JSON para guardar los libros.
*   Si el archivo no existe, comienza con un arreglo vacío.*/

const fs = require ("fs")

const path = "./libros.json"

const leerLibros = () => {
    if (!fs.existsSync(path)){
        console.log ("No existe el archivo.")
        return;
    } else {
       const data = fs.readFileSync(path, "utf-8")
        return JSON.parse(data)
    }
}

const guardarLibro = (nombre) => {
    const libros = leerLibros()
    libros.push({nombre})
    escribirLibros(libros)
    console.log (`El libro ${nombre} fue agregado con éxito.`)
}

const escribirLibros = (libros) => {
    const json = JSON.stringify(libros, null, 2)
    fs.writeFileSync(path, json,"utf-8")
}

const listarLibros = () =>{
    const libros = leerLibros()
    if (libros.length === 0){
        console.log ("No hay libros para mostrar.")
    } else {
        console.log ("Lista libros: ")
        libros.forEach((libro, index)  => {
        console.log (`${index + 1} - ${libro.nombre}`)
        });
    }
}
guardarLibro("Orgullo y prejuicio")
listarLibros()