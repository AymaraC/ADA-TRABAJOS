/*Ejercicio 4: Buscar Canción por Título
1. Crea un archivo searchSong.js.
2. Escribe una función que reciba el título de una canción y realice una solicitud a la API de iTunes para buscar 
la canción.
3. Muestra en la consola el nombre de la canción y el artista.
Pistas: La URL de búsqueda es: https://itunes.apple.com/search?term=${title}&limit=1&entity=song
• La información de la canción se encuentra en el primer resultado del arreglo de resultados.*/

async function songTitle(title) {
    try {
        const response = await fetch(`https://itunes.apple.com/search?term=${title}&limit=1&entity=song`)
        const data = await response.json();
        
        if (data.results.length === 0) {
            console.log("No se encontró la canción.");
            return;
        }

        const song = data.results[0]

        console.log(`🎵 Canción elegida: '${song.trackName}' del artista ${song.artistName}`)

    } catch(err) {
        console.error(err)
    }
}

songTitle('Mercy');












