/*Ejercicios extra (opcionales)
Ejercicio 6: Lista de Episodios de una Serie
1. Crea un archivo getEpisodes.js.
2. Realiza una solicitud a la API de TVMaze para obtener la lista de episodios
de una serie específica (puedes usar el nombre “Friends” como ejemplo).
3. Muestra en la consola los nombres de los episodios y sus números de temporada. Pistas:
• La URL para obtener episodios es: https://api.tvmaze.com/singlesearch/shows?q=nombre_de_la_serie&embed=episodes.
• Los episodios están dentro de _embedded.episodes.*/

async function episodes(nameSerie) {
    try {
    const response = await fetch(`https://api.tvmaze.com/singlesearch/shows?q=${nameSerie}&embed=episodes`)
    const data = await response.json();

    if (!data || !data._embedded || !data._embedded.episodes) { // Si la API no encuentra la serie, data viene como null
        console.log('No hay episodios para mostrar.');
        return;
    }

    const episodesList = data._embedded.episodes;  // Acá esta el array con todos los episodios

    const episodio = episodesList[1];    // Mostramos el primer episodio

    console.log(`Nombre del episodio: '${episodio.name}'\nTemporada: ${episodio.season}`)


    } catch(err) {
        console.error(err);
    }
}

episodes('Friends')







