/*Consigna:
Crea una aplicación de notas donde cada nota se guarde en un archivo de texto dentro de una carpeta específica. 
Usa el módulo path para manejar rutas y fs para crear y leer archivos.
• Usa path.join para crear rutas dinámicas a la carpeta de notas.
• Usa fs para crear, leer y eliminar archivos de notas.
• Implementa un menú interactivo con readline-sync.
Archivos.txt*/
const readlineSync = require('readline-sync');
const path = require('path');
const fs = require('fs');

const pathFile = path.join(__dirname, 'notes');

if (!fs.existsSync(pathFile)) {  //Para ver si el archivo existe y sino lo crea.
    fs.mkdirSync(pathFile);
}

function createNote(){
    const titulo = readlineSync.question('Ingrese el titulo: ')
    const contenido = readlineSync.question('Ingrese la descipcion de la nota: ')
    const notePath = path.join(pathFile, `${titulo}`) 
    fs.writeFileSync(notePath, contenido);
    console.log(`✅ Nota ${titulo} fue creada con exito.`);
    
};

function readNote(){
    const files = fs.readdirSync(pathFile);
    if(files.length === 0){
        console.log('No hay notas disponibles.');
    }
    console.log(`Lista de notas:\n`);
    files.forEach(file => {
        const contenido = fs.readFileSync(path.join(pathFile, file), 'utf-8')
        console.log(`-${file}: ${contenido}`);
    });
};

function deleteNote(){
    const question = readlineSync.question('Por favor ingrese el titulo de la nota que quiere eliminar: ')
    const notaPath = path.join(pathFile, `${question}`);

    if (fs.existsSync(notaPath)) {
        fs.unlinkSync(notaPath);        //Elimina el archivo en especifico, no la carpeta.
        console.log(`✅ Nota "${question}" eliminada con éxito.`);

    } else {
        console.log(`❌ No se encontró la nota: "${question}".`);
    }
};

function salir(){
    console.log('¡👋 Hasta luego!');
    process.exit();
};

let ejecutando = true;
while(ejecutando){

    const option = readlineSync.question(
        '\n1.Crear nota\n2.Leer notas\n3.Eliminar nota\n4.Salir: '
    );

    switch(option){
        case '1':
            createNote()
            break;
        case '2':
            readNote()
            break;
        case '3':
            deleteNote()
            break;
        case '4':
            salir()
            ejecutando = false;
            break;
        default: 
            'Comando no reconocido';
  };
};





