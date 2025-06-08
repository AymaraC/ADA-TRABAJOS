/*Declara dos variables con valores iniciales y luego intercambia sus valores. Muestra los valores antes y después 
del intercambio en la consola.
Para intercambiar valores puedes usar varios métodos (usando una variable temporal, aritmética o asignación simultanea), 
eres libre de elegir el que desees, eso si, investiga sobre el que usaras.*/

let primerVariable= 100;
let segundaVariable= 50;
console.log ("Antes del intercambio:", primerVariable, segundaVariable);

let temporal= segundaVariable //le da el valor de manera provisional//

segundaVariable=primerVariable  
primerVariable=temporal 
console.log ("Después del intercambio:", primerVariable, segundaVariable);