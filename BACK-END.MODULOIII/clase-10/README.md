### Clase 10 – Callbacks, Promesas y Manejo de Asincronía en JavaScript ⚡

En esta clase trabajamos uno de los pilares fundamentales del desarrollo backend moderno: la programación asíncrona.
A través de actividades prácticas, exploramos cómo JavaScript gestiona procesos que tardan tiempo en completarse —como preparar pedidos, enviar correos, hacer consultas externas o ejecutar procesos secuenciales— sin bloquear la ejecución del programa.

Los ejercicios de esta clase se basan en aplicar callbacks, promesas, y métodos avanzados como Promise.all() y Promise.race(), simulando situaciones reales donde múltiples tareas ocurren al mismo tiempo.

## 📝 Actividades
### Ejercicio 1 – Callbacks: Sistema de Pedidos de un Restaurante 🍕

Crear una función prepararPedido(plato, tiempo, callback) que:

* Imprima cuando comienza el pedido.

* Espere el tiempo indicado con setTimeout().

* Ejecute el callback cuando esté listo.

Además:

1. Procesar tres platos (Pizza, Hamburguesa, Ensalada).

2. Ejecutar un callback final solo cuando todos los pedidos hayan terminado:
"¡Todos los pedidos han sido completados!"

Objetivo: practicar callbacks anidados y control de orden.

---------------------

### Ejercicio 2 – Promesas: Simulador de Envío de Correos 📩
Crear la función enviarCorreo(destinatario) que retorne una Promesa:

Se resuelve o rechaza usando Math.random().

* Tarda 2 segundos en completarse.

* Manejar con .then(), .catch() y .finally().

Mensajes:

✔️ Éxito: "Correo enviado a [destinatario]"

❌ Error: "No se pudo enviar el correo a [destinatario]"

🔚 Finally: "Operación finalizada"

* Enviar correos a dos destinatarios distintos.

-------------------------------------

### Ejercicio 3 – Promise.all(): Consultas a Múltiples APIs 🌐
Simular tres consultas con promesas que tardan 2, 3 y 4 segundos.

* Usar Promise.all() para:

* Mostrar los resultados cuando todas las promesas se resuelvan.

* Mostrar un error si alguna falla.

### (Opcional) Identificar qué API falló:
* "No se pudo completar la operación: [API]"

----------------------------------------

### Ejercicio 4 – Promise.race(): Carrera entre Tareas 🏁
Crear tres promesas con tiempos aleatorios.

* Usar Promise.race() para:

* Imprimir qué tarea terminó primero.

* Controlar posibles errores si alguna promesa falla.

----------------------------------------

### Ejercicio 5 – Promesas Anidadas: Registro y Bienvenida 👤📨
Simular un flujo completo:

* Registrar usuario (2 segundos).

* Enviar email de bienvenida (1 segundo).

* Mostrar un mensaje final al terminar todo.

* Si alguna promesa falla, debe imprimirse un mensaje de error.

