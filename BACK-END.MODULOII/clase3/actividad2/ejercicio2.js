/*Consigna: ¡Es hora de organizar tus series favoritas! Crea un programa que permita:
1. Registrar una serie: Se debe registrar una serie con su nombre y la cantidad de temporadas.
2. Listar las series: Muestra todas las series registradas.
3. Actualizar las temporadas de una serie: Permite actualizar la cantidad de temporadas de una serie.
Pistas:
• Usa un archivo JSON para almacenar la información de las series.
• Si el archivo no existe, comienza con un arreglo vacío.*/

const fs = require ('fs');
const path = './datos.json';

function leerArchivo(){
    if(!fs.existsSync(path)){
        fs.writeFileSync(path, '[]', 'utf-8')
    }

    const contenido = fs.readFileSync(path, 'utf-8')
    return JSON.parse(contenido)

} //función para saber si el archivo json ya existe y si es así poder leer el contenido.

function registrarSeries(nombre, temporadas){
    const leerSeries = leerArchivo()
    const nuevaSerie = ({nombre, temporadas})
    leerSeries.push(nuevaSerie)
    fs.writeFileSync(path, JSON.stringify(leerSeries, null, 2), 'utf-8');
}

function listarSeries(){
    const listarLasSeries = leerArchivo()
    listarLasSeries.forEach(serie => {
    console.log(`Nombre: ${serie.nombre}, Temporadas: ${serie.temporadas}`);
});

}

function actualizarTemporadas(nombreSerie, nuevasTemporadas) {
  const series = leerArchivo();

  const serieEncontrada = series.find(serie => serie.nombre === nombreSerie); //Busca la serie que tenga el nombre que recibimos

  if (serieEncontrada) { //Si la encuentra, actualiza la temporada
    serieEncontrada.temporadas = nuevasTemporadas;
    fs.writeFileSync(path, JSON.stringify(series, null, 2), 'utf-8');

    console.log(`La serie "${nombreSerie}" fue actualizada con ${nuevasTemporadas} temporadas.`);
  
    } else {
    
    console.log(`No se encontró la serie con nombre "${nombreSerie}".`);
  }
};

registrarSeries('Friends','10')
listarSeries()
actualizarTemporadas('Friends',6)
listarSeries()