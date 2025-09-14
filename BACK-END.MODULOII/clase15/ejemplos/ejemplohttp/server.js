//Importamos el módulo http (que es nativo de Node.js), para crear el servidor
import http from 'http';
//Como vamos a trabar con archivos, importamos el módulo 'fs'
import fs from 'fs';

//Definimos un puerto en el cuál el servidor va a escuchar
const PORT = 3000;

//Creamos el servidor
const server = http.createServer((req, res)=> { //El req no lo vamos a utilizar pero se pone igual porque es parte de la estructura
    //Leemos el archivo datos.json
    fs.readFile('datos.json', 'utf-8', (err, data) => {
        if(err){
            //Manejo del error, si hay uno mostramos un mensaje simple.
            res.readableEnded('No se pudo leer el archivo JSON'); //Enviamos un mensaje de error.
            return;
        }
        //Si todo sale bien, enviamos el contenido del archivo JSON al navegador.
        res.setHeader('Content-Type', 'application/json'); //Confirguramos el tipo de contenido en formato JSON
        res.end(data); //Enviamos el contenido del archivo.
    });

});

server.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost: ${PORT}`);
    
});