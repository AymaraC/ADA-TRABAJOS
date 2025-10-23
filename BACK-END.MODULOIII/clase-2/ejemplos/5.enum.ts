// 1. Definimos un enum númerico
enum colores{
    Rojo,   // 0
    Verde,  // 1 
    Azul,   // 2
}

//Accedemos a los valores del enum
let coloresFavoritos : colores = colores.Verde
console.log(`Color favorito(por número): ${coloresFavoritos}`);
console.log(`Nombre del color favorito: ${colores[0]}`);

//2. Definimos enum con un string
enum Direcciones{
    Norte = 'N',
    Sur = 'S',
    Este ='E',
    Oeste = 'O'
};

//Asignarle el valor del enum a una variable
let direccionViaje: Direcciones = Direcciones.Norte
console.log('Dirección del viaje: ', direccionViaje);
//console.log(Direcciones[1]); -> con string no se puede llamar a la posición
console.log(Direcciones['Sur']);




