/*Pide al usuario que ingrese las longitudes de los lados de un triangulo y determina si el mismo es escaleno,
equilátero o isósceles*/

let promptsync = require("prompt-sync")();

let ladoA = parseInt (promptsync( "Ingrese la medida del lado A: "))
let ladoB = parseInt (promptsync ("Ingrese la medida del lado B: "))
let ladoC = parseInt (promptsync ("Ingrese la medida del lado C: "))

    if ((ladoA==ladoB) && (ladoB == ladoC)){
        console.log ("El triángulo es equilátero")
    }else if ((ladoA != ladoB) && (ladoC != ladoA) && (ladoC != ladoB)) {
        console.log ("El triángulo es escaleno")
    }else
      { console.log ("El triángulo es isósceles")

    }
    

