//Ejemplos de tipos de datos primitivos en TS

//1 string: cadenas de texto
let nombre : string = "Ada Lovelace";
let saludo: string = `Hola, ${nombre}, bienvenida a TypeScript!`;
console.log(saludo);
console.log("\------------\n");

// .number(numeros enteros, decimales o notacion cientifica)
let numEntero : number = 42;
let numDecimal : number = 3.14;
let numCientifico: number =1e5; //Cientifica equivale a 100000
console.log("Entero: ",numEntero);
console.log("Decimal: ",numDecimal);
console.log("Cientifico: ",numCientifico);
console.log("\------------\n");

//3. boolean (valores logicos: true or false)
let esEstudiante: boolean = true;
let tieneLicencia : boolean = false;
console.log("¿Es estudiante?: ", esEstudiante);
console.log("¿Tiene licencia?: ",tieneLicencia);
console.log("\------------\n");

//4. null (Ausencia intencional de un valor)
let valorNulo: null = null;
console.log("Valor nulo: ", valorNulo);
console.log("\------------\n");

//5. undefined(valor no incializado)
let valorIndefinido : undefined;
console.log("Valor indefinido: ", valorIndefinido);
console.log("\------------\n");

//6. symbol (simbolos unicos)
let id1 : symbol = Symbol('id');
let id2 : symbol = Symbol('id');
console.log("¿Son simbolos únicos?: ", id1 === id2);
console.log("\------------\n");

