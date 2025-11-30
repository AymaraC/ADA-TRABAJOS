/*Ejercicio 2: Crear un Endpoint POST para agregar usuarios
Consigna: Ahora vamos a permitir que el cliente agregue nuevos usuarios a la lista. Tu tarea es crear un endpoint POST 
que reciba los datos del usuario desde el cuerpo de la solicitud en formato JSON. Los datos deben incluir name y email.
Si alguno de estos datos falta, el servidor debe responder con un error (código 400).
Recuerda usar express.json() como middleware para procesar los datos del cuerpo de la solicitud.*/

// Importamos el modulo y lo instanciamos
const express = require('express');
const app = express();

// Usamos el middleware para que el servidor pueda leer datos JSON 
app.use(express.json());

const users = [
    {name: 'Ada Lovelace', mail: 'ada@example.com'},
    {name: 'Grace Hopper', mail: 'grace@example.com'}
];

// Definimos el endpoint POST para agregar usuario
app.post('/users', (req, res) => {
    // Desestructuramos el req para obtener name y email
    const {name, email} = req.body;
    
    // Validamos que los datos esten presentes
    if(!name || !email){
        return res.status(400).send('Faltan datos obligatorios.')
    }
    // Agregamos el nuevo usuario si está todo ok
    users.push({name, email});

    // Respondemos con un mensaje de éxito y la lista actualizada de usuarios
    res.status(201).json({message: 'Usuario agregado con éxito.', users});
});

// Inicializamos el servidor
app.listen(3000, () => {
    console.log('Servidor escuchando en http://localhost:3000/users');
});



