/*Consigna:
Crea una aplicación que permita a los usuarios cifrar y descifrar mensajes usando el módulo crypto. 
Implementa un menú interactivo con readlinesync.
• Usa crypto.createCipheriv y crypto.createDecipheriv para cifrar y descifrar mensajes.
• Usa readline-sync para crear un menú interactivo.
• Guarda los mensajes cifrados en un archivo JSON.*/

const crypto = require('crypto');
const readlineSync = require('readline-sync');
const path= require('path');
const fs = require('fs');

const dataPath = path.join(__dirname, 'mensajesCifrados.json');
const algoritmo = 'AES-256-CBC';
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

let ejecutando = true;
while(ejecutando){
    const options = readlineSync.question(`Ingrese la opcion deseada:
    \n1.Cifrar texto \n2.Descifrar texto \n3.Salir\n`);
    switch(options){
        case '1':
            cifrarMensaje()
            break;
        case '2':
            descifrarTexto()
            break;
        case '3':
            salir()
            ejecutando = false;
            break;
        default:
            'Comando no reconocido.'
    };
};

function cifrarMensaje(){

    const usuario = readlineSync.question('Ingrese la oracion que desee cifrar: ');
    
    //Creamos el cipher y ciframos el mensaje
    const textoCifrado = crypto.createCipheriv(algoritmo, key, iv);
    let cifrado = textoCifrado.update(usuario, 'utf-8', 'hex'); //convierte el texto ingresado en texto cifrado, puede ser binario o en este caso en formato 'hex.
    cifrado += textoCifrado.final('hex'); //El .final completa el cifrado, cierra la operación de cifrado para que el resultado sea consistente.
    console.log(`🔒 Texto cifrado: ${cifrado}`); 

    // Verificamos si el archivo existe, si no, crea un array vacío
    let textoParseado = [];
    if (fs.existsSync(dataPath)) {
        const readFile = fs.readFileSync(dataPath, 'utf-8');
        textoParseado = JSON.parse(readFile);
    }

    textoParseado.push(cifrado);// Agregar el mensaje cifrado al array

    // Guardar de vuelta en el JSON
    fs.writeFileSync(dataPath, JSON.stringify(textoParseado, null, 2));

    console.log('✅ Mensaje guardado correctamente');
};

function descifrarTexto(){
    const readFile = fs.readFileSync(dataPath, 'utf-8');
    const textoParseado = JSON.parse(readFile);

    const usuario = readlineSync.question('Ingrese el texto que quiere descifrar: ');
    
    const textoDescifrado = crypto.createDecipheriv(algoritmo, key, iv);
    let descifrar = textoDescifrado.update(usuario, 'hex', 'utf-8');
    descifrar += textoDescifrado.final('utf-8');
    console.log(`Mensaje descifrado: ${descifrar}`);
    
};

function salir(){
    console.log('¡👋 Hasta luego!');
    process.exit();
};
































