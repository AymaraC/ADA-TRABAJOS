/*Consigna:
Es hora de revisar tu perfil digital. Lee el archivo perfil.json que creaste en el ejercicio anterior y muestra la 
información en la consola para asegurarte de que todo está correcto.
Pista: Utiliza fs.readFile con la codificación 'utf-8' para obtener el
contenido del archivo como texto legible.*/

const fs = require('fs')

fs.readFile('perfil.json','utf-8',(err,data) => {
    if(err){
        console.log ('No se puede leer tu perfil')
    } else{
        const perfil = JSON.parse(data);
        console.log('Aquí esta tu perfil: \n', perfil)
    }
})








