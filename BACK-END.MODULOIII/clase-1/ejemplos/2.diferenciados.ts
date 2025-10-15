//1.'any' (permite almacenar cualquier tipo de datos sin restricción)
let anyValue: any= "Hola, soy un valor de tipo any";    //Inicialmente es un string
console.log(anyValue);
anyValue = 35 //Ahora le estoy asignando un numero
console.log(anyValue);
anyValue = {name : "typescript"} //ahora es objeto
console.log(anyValue);
console.log("\n-----------\n");

// 2. 'unknown': Similar a 'any' pero va a requerir verificacion de tipo
let unknownValue: unknown = 6;
console.log(unknownValue);      

// Hacemos la verificación de tipo
if(typeof unknownValue === "string") {
    console.log(unknownValue.toUpperCase());
} else {
    console.log("El tipo de dato no es string.");
}
console.log("\n-----------\n");

// 3. `void`: se utiliza en funciones que no retornan valor
function logMessage(message: string): void {        //() <- es el dato que va a ingresar : y el dato que me va a ingresar, en este caso es void
    console.log(message);
}

logMessage("Esto es una función void")
console.log("\n-----------\n");

// 4. `never` : Representa funciones que no van a retonar nada, como las que arrojan errores o bucles infinitos
function throwError(ErrMessage: string): never{
    throw new Error(ErrMessage);
}
console.log("\n-----------\n");


// 5. `null` y `undefined`. Representar ausencia de valor
let nullValue: string | null = null; //El valor puede ser de tipo string
console.log(nullValue);
nullValue = "Ahora tiene valor de string"
console.log(nullValue);
console.log("\n-----------\n");

let undefinedValue : undefined = undefined; //Solo puede ser undefined
console.log(undefinedValue);
console.log("\n-----------\n");

// 6. `object`: Representa cualquier valor que no sea primitivo
let objectValue : object = {key: "value"};
console.log(objectValue);

objectValue = [1, 2, 3];
console.log(objectValue);
console.log("\n-----------\n");


// 7. `symbol`: cada simbolo es único, incluso con la misma descripcion
let symbol1 : symbol = Symbol("miSimbolo");
let symbol2 : symbol = Symbol("miSimbolo");
console.log(symbol1 === symbol2); //Retorna falso porque cada simbolo es unico
console.log("\n-----------\n");

//Ejemplo de uso de todos los tipos de datos en un contexto
function processData(valor: any){
    if(typeof valor === "string"){
        console.log("El valor ingresado es una cadena.");
        
    } else if(typeof valor === "number"){
        console.log("El valor ingresado es un numero");
        
    } else if(valor === null || valor === undefined){
        console.log("El valor ingresado es null o undefined.");
        
    } else {
        console.log("El valor ingresado es de otro tipo. ", valor);
        
    }
}

processData("Texto");
processData(123);
processData(null)
processData(undefined);
processData({key: "valor"});