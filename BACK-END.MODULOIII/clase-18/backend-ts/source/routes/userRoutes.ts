// Importamos el modulo Router desde express
import { Router } from "express";

// Creamos una instancia de Router
const userRouter : Router = Router();

// Definición de las rutas
// 1. GET   - para obtener todos los usuarios
userRouter.get('/', (req, res) => {
    res.json({
        message: 'Obteniendo todos los usuarios...'
    });
});

// 2. POST
userRouter.post('/',(req, res) => {
    const {name, email} = req.body;     // Extraemos los datos del cuerpo de la solicitud
    res.status(201).json({
        message: 'Usuario creado con éxito.', user:{name, email}
    });
});

// 3. GET - para obtener un usuario por ID
userRouter.get('/:id', (req, res) => {
    const { id } = req.params;    // Extraemos el ID desde el parametro de la URL
    res.json({
        message: `Obteniendo usuario con ID: ${id}...`
    });
});

// 4. PUT - actualizar un usuario por su ID
userRouter.put('/:id', (req,res) => {
    const {id} = req.params;
    const {name, email} = req.body;
    res.json({
        message: `Usuario con ID: ${id} actualizado`, user:{name, email}
    });
});

// 5. DELETE - eliminar un usuario por ID
userRouter.delete('/:id', (req,res) => {
    const {id} = req.params;
    res.json({
        message: `Usuario con ID ${id} eliminado.`
    });
});

export default userRouter;
















