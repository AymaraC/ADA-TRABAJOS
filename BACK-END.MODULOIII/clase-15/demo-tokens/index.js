// Importamos las dependencias
const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();  // Instanciamos express, lo que utilizamos para una solicitud http
const PORT = 3000;

// Clave secreta
const SECRET_KEY = 'miClaveSuperSecreta';

// Middleware para validar el token
function verifyToken(req, res, next) {
    // Obtener el token del encabezado
    const authHeader = req.headers['authorization']; // Llama al request, en especifico al header y del header al authorization

    // El token llega en este formato -> "Bearer <token>"
     const token = authHeader && authHeader.split(' ')[1]; // Si existe el encabezado, extrae el token
    if(!token) {
        return res.status(401).json({message: 'Token no proporcionado.'});
    }
    
    try {
        // Verificamos el token usando la clave secreta
        const decoded = jwt.verify(token, SECRET_KEY); // Valida y decodifica

        // Si el token es válido, la info decodificada la almacenamos en req.user
        req.user = decoded;

        next(); //Le entregamos el control al siguiente middleware o controlador.
    } catch(error) {
        res.status(403).json({message: 'Token inválido o expirado.'})
    }

};

// Ruta para generar un token
app.get('/login', (req, res) => {
    const user = {      // En un caso real lo verificamos con la base de datos
        id: 123, 
        name: 'Juan',
        email: 'juan@example.com',
        role: 'admin',
    };

    // Creamos el token
    const token = jwt.sign(user, SECRET_KEY, {expiresIn: '1h'});

    // Respuesta al cliente
    res.json({
        message: 'Inicio de sesión exitoso.',
        token: token,
    });
});

// Ruta protegida: solo accesible con un token válido
app.get('/protected', verifyToken, (req,res) => {
    res.json({
        message: 'Acceso a ruta protegida concedido',
        user: req.user
    });
});

// Iniciamos el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en: http://localhost:${PORT}`)
})





















