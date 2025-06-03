/* Declarar una variable nombre, perdirle al usuario que ingrese un nombre y verificar si los nombres son iguales*/

let promptsync = require("prompt-sync")();

let nombre = "Juana"

let nombredelusuario = (promptsync ("Por favor ingrese un nombre: ")) 

if (nombre === nombredelusuario)  {
    console.log ("¡Nos llamamos igual!")
} 
else { (nombre !== nombredelusuario)
    
    console.log ("No nos llamamos igual");

};




