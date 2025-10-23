// 1.Función básica
function sumar(a: number, b:number): number{
    return a + b;
}
let resultadoSuma = sumar(3, 4);
console.log(resultadoSuma);
console.log('\n -------------\n');

// 2.Función que no retorna nada(void)
function mostrarMensaje(mensaje: string) : void {
    console.log(mensaje);
    
}
mostrarMensaje('Hola')
console.log('\n -------------\n');

// 3. Funciones con parametro opcional
function saludar(nombre: string, saludo?: string): string {
    if(saludo){
        return `${saludo}, ${nombre}`
    } else {
        return `Hola, ${nombre}`
    }
}
console.log(saludar('Aymara'));
console.log(saludar('María','Hola'));

console.log('\n -------------\n');

function saludar2(nombre:string, saludo:string = 'Hola'): string {
    return `${saludo}, ${nombre}`
}
console.log(saludar2('Angela'));
console.log(saludar2('Pilar', 'Buenas tardes'));







