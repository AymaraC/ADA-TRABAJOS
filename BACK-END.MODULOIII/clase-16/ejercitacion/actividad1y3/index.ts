import express from 'express';
import path from "path";
import fs from "fs";

interface User {
    id: number,
    name: string
}
// EJERCICIO 1
/*1. Crea un arreglo inicial de usuarios con propiedades id y name: Por ejemplo: { id: 1, name: “Emma”}
2. Implementa dos endpoints: • GET /users: Devuelve la lista de usuarios. • POST /users: Permite agregar un usuario enviando un objeto
con id y name en el body.
3. Si faltan datos, responde con un error adecuado*/

const PORT = 3000;
const app = express();

// Inicializamos el json
app.use(express.json());

// Ruta para leer el json
const filePath = path.join(__dirname, './usuarios.json')

// Función para leer el json
function readDataBase() : User[] {
    if (!fs.existsSync(filePath)) {         // Verificamos que el archivo exista
        return [];
    }
    const data = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(data);
};

// Endpoint para devolver la lista de los usuarios
app.get('/users', (req, res) => {
    const users = readDataBase(); 
    return res.status(200).json(users)
});

app.post('/users', (req, res) => {
    const {id, name} = req.body;
    if(!id || !name) return res.status(400).json({message: 'Falta ingresar el nombre.'})
    const users = readDataBase();
    const newUser = {id, name};
    users.push(newUser);
    fs.writeFileSync(filePath, JSON.stringify(users, null, 2));
    return res.status(201).json({message: 'Usuario agregado correctamente: ', user: newUser})
});

// EJERCICIO 3
/* Implementa dos endpoints adicionales para el CRUD de usuarios:
• PATCH /users/:id: Permite actualizar el name de un usuario.
• DELETE /users/:id: Elimina un usuario por id.*/

app.patch('/users/:id', (req,res) => {
    const id = Number(req.params.id);      // Req.params es un objeto y el id llega como String, lo convertimos a Number para poder compararlo con los ids en la base de datos
    const { name } = req.body;
    if(!name) return res.status(400).json({message: `Falta el dato obligatorio: 'name'`})
    
    if (isNaN(id)) {
        return res.status(400).json({
            message: 'El id debe ser un número válido'
        });
    }
    const users = readDataBase();   // Leemos todos los usuarios con sus id

    const findUser = users.find(user => user.id === id);
    if(!findUser) return res.status(404).json({message: 'El id proporcionado no se encuentra en nuestra base de datos.'});
    findUser.name = name;           // Modificamos el nombre del usuario ingresado.
    fs.writeFileSync(filePath, JSON.stringify(users, null, 2));
    return res.status(200).json({message: 'Usuario actualizado correctamente.', user: findUser })
});

app.delete('/users/:id', (req, res) => {
    const id= Number(req.params.id);

if(isNaN(id)) return res.status(400).json({
    message: 'El id debe ser un número válido.'
});

const users = readDataBase();
const findIndex = users.findIndex(item => item.id === id);
if(findIndex === -1) {
    return res.status(404).json({
        message: 'El id proporcionado no se encuentra en nuestra base de datos.'
    })
} else {
    const userDelete = users[findIndex]         // Guardamos el usuario a eliminar
    users.splice(findIndex, 1);     // Le pasamos el indice inicial y la cantidad a eliminar desde ese índice. En este caso es uno solo porque solo queremos eliminar a ese usuario.
    fs.writeFileSync(filePath, JSON.stringify(users, null, 2))
    return res.status(200).json({
        message: 'Usuario eliminado con éxito', user: userDelete
    })
}

});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`)
});




