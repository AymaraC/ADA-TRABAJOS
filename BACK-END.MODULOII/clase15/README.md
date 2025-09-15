# Clase 15 - Biblioteca UUID y repaso JSON en Node.js 📚

En esta práctica trabajamos con la biblioteca uuid y repasamos conceptos de JSON y sus métodos. Para poder utilizar la biblioteca UUID es necesario instalarla usando npm install uuid.

## 🚀 Ejercicios

### 1️⃣ Servidor TCP con UUID v4
* Puerto: 4000
* Servidor (server.js): genera un UUID v4 con uuid.v4() y lo envía al cliente.
* Cliente (client.js): se conecta al servidor, recibe el UUID y lo muestra en consola.

### 2️⃣ Servidor TCP con UUID v5 y JSON
* Puerto: 5000
* Servidor (server.js): genera un UUID v5 a partir de un nombre y un namespace, lo envía dentro de un objeto JSON.
* Cliente (client.js): se conecta al servidor, recibe el objeto JSON, lo convierte a objeto con JSON.parse() y muestra el UUID en consola.

### 3️⃣ Servidor TCP con UUID v1 y JSON
* Puerto: 8080
* Servidor (server.js): genera un UUID v1 (basado en tiempo y MAC) y lo envía dentro de un objeto JSON.
* Cliente (client.js): se conecta al servidor, recibe el objeto JSON, lo parsea y muestra el UUID en consola.

### 4️⃣ Ejercitación de JSON
* Ejercicio 1: Crear y Mostrar un Objeto JSON
* Archivo: exercise1.js
* Crear un objeto JSON con campos como nombre, edad y email.
* Convertirlo a string con JSON.stringify() y mostrarlo en consola.

* Ejercicio 2: Leer y Modificar un Archivo JSON
* Archivos: data.json, exercise2.js
* Leer data.json, modificar el campo age, y guardar los cambios en el mismo archivo.

* Ejercicio 3: Convertir Cadena JSON a Objeto
* Archivo: exercise3.js
* Definir una cadena JSON con datos de un libro (title, author, year).
* Convertirla a objeto con JSON.parse() y mostrar sus propiedades en consola.

## Conceptos claves 
### Generación de UUIDs con la librería uuid:
* v1: basado en tiempo y dirección MAC
* v4: aleatorio
* v5: basado en nombre y namespace

### JSON en Node.js:
* JSON.stringify(obj) → convertir objeto a string
* JSON.parse(cadena) → convertir JSON a objeto
* Lectura y escritura de archivos JSON con fs

* Comunicación TCP con net → cliente y servidor
* Formateo de respuestas en texto o JSON








