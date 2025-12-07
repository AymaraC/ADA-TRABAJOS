/*Ejercicio 2: Obtener Información de un Pokémon Específico. Descripción: 
1. Crea un archivo getPokemon.js. 
2. Usando fetch, realiza una solicitud a la API de PokeAPI para obtener información sobre el Pokémon "Bulbasaur". 
3. Extrae el nombre y los tipos de Bulbasaur y muestra estos datos en la consola. Pistas: 
• La URL para Bulbasaur es https://pokeapi.co/api/v2/pokemon/1. 
• Los tipos de Pokémon se encuentran en types dentro de la respuesta.*/

const url = 'https://pokeapi.co/api/v2/pokemon/1'

fetch(url)
.then(res=> res.json())
.then(data => {
    const name = data.name
    const types = data.types.map(t => t.type.name)
    console.log(`Nombre: ${name}\nTipo:${types}`);
    
})

.catch(err => console.error(`Error: ${err}`))






