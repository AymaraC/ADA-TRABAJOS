# Clase 9 – Encapsulamiento, Temporizadores y Polimorfismo en TypeScript ⏳🧩

En esta clase trabajamos con varios conceptos fundamentales de la Programación Orientada a Objetos (POO) y el manejo de asincronía en TypeScript.
A través de distintas actividades, aplicamos encapsulamiento, herencia, polimorfismo, interfaces, temporizadores (setTimeout / setInterval) y tuplas, resolviendo problemas basados en situaciones reales.

## Actividades
### Ejercicio 1: Actualización de Precios

En una mueblería, se requiere un sistema que permita actualizar los precios de los muebles cada vez que cambien. Cada mueble tiene un nombre, precio e identificador único.

Requerimientos:

* Añadir un nuevo mueble.

* Actualizar el precio de un mueble después de 3 segundos usando setTimeout().

Mostrar el inventario de muebles.

### Ejercicio 2: Envío Programado de Pedidos

Sistema para gestionar envíos de pedidos de flores.
Cada pedido contiene: nombre del cliente, cantidad de flores, tipo de flores.

Requerimientos:

* Añadir un pedido.

* Programar el envío con setTimeout() simulando 5 segundos de retraso.

* Mostrar pedidos pendientes.

### Ejercicio 3: Renovación Automática de Pólizas

Cada póliza tiene: id, nombre del cliente, monto asegurado, fecha de renovación.

Requerimientos:

* Añadir una póliza.

* Programar renovación automática usando setTimeout().

* Mostrar pólizas activas.

### Ejercicio 4: Notificaciones de Amigos

Cada amigo tiene: nombre y estado (online/offline).

Requerimientos:

* Usar setInterval() cada 5 segundos para verificar el estado.

* Enviar una notificación cuando un amigo se conecte.

### Ejercicio 5: Transferencias Programadas

Cada cuenta tiene: propietario, saldo, estado (activo/inactivo).

Requerimientos:

* Añadir una cuenta.

* Realizar una transferencia entre cuentas después de 8 segundos con setTimeout().

* Mostrar todas las cuentas.

### Ejercicio 6: Encapsulamiento en Clases

Crear una clase CuentaBancaria con:

* Atributos privados como saldo.

* Método público para consultar saldo.

* Método público para depositar dinero.

### Ejercicio 7: Uso de Tuplas en una Función Genérica (Ejercicio Entrevista)

Crear una función genérica que:

* Acepte una tupla de dos elementos de cualquier tipo.

* Devuelva una nueva tupla con los elementos invertidos.

### Ejercicio 8: Sistema de Nave Espacial con Gestión de Recursos

Crear una clase NaveEspacial con atributos:

- combustible

- capacidadDeCarga

Requerimientos:

* Método para viajar entre planetas.

* Recolectar recursos (oxígeno, minerales, agua).

* Gestionar combustible.

* Usar tuplas para representar coordenadas espaciales.

* Crear una interfaz para los tipos de recursos.

### Ejercicio 9: Implementación de Pac-Man con Herencia y Polimorfismo

Crear un mini sistema del juego Pac-Man.

Requerimientos:

* Clase base Personaje → usada por PacMan y Fantasma.

* Interfaz EntidadMovible con método moverse().

* Herencia para compartir comportamiento.

* Polimorfismo para que cada personaje tenga su propio movimiento.

### Ejercicio 10: Sistema de Gestión de Inventario en Tienda de Belleza

Crear una clase Producto con: nombre, precio, categoría.

Requerimientos:

* Clase Inventario con métodos para agregar, eliminar, buscar por categoría.

* Polimorfismo para distintos tipos: Cosmetico, TratamientoCapilar, etc.

### Ejercicio 11: Sistema de Reservas en Peluquería con Herencia y Polimorfismo

Crear un sistema de reservas.

Requerimientos:

* Clase base Servicio con: nombre, duración, precio.

* Clases concretas: CorteDeCabello, Manicura, etc.

* Clase Cliente.

* Clase Reserva que asocie cliente + servicio.

* Polimorfismo para reservar cualquier servicio.

* Encapsulamiento para manejar la disponibilidad de horarios.


















