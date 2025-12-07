/*Ejercicio 7: Buscar GitHub Repositorios por Término
1. Crea un archivo searchRepo.js.
2. Escribe una función que reciba un término de búsqueda y realice una solicitud a la API de GitHub para obtener 
repositorios que coincidan con el término.
3. Muestra en la consola el nombre del repositorio y la descripción de los primeros cinco resultados.
Pistas:
• La URL de búsqueda es: https://api.github.com/search/repositories?q={query}&per_page=5. */

async function findRepo(query) {
    try{ 
    const response = await fetch(`https://api.github.com/search/repositories?q=${query}&per_page=5`)
    const data = await response.json();

    if(!data || data.items.length === 0) {
        console.log('No se pudo encontrar el repositorio ingresado o la lista se encuentra vacía.');
        return;
    }
    
    data.items.forEach(repo => {
    console.log(`📁 Repositorio: ${repo.name}`);
    console.log(`📝 Descripción: ${repo.description}\n`);
    });

    } catch(err) {
        console.error(err)
    }
    
}

findRepo('JavaScript');
