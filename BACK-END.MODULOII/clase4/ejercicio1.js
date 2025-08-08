/*Consigna:
Imagina que acabas de unirte a una red social donde puedes crear tu perfil digital básico. Tu misión es:
1. Crear un archivo llamado perfil.json.
2. Dentro de este archivo, guarda información sobre ti: nombre, edad y tu ciudad favorita.
3. Usa el módulo fs para escribir este archivo desde Node.js.
Pista: Utiliza JSON.stringify para convertir tu información en un formato que pueda guardarse en el archivo*/

const fs = require(`fs`)

const perfil = {
    nombre: "Aymara",
    edad : 27,
    cuidadFavorita: "Río de Janeiro"
};

//Creamos el archivo json, se le pone null porque no se cambia la data que recibe, en este caso de perfil.
//Se le pone el callback de err por si es necesario utilizarla.

fs.writeFile('perfil.json', JSON.stringify(perfil, null, 2), (err) =>{
    if(err){
        console.error('Hubo un error al crear tu perfil: ',err)

    } else{
         console.log ('¡Perfil creado con éxito! Revisa el archivo perfil.json')
    }
});





