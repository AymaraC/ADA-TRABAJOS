/*Declara una variable global llamada saludoGlobal con el valor "Hola desde el 
scope global". Luego, crea una función llamada mostrarMensaje que declare 
una variable local llamada saludoLocal con el valor "Hola desde el scope 
local" y que imprima ambos mensajes. */

let saludoGlobal = "Hola desde el Scope Global";

function mostrarMensaje() {
    let saludoLocal = "Hola desde el scope local"
        return (saludoLocal)
}
    
   console.log (mostrarMensaje()); 
   console.log (saludoGlobal);





