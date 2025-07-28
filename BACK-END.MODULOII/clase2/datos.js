/*Instrucciones: 
• En datos.js, define un objeto que tenga información como 
nombreCurso, duracion, y temas (array de cadenas). 
• Exporta este objeto para que pueda ser utilizado en otros archivos. 
• En actividad3.js, importa el objeto usando require(). 
• Muestra en la consola la información del curso.  */

let informacionCurso = {
    nombreCurso : "Introducción a JavaScript",
    duracion : "Tres meses",
    temas : ["Metodos", "Arrays", "Objetos", "Condicionales", "Funciones"],
    comienzo : "Abril",
    finaliza : "Junio",
    modalidad : "100% virtual",
};

module.exports = informacionCurso;           //Exporta la información



