# Clase 13 – Patrón MVC con Servidor y Cliente TCP

En esta clase implementamos un sistema basado en el patrón Modelo-Vista-Controlador (MVC) utilizando Node.js, el módulo net para la comunicación cliente-servidor y el módulo readlineSync para obtener la petición del usuario.

El objetivo fue crear programas donde el cliente pueda solicitar información o disponibilidad, el servidor procese la solicitud mediante el MVC, y devuelva una respuesta formateada al cliente.

Se desarrollaron tres ejercicios: gestión de libros, reservas de hoteles y gestión de películas.

## 🚀 Ejercicios

### 1️⃣ Gestión de Libros
* Puerto: 4000
* Solicitud: ID de libro
* Modelo: bookModel.js → busca libro en books.json
* Vista: bookView.js → formatea respuesta
* Controlador: bookController.js → coordina modelo y vista

### 2️⃣ Reservas de Hoteles
Puerto: 4001
* Solicitud: ID de hotel
* Modelo: hotelModel.js → busca hotel en hotels.json
* Vista: hotelView.js → formatea respuesta
* Controlador: hotelController.js → coordina modelo y vista

### 3️⃣ Gestión de Películas 🎬
* Puerto: 4002
* Solicitud: título de película
* Modelo: movieModel.js → busca película en movies.json
* Vista: movieView.js → formatea respuesta
* Controlador: movieController.js → coordina modelo y vista


## 🧠 Conceptos claves

* Patrón MVC en Node.js
* Comunicación TCP con net
* Manejo de archivos JSON como bases de datos simuladas
* Separación de responsabilidades: modelo, vista, controlador, servidor y cliente
* Validación de solicitudes y formateo de respuestas
















