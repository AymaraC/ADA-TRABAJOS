/*Solicita al usuario una edad y usa una función flecha para clasificarla en niño, adolescente, adulto o adulto mayor.*/

const promptSync = require ("prompt-sync")();

let usuario = parseInt (promptSync("Ingrese su edad: "));

let edad = (usuario) => {
    if (usuario <= 12){
        return "¡Es un niño!";
    }else if (usuario <= 17){
        return "¡Es un adolescente!";
    }else if (usuario <= 59){
        return "Ya es un adulto.";
    }else{
        return "Ya es adulto mayor.";
        }
    }
        
console.log (edad(usuario))














