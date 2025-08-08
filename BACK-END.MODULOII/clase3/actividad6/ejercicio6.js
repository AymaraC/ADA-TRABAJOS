/*Consigna: Crea un programa que te permita gestionar un diario personal. El programa debe permitirte:
1. Agregar una entrada al diario: Registrar una nueva entrada con la fecha y el texto.
2. Listar las entradas: Mostrar todas las entradas registradas.
3. Eliminar una entrada: Eliminar una entrada específica por su ID.*/

const fs = require ('fs');
const path = './diario.json'

function leerArchivo() {
    if (!fs.existsSync(path)) {
        fs.writeFileSync(path, '[]', 'utf-8');
    }

    const contenido = fs.readFileSync(path, 'utf-8');
    return JSON.parse(contenido);           

}


function guardarDiario(array) {
    fs.writeFileSync(path, JSON.stringify(array, null, 2), 'utf-8');

}

function resetear() {
  fs.writeFileSync(path, '[]', 'utf-8');
  console.log('Inventario reseteado.');

}

let nuevaEntrada = (fecha, contenido) => {
    const diario = leerArchivo();
    const entrada = { 
        id: diario.length + 1, 
        fecha, 
        texto: contenido }; 
    diario.push(entrada); //primero va el array y despues se guarda
    guardarDiario(diario);
    console.log(`¡Bienvenido de nuevo! Hoy es ${fecha}.`);
};

function listarEntradas() {
    const diario = leerArchivo();
    if (diario.length === 0) {
        console.log("No hay entradas en el diario todavía.");
        return;
    }
    console.log("📖 Entradas en el diario:");
    console.table(diario);
}

function eliminarEntrada(id) {
    const diario = leerArchivo();
    const nuevaLista = diario.filter(entrada => entrada.id !== id);

    if (nuevaLista.length === diario.length) {
        console.log(`❌ No se encontró una entrada con ID ${id}`);
        return;
    }

    guardarDiario(nuevaLista);
    console.log(`Entrada con ID ${id} eliminada correctamente.`);
}

nuevaEntrada('06/08/2025', 'Hoy terminé un ejercicio de Node.');
nuevaEntrada('07/08/2025', 'Tuve un día largo pero cumplí con todo.');

listarEntradas();

eliminarEntrada(1);









