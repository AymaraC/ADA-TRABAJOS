/*Ejercicio 2: Eliminar al último invitado 
Tienes una lista de invitados a una fiesta ["Ana", "Juan", "Carlos", "Sofía"]. El último invitado no puede asistir. 
Elimina al último invitado y muestra quién fue eliminado y el estado actualizado de la lista. */

let invitados = ["Ana", "Juan", "Carlos", "Sofía"]

console.log("El o la invitada " + invitados.pop() + " no puede asistir por lo que la sacamos de la lista.")

console.log("La lista actualizada es la siguiente " + invitados )