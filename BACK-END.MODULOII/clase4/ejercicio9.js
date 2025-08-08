/*Consigna:
Supongamos que cada meta tiene un estado: “completa” o “pendiente”. Filtra las metas que ya completaste y muéstralas
en la consola.
Pista: Modifica las metas para que sean objetos con un atributo estado. Usa el método filter para obtener las completas.*/

const fs = require('fs')

function agregarMeta(nombre, estado) {
  const listaMetas = JSON.parse(fs.readFileSync('metas.json', 'utf-8'));
  const nuevaMeta = { nombre, estado };
  listaMetas.push(nuevaMeta);
  fs.writeFileSync('metas.json', JSON.stringify(listaMetas, null, 2), 'utf-8');
  console.log(`✔️ Meta "${nombre}" agregada con estado "${estado}".`);
}

agregarMeta("Aprender JavaScript", "pendiente");

fs.readFile('metas.json','utf-8',(err,data)=>{
    if(err){
        console.error("El archivo no se puede leer.", err)
    } else {
        let metas = JSON.parse(data)

        let filtrarMetas = metas.filter(meta => meta.estado === "completada")
            console.log(`Metas completas: `)
            console.table(filtrarMetas)
            
    }
})














