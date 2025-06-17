/*Escribe un programa que solicite al usuario ingresar una contraseña. Si la contraseña es incorrecta, 
debe volver a pedirla hasta que el usuario ingrese la correcta. La contraseña correcta es "1234". DO WHILE*/

const promptsync = require("prompt-sync")();

let usuario;
   
    do {
        
     usuario = parseInt (promptsync("Ingresa otra contraseña: "));

     } while (usuario !== 1234);
       console.log ("¡Contraseña correcta!")









        