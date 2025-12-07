// Definimos la función asíncrona
async function fetchCharacter(id) {
    try {
        if(!id) 
            //Validación de ID
            throw new Error('No ingresó un ID.')
            // Hacemos la solicitud a la API.
            const response = await fetch(`https://swapi.dev/api/people/${id}`)

            // Verificamos si la respuesta no fue exitosa
            if(!response.ok) throw new Error(`Personaje no encontrado: ${response.status}`);

            // Convertir la respuesta a formato JSON
            const character = await response.json()
    
            // Imprimir en consola el resultado
            console.log(`Información del personaje: ${character}`);

    } catch(error) {
        console.error(`Error: ${error.message}`);
    }

}

// Llamado de la funcion
fetchCharacter(3);






