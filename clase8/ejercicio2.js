// 1. Pida al usuario que ingrese un número.

// 2. Verifique si el número es positivo, negativo o igual a cero.

// 3. Muestre un mensaje indicando cuál es el caso.

const promptsync = require ("prompt-sync")({ sigint: true });;

let numero = parseFloat (promptsync ("Por favor, escriba un número:"));

    if (numero > 0) 
        {console.log(numero + " es positivo ");
    
    } else if (numero < 0) 
        {console.log (numero + " es negativo");

    } else if (numero == 0) 
        {console.log (numero + " es igual a 0");
    
        } else {

          console.log ("el numero ingresado no es correcto");
        }

    

