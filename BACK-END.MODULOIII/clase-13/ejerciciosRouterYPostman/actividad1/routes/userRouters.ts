/*Ejercicio 1. Crear un router básico para usuarios. Descripción:
1. Crea un router en Express para manejar rutas de productos y usuarios.
2. Crea un archivo userRouter.ts para manejar las rutas de usuarios.
3. En el archivo userRouter.ts, define las rutas:
• Ruta GET /users que devuelva una lista de usuarios.
• Ruta GET /users/:id que devuelva un usuario con el id correspondiente. Pistas:
• Usa express.Router() para crear un router.
• Utiliza req.params.id para acceder al id de la URL en las rutas dinámicas.*/

import { Router } from "express";
const userRouter = Router();

const users = [{id: 1, nombre: 'Claudia'}, {id: 2, nombre: 'Florencia'}, {id: 3, nombre: 'Sol'}, {id: 4, nombre: 'Gonzalo'}];

userRouter.get('/', (req, res) => {
    res.json(users)
});

userRouter.get('/:id', (req,res) => {
    const {id} = req.params
    const encontrarId = users.find(u => u.id === Number(id));

    if(!encontrarId) {
    return res.status(404).json({ error: "Usuario no encontrado" })
    };

    res.json(encontrarId);
    
});

export default userRouter;








