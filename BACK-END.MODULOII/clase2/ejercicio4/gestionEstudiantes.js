/*Importa el array desde estudiantes.js. 
- Muestra en la consola los nombres de todos los estudiantes. 
- Calcula y muestra el promedio de notas de un estudiante 
específico. 
- Agrega un nuevo estudiante al array y muestra el array 
actualizado en formato JSON.*/

const nombreEstudiantes = require ("./estudiantes.js")

console.log (`Nombre de los estudiantes:`)          //Utilizamos el forEach para visualizar los nombres porque es un array
nombreEstudiantes.forEach(est => {
    console.log (est.nombre)
    });


let estudianteBuscado = nombreEstudiantes.find(est => est.nombre === "Martin");
    if (estudianteBuscado) {
        let notas = estudianteBuscado.notas;
        let suma = notas.reduce((acum, nota) => acum + nota, 0);
        let promedio = suma / notas.length;
  console.log(`El promedio de notas de ${estudianteBuscado.nombre} es: ${promedio}`);
}


nombreEstudiantes.push({
  nombre: "Ana",
  edad: 21,
  notas: [8, 8, 9, 7]
});

console.log("Lista actualizada de estudiantes: ");
console.log(JSON.stringify(nombreEstudiantes, null, 2));





