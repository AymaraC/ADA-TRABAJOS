/*Consigna:
Crea un sistema de autenticación básico donde los usuarios puedan
registrarse e iniciar sesión. Cada usuario debe tener un ID único
generado con UUID y sus datos deben guardarse en un archivo JSON.
Al estar utilizando EMS, no podemos utilizar variables globales (como lo serían "__dirname"), 
por lo que tenemos que "recrearlas". Creando las variables __dirname*/
import fs, { read } from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import {v4 as uuid4} from 'uuid';

const __filename = fileURLToPath(import.meta.url); //devuelve la URL del archivo actual(ruta completa del archivo).
const __dirname = dirname(__filename) //la ruta de la carpeta donde se encuentra el archivo.

const filePath = path.join(__dirname, 'password.json'); //No hacen falta los puntos porque ya __dirname nos brinda la ruta absoluta.

function registrarUsuarios(name, password){
    const ID = uuid4();
    const usuario = {
        id : ID,
        nombre : name,
        contraseña: password,
    }
    let usersArray; //Declarar antes del if para así poder usar la variable por fuera.
    const existFile = fs.existsSync(filePath);

    if(existFile){      

        const readFile = fs.readFileSync(filePath, 'utf-8');
        usersArray = JSON.parse(readFile);

    } else {

        usersArray = []   //Le decimos que si no existe el json que lo cree
    }
    usersArray.push(usuario);
    fs.writeFileSync(filePath, JSON.stringify(usersArray, null, 2));
};

function iniciarSesion(name, password){
    const readFile = fs.readFileSync(filePath, 'utf-8');    //Obtiene el archivo como un texto 
    const usersArray = JSON.parse(readFile); //Tiene que convertirse a JS para poder utilizar push o find.

    const findUser = usersArray.find(u => u.nombre === name); //Utilizamos el fin para ver si el nombre del array coincide con el name que pasamos por parametro(el que nos pasa el usuario).

    if(!findUser){
        console.log('El usuario no se encuentra registrado.');
        
    } else if(findUser.contraseña === password) {
        console.log('✅ Login exitoso');

    } else {
        console.log('❌ Contraseña incorrecta.');
    };
};

registrarUsuarios('Aymi', '1234');
registrarUsuarios('Juan', 'abcd');

iniciarSesion('Aymi', '1234');  
iniciarSesion('Aymi', '0000');  
iniciarSesion('Martin', 'abcd'); 
