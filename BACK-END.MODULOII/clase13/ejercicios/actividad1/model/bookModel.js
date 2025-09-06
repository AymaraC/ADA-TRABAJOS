const { error } = require('console');
const fs = require('fs');
const path = require('path');

const libros = path.join(__dirname, 'libros.json')

function encontrarLibro(libroID) {
    if(!libroID){
        console.error('Error de archivo ',error)
    } else {
        console.log('Libro encontrado.');
        const data = fs.readFileSync(libros)
        const lecturaLibro = JSON.parse(data)
        return lecturaLibro.find(libro => libro.id === libroID) || null
    }
}
module.exports= {encontrarLibro}