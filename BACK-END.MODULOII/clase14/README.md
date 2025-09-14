# Clase 14 - Node.js, Módulo Crypto y Ordenación de Datos 🔐📊

En esta clase practicamos el uso del módulo crypto para cifrar, descifrar y generar hashes de información, junto con la implementación del método sort() para ordenar datos.

## Contenido de la carpeta

**ejercicios/**: actividades prácticas de la clase 14
* Ejercicio 1: Generar un hash SHA-256 a partir de un texto ingresado por el usuario.
* Ejercicio 2: Ordenar una lista de números ingresada por el usuario.
* Ejercicio 3: Cifrado y descifrado básico de un texto usando AES-256-CBC.
* Ejercicio 4: Hash de una contraseña combinada con un "sal" para mayor seguridad.

## Temas prácticos
### Módulo crypto
* crypto.createHash() → para generar hashes como SHA-256.
* crypto.createCipheriv() → para cifrar datos con un algoritmo (ej: AES-256-CBC).
* crypto.createDecipheriv() → para descifrar datos previamente cifrados.
* Uso de claves, IV (vector de inicialización) y salts para mayor seguridad.

### Método sort()
* array.sort() → ordenar listas de números o cadenas de texto.
* Comparadores personalizados para asegurar el orden numérico correcto.

### Módulo readline-sync
question() → obtener inputs de texto del usuario.
questionInt() → obtener inputs numéricos.

## Notas generales
Los scripts trabajan con entradas del usuario, que luego son procesadas en el servidor.
Se recomienda probar: Hashes con diferentes textos y contraseñas. Listas de números y cadenas para comprobar la ordenación. Cifrado y descifrado con distintos textos para verificar la integridad.

## Tecnologías usadas
🔐 crypto → generación de hashes, cifrado y descifrado.
📊 sort → ordenación de datos.
⌨️ readline-sync → interacción con el usuario.