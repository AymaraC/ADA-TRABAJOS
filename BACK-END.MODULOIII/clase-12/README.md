# Clase 12 – Endpoints, Parámetros Dinámicos y Manejo de Rutas en ExpressJS

En esta clase trabajamos conceptos fundamentales para construir APIs REST usando Node.js y Express.
Aprendimos cómo funcionan los endpoints, el uso del objeto req y res, cómo capturar parámetros dinámicos con :id, y la importancia de usar express.json() para procesar datos enviados por el cliente.

## 📝 Actividades
### Ejercicio 1 – Endpoint GET: Listado de Usuarios 👥
Crear un servidor Express con un endpoint: GET /users

Este endpoint debe:

* Devolver una lista de usuarios en formato JSON.

* Cada usuario debe tener los campos:
name y email.

* Enviar la respuesta usando res.json().

* Levantar el servidor en el puerto 3000, mostrando un mensaje en la consola al iniciarse.

Objetivo: practicar respuestas JSON y estructura básica de un servidor Express.

----------
### Ejercicio 2 – Endpoint POST: Agregar Usuarios ➕
Crear un endpoint: POST /users

* El servidor debe:

* Recibir un usuario desde el cuerpo de la solicitud con formato JSON.

* Validar que el objeto incluya name y email.

* Si falta alguno de los datos → responder con error 400.

* Usar express.json() como middleware para interpretar el body.

Objetivo: manejar datos enviados por el cliente y validar entradas.

---------
### Ejercicio 3 – Parámetros Dinámicos con :id 🔍
Crear un endpoint: GET /users/:id

* Este ejercicio consiste en:

* Capturar el parámetro dinámico usando req.params.

* Buscar al usuario correspondiente en una lista.

* Si no existe → responder con 404.

Objetivo: utilizar rutas dinámicas para acceder a recursos específicos.

-----------
### Ejercicio 4 – Manejo de Rutas y Errores en Express ⚠️
Configurar el servidor para:

1. Responder con un mensaje de bienvenida al acceder a la ruta raíz /: "¡Bienvenida al servidor de Express!"

2. Devolver un error 404 – Ruta no encontrada para cualquier ruta no definida.

Objetivo: aplicar buenas prácticas en el manejo de rutas y errores del servidor.

