/*Para este ejercicio deberán definir un objeto literal “deportista”, con los 
siguientes atributos: nombre, energía, experiencia. Ademas queremos poder pedirle al deportista que entrene. Para esto, 
nuestro trabajo va a ser realizar una función “entrenarHoras.” 
La función entrenarHoras tiene las siguientes tres características: 
✔ Recibe por parámetro la cantidad de horas. 
✔ Resta a su energía (this.energia) la cantidad de horas x 5. 
✔ Incrementa su experiencia (this.experiencia) la cantidad de horas x 2. 
Una vez definida la función, podemos ejecutar el código y ver cómo va 
variando la energía y experiencia del deportista por consola.*/

const promptSync = require ("prompt-sync")();

let horas = parseFloat (promptSync("¿Cuántas horas entrenaste? "));

let deportista = {
    nombre : "Martin",
    energia : 90,
    experiencia: 0,
    entrenarHoras: function (cantidadDeHoras){
       this.energia -= (cantidadDeHoras * 5)
       this.experiencia = this.experiencia + (cantidadDeHoras * 2)     //El + divide el valor de experiencia de la cantidad de horas
    }

}
deportista.entrenarHoras(horas)
console.log ("La energía de " + (deportista.nombre) + " es de " + (deportista.energia));
console.log ("La experiencia de " + (deportista.nombre) + " es de " + (deportista.experiencia));


















