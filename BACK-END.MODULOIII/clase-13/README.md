# Clase 13 – Consumo de APIs, Routers y Uso de Postman 🌐

En esta clase seguimos profundizando en Node.js y Express aplicando lo aprendido sobre HTTP, endpoints y routers, y sumamos el consumo de APIs externas usando fetch.
Los ejercicios están diseñados para fortalecer la comprensión sobre cómo el backend se comunica con otras aplicaciones en la web y cómo probar y manipular rutas usando herramientas como Postman.

## 📝 Actividades – Consumo de APIs con Fetch
### Ejercicio 1 – Consultar Información de una API Pública: Rick and Morty 👾

* Archivo: index.js

* Objetivo: usar fetch para obtener datos de la API de Rick and Morty.

Pasos:

* Solicitar información a la API: https://rickandmortyapi.com/api/character/.

* Extraer el nombre del primer personaje (results[0].name) y mostrarlo en consola.

Pistas: .then(response => response.json()).

### Ejercicio 2 – Obtener Información de un Pokémon Específico: Bulbasaur 🐢

* Archivo: getPokemon.js

* Objetivo: consultar la PokeAPI y extraer información relevante.

Pasos:

* URL: https://pokeapi.co/api/v2/pokemon/1.

* Mostrar en consola nombre y tipos del Pokémon.

Pistas: los tipos se encuentran en types dentro del JSON.

### Ejercicio 3 – Obtener Información de un País por Nombre 🌎

* Archivo: getCountry.js

* Objetivo: consumir la API REST Countries para obtener datos del país.

Pasos:

* URL: https://restcountries.com/v3.1/name/{name}.

* Extraer nombre, capital y región del primer resultado y mostrarlo en consola.

### Ejercicio 4 – Buscar Canción por Título 🎵

* Archivo: searchSong.js

* Objetivo: usar la API de iTunes para buscar canciones.

Pasos:

* URL: https://itunes.apple.com/search?term={song_title}&limit=1.

* Mostrar nombre de la canción y artista del primer resultado.

### Ejercicio 5 – Obtener Información de un Usuario por ID 👤

* Archivo: getUser.js

* Objetivo: usar JSONPlaceholder para consultar un usuario específico.

Pasos:

* URL: https://jsonplaceholder.typicode.com/users/{id}.

* Extraer y mostrar nombre, username y email.

## Ejercicios Extra (Opcionales) 🚀
### Ejercicio 6 – Lista de Episodios de una Serie 📺

* Archivo: getEpisodes.js

* URL: https://api.tvmaze.com/singlesearch/shows?q=Friends&embed=episodes.

* Mostrar nombre de episodios y número de temporada.

### Ejercicio 7 – Buscar Repositorios en GitHub 🖥️

* Archivo: searchRepo.js

* URL: https://api.github.com/search/repositories?q={query}&per_page=5.

* Mostrar nombre del repositorio y descripción de los primeros cinco resultados.

## 📝 Actividades – Routers y Postman
### Ejercicio 1 – Crear un Router Básico para Usuarios 🛠️

* Archivo: userRouter.ts

* Crear rutas:

* GET /users → devuelve lista de usuarios.

* GET /users/:id → devuelve usuario por id.

Pistas: usar express.Router() y req.params.id.

### Ejercicio 2 – Dividir Routers por Funcionalidad 📂

* Crear routers separados para usuarios y productos.

* Conectarlos en app.ts usando app.use().

* Servidor escuchando en puerto 3000.

### Ejercicio 3 – Configurar Servidor Express en app.ts ⚡

* Importar y usar los routers creados.

* Configurar servidor para escuchar en puerto 3000.

### Ejercicio 4 – Consulta de Aeropuertos (GET) 🛫

* API: AirportGap

* URL: https://airportgap.com/api/airports

* Método: GET

* Mostrar lista de aeropuertos en consola.

### Ejercicio 5 – Crear un Producto (POST) 🛒

* API: Fake Store

* URL: https://fakestoreapi.com/products

* Método: POST

* Datos:

```{
  "title": "Camiseta de Programador",
  "price": 19.99,
  "description": "Camiseta cómoda para programadores.",
  "category": "Ropa",
  "image": "https://fakestoreapi.com/img/1.jpg"
}
```

### Ejercicio 6 – Actualizar Precio de un Producto (PATCH) 💲

* URL: https://fakestoreapi.com/products/1

* Método: PATCH

* Actualizar solo el precio en formato JSON.

### Ejercicio 7 – Eliminar un Producto (DELETE) 🗑️

* URL: https://fakestoreapi.com/products/1

* Método: DELETE

* Confirmar eliminación en la respuesta.

### Ejercicio 8 – Obtener Información de un Usuario (GET) 👤

* API: JSONPlaceholder

* URL: https://jsonplaceholder.typicode.com/users/1

* Método: GET

* Mostrar información del usuario (nombre, correo, dirección, etc.).

### Ejercicio 9 – Crear un Nuevo Post (POST) 📝

* API: JSONPlaceholder

* URL: https://jsonplaceholder.typicode.com/posts

* Método: POST

* Enviar datos en JSON para crear un nuevo post.

### Ejercicio 10 – Eliminar un Post (DELETE) 🗑️

* API: JSONPlaceholder

* URL: https://jsonplaceholder.typicode.com/posts/1

* Método: DELETE
