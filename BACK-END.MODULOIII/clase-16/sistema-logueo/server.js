// Importaciones
const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const fs = require('fs');

// Inicializamos express
const app = express();
// Middleware para que la app entienda
app.use(express.json());

// Definimos el puerto
const PORT = 3000;

// Ruta al archivo que simula la base de datos
const databasePath = './database.json';

// Cargar las variables de entorno
require('dotenv').config();
const SECRET_KEY = process.env.SECRET_KEY || 'sofi';

// Ruta base para confirmar que el servidor funciona
app.get('/',(req,res) => {
    res.send('Bienvenida al sistema de logueo.');
});

// Ruta para registrar nuevos usuarios
app.post('/register', (async(req,res) => {
    const {email, password} = req.body; // Desesctructuramos los datos que ingresan en el cuerpo de la solicitud
    // Condicional para verificar que los datos no estén vacíos
    if(!email || !password) {
        return res.status(400).json({error: 'El usuario no ingreso los campos requeridos.'})
    }

    // Leer la BD para verificar que el usuario existe
    const database = JSON.parse(fs.readFileSync(databasePath));
    const userExists = database.find((user) => user.email === email);
    if(userExists) {
        return res.status(400).json({ error: 'El usuario ya está registrado.'});
    }

    // Hashing de la contraseña
    const hashPassword = await bcrypt.hash(password, 10); // El 10 es el coste del algoritmo (el salting). De forma asincrona por el await.

    // Creamos el nuevo usuario después de las validaciones
    const newUser = { 
        id : Date.now(),
        email,
        password: hashPassword
    };

    // Guardamos
    database.push(newUser);
    fs.writeFileSync(databasePath, JSON.stringify(database, null, 2));

    // Enviar una respuesta al cliente
    res.status(201).json({ message: 'Usuario registrado con éxito.'});

})); // VER LA LLAVE

app.post('/login', async(req, res) => {
    const {email, password} = req.body; // Se extrae del cuerpo de la solicitud

    // Condicional para verificar que los campos no esten vacíos. Para al API del tp final esto lo podemos hacer en una funcion para no tener que copiar todo el tiempo
    if(!email || !password) {
        return res.status(400).json({error: 'El usuario no ingreso los campos requeridos.'})
    }

    // Leemos la base de datos
    const database = JSON.parse(fs.readFileSync(databasePath));
    const user = database.find((user) => user.email === email);
    if(!user) {
        return res.status(400).json({error: 'Usuario no registrado.'})
    }

    // Comparamos la contraseña ingresada y hasheada
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if(!isPasswordValid) return res.status(401).json({ error: 'Contraseña incorrecta.'});

    // Generamos un jsonwebtoken
    const token = jwt.sign({ id: user.id, email: user.email} , SECRET_KEY, {
        expiresIn: '1h',
    });

    res.json({message: 'Inicio de sesión exitoso', token});

});

// Middleware para verificar el token
function autenticacionToken(req,res,next) {
    const authHeader = req.headers['authorization']; 
    const token = authHeader&& authHeader.split(' ')[1]; // Agarro el header entero y le hacemos un split para dividir la parte que dice vir de todo el token y como queda en un array le pasamos el 1 porque ahí se encuentra el token

    // Condicional para verificar que el token existe
    if(!token) {
        return res.status(401).json({error: 'Token no proporcionado.'});
    }

    jwt.verify(token,SECRET_KEY,(err, user) => {
        if(err) {
            return res.status(403).json({error: 'Token invalido.'});
        }

        req.user = user // Guardamos los datos en el usuario
        next();
    });
}

// Ruta protegida
app.get('/profile', autenticacionToken, (req, res) => {
    res.json({message: `Bienvenida ${req.user.email}`, user: req.user});
});

// Iniciamos el servidor
app.listen(PORT,() => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`)
});

