/*Ejercicio 9: Comparaciones lógicas
Declara dos variables booleanas y realiza una comparación lógica (como AND, OR). Imprime el resultado.*/

let tienePermisoAdmin : boolean = true;
let tienePermisoUser : boolean = false;

let noTienePermisoUser = !tienePermisoUser  //Negamos el permiso
let puedenAcceder = tienePermisoAdmin || tienePermisoUser  //OR, al menos uno de los dos
let puedenAccederAZonaRestringida = tienePermisoAdmin && tienePermisoUser   //Ambas condiciones deben ser true

console.log(noTienePermisoUser ? '❌ No tiene permiso para acceder el user' : '✅ Acceso concedido');
console.log(puedenAccederAZonaRestringida ? '✅ Pueden acceder a la zona restringida' : '❌ No pueden acceder a la zona restringida, ambos deben ser true');
console.log(puedenAcceder ? '✅ Pueden acceder a la zona general' : '❌ No pueden acceder a la zona general');



