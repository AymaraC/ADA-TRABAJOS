/*Ejercicio 5: Obtener Información de un Usuario por ID
1. Crea un archivo getUser.js.
2. Usando fetch, realiza una solicitud a la API de JSONPlaceholder para obtener la información de un usuario específico.
3. Extrae y muestra en la consola el nombre, nombre de usuario y correo electrónico del usuario.
Pistas:
• La URL para buscar un usuario es: https://jsonplaceholder.typicode.com/users/{id} */

async function findUser(userId) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        const data = await response.json();

        if(!data.id) {
            console.log('No existe ningún usuario con ese id.');
            return;
        }

        console.log(`👤 Usuario: ${data.name}\n-Nombre de usuario: ${data.username}\n-Correo electronico: ${data.email}`);

    } catch(err) {
        console.error(err);
    }
}

findUser(4);












