# Clase 12 - Node.js, TCP y módulo Path 📚💻

En esta clase practicamos la comunicación entre cliente y servidor TCP en Node.js y la manipulación de rutas usando el módulo path. Se resolvieron tres ejercicios prácticos enfocados en validar, normalizar y analizar rutas.

## Contenido de la carpeta

**ejercicios/**: actividades prácticas de la clase 12
* Ejercicio 1: Servidor TCP que valida rutas (absoluta o relativa)
* Ejercicio 2: Servidor TCP que normaliza rutas
* Ejercicio 3: Servidor TCP que obtiene información de la ruta (directorio, archivo y extensión)

## Temas prácticos
### Módulo net
* net.createServer() → para crear el servidor TCP.
* net.createConnection() → para conectar el cliente al servidor.
* socket.write() → enviar mensajes desde el servidor al cliente.
* socket.on('data') → recibir mensajes.

### Módulo path
* path.isAbsolute() → para verificar si una ruta es absoluta o relativa.
* path.normalize() → para limpiar rutas con barras redundantes y puntos (./..).
* path.basename() → obtener el nombre del archivo.
* path.dirname() → obtener el directorio de la ruta.
* path.extname() → obtener la extensión del archivo.

### Módulo readline-sync (cliente)
* question() → para pedir al usuario que ingrese la ruta a procesar.

## Notas generales
Todos los ejercicios usan un flujo Cliente ↔ Servidor:
* El cliente pide la ruta y muestra la respuesta del servidor.
* El servidor procesa la ruta y devuelve la información solicitada.
* Se maneja cierre de conexión y errores de manera básica.

Se recomienda probar rutas absolutas, relativas y con puntos . y .. para validar el funcionamiento completo.

## Tecnologías usadas:
* 🖧 net: comunicación TCP
* 📂 path: manejo de rutas (basename, dirname, extname)
* 🔹 readline-sync: inputs del usuario





















