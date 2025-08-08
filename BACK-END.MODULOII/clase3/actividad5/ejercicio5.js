/*Consigna: Crea un programa que permita registrar contactos con nombre, teléfono y correo electrónico. 
El programa debe permitirte:
1. Agregar un contacto: Registrar un nuevo contacto.
2. Listar los contactos: Mostrar todos los contactos registrados.
3. Eliminar un contacto: Eliminar un contacto de la lista.*/

const fs = require ('fs');
const path = './contactos.json'

function leerArchivo() {
    if (!fs.existsSync(path)) {
        fs.writeFileSync(path, '[]', 'utf-8');
    }

    const contenido = fs.readFileSync(path, 'utf-8');
    return JSON.parse(contenido);           //parse porque nos tiene que traer del JSON a JS
}


function guardarContacto(array) {
    fs.writeFileSync(path, JSON.stringify(array, null, 2), 'utf-8');
}

function resetear() {
  fs.writeFileSync(path, '[]', 'utf-8');
  console.log('Inventario reseteado.');
}

function agregarContacto(nombre, telefono, email){
    const contactos = leerArchivo()
    const existe = contactos.find(contacto => contacto.email === email);

    if (existe) {
        console.log(`❌ Ya existe un usuario con el email "${email}". Por favor, utilice otro correo electronico.`);
        return;
    }

    const nuevoContacto = ({nombre, telefono, email})
    contactos.push(nuevoContacto)
    guardarContacto(contactos)
    console.log(`✔️  El contacto "${nombre}" fue agregado con éxito.`)
}

function listarContactos(){
    const contactos = leerArchivo()
    if(contactos.length === 0){
        console.log("Aún no tenemos usuarios registrados.")
        return
    }
    console.table(contactos)
}

function eliminarContacto(email){
    const contactos = leerArchivo()
    const encontrarContacto = contactos.filter(contacto => contacto.email !== email)
    if(encontrarContacto.length === contactos.length){
        console.log(`No se encontró un contacto con ese correo electrónico.`)
          return;
    }else{

    console.log(`Contacto eliminado con éxito.`)};
}


agregarContacto('María Gutierrez', '11546985', 'maria@example.com')
agregarContacto('Juan Paredes', '11546988', 'juancho@example.com')
agregarContacto('Ambar Perla', '11665685', 'ambar85@example.com')
agregarContacto('Ambar Perla', '11665685', 'ambar85@example.com')
listarContactos()
eliminarContacto('ar85@example.com')