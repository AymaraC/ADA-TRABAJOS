# Clase 16 - Integración de Conceptos en Node.js 📚
En esta práctica repasamos y combinamos varios conceptos vistos en clases anteriores, trabajando con **rutas, módulos, servidores TCP, persistencia con archivos JSON, patrones de diseño (MVC) y librerías como UUID y Crypto**.  
Cada ejercicio propone un desafío más completo, integrando múltiples herramientas.

## Ejercicios

### 1️⃣ Servidor TCP con Persistencia de Datos
  - Crea un servidor TCP con el módulo `net`.  
  - Recibe mensajes de los clientes y los guarda en un archivo `mensajes.json`.  
  - Implementa el comando especial `/historial` para que los clientes puedan consultar todos los mensajes almacenados.  

---

### 2️⃣ Aplicación de Tareas con Patrón MVC y Persistencia 
  - Implementa una lista de tareas siguiendo el patrón **MVC**.  
  - Permite **consultar, añadir y eliminar tareas** desde la línea de comandos.  
  - Usa `readline-sync` para interactuar con el usuario.  
  - Persiste las tareas en un archivo `tareas.json` usando `fs`.  

---

### 3️⃣ Sistema de Autenticación con UUID y JSON 
  - Permite a los usuarios registrarse e iniciar sesión.  
  - Genera un ID único con `uuid` para cada usuario.  
  - Guarda y lee usuarios en `users.json` con el módulo `fs`.  
  - Implementa funciones para registrar y validar credenciales.  

---

### 4️⃣ Aplicación de Notas con Módulo Path y FS
  - Crea una aplicación para gestionar notas.  
  - Cada nota se guarda como un archivo de texto dentro de una carpeta específica.  
  - Usa `path.join` para manejar rutas dinámicas.  
  - Usa `fs` para crear, leer y eliminar archivos de notas.  
  - Implementa un menú interactivo con `readline-sync`.  

---

### 5️⃣ Aplicación de Cifrado con Módulo Crypto y Readline
  - Permite cifrar y descifrar mensajes usando el módulo `crypto`.  
  - Usa `crypto.createCipheriv` y `crypto.createDecipheriv`.  
  - Implementa un menú interactivo con `readline-sync`.  
  - Guarda los mensajes cifrados en un archivo JSON.  

---

## 🗝️ Conceptos Clave

### Servidores TCP con `net`
* Permite la comunicación entre cliente y servidor mediante sockets.  
* Se pueden implementar comandos personalizados como `/historial`.  

### Patrón MVC
* **Modelo:** gestiona los datos (lectura y escritura en archivos JSON).  
* **Vista:** muestra la información al usuario (consola).  
* **Controlador:** conecta el modelo y vista.  

### UUID
* IDs únicos para identificar usuarios.  
* Útil en sistemas de autenticación o bases de datos.  

### JSON en Node.js
* `JSON.stringify(obj)` → convierte un objeto en string.  
* `JSON.parse(cadena)` → convierte un string JSON en objeto.  
* Persistencia de datos con el módulo `fs`.  

### Módulo Path
* `path.join` → construye rutas dinámicas de forma segura y multiplataforma.  

### Módulo Crypto
* `crypto.createCipheriv` → cifra mensajes.  
* `crypto.createDecipheriv` → descifra mensajes.  
* Uso de claves y vectores de inicialización (IV).  


