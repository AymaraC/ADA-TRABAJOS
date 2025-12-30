/*Descripción:
1. Configura un servidor para permitir solicitudes solo desde http://localhost:3000.
2. Crea un endpoint GET que devuelva un mensaje simple, accesible solo desde ese dominio. Pistas:
• Usa el paquete cors para configurar las políticas.
• Define el origen permitido en la configuración de CORS.*/

import cors from "cors";
import express from "express";

const PORT = 3000;
const app = express();    // Inicializamos express para poder utilizar los endpoints

const corsOptions = {
    origin: 'http://localhost:3000',
    methods: ['GET']
};

app.use(cors(corsOptions));

app.get('/message', (req, res) => {
    const msg = `Estamos usando CORS`
    return res.status(200).json({
        message: msg
    })
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`)
});










