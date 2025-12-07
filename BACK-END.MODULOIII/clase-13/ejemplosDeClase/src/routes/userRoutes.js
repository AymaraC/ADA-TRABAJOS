// Importamos el modulo router
import { Router } from "express";
const userRouter = Router();

// Definir las rutas básicas de lo que seria el recurso 'usuarios'

// GET '/' -> obtener todos los usuarios
userRouter.get('/', (req,res) =>{
    res.json({message: 'Obteniendo todos los usuarios'});
});

// POST '/' -> Le pedimos al usuario el nombre y un email
userRouter.post('/', (req, res) => {
    const {name, email} = req.body // Desesctruturamos
    res.status(201).json({message: 'Usuario creado con éxito. ', user: {name, email}})
});

// GET '/:id' -> parametro dinamico. Para obtener un usuario por ID
userRouter.get('/:id', (req,res) => {
    const {id} = req.params //Para extraer el parametro que viene de la URL
    res.json({message: `Usuario obtenido con ID: ${id}`})
})

// PUT '/:id' -> para actualizar usuario por ID
userRouter.put('/:id', (req, res) => {  //Como endpoint le pasamos el parametro dinamico
    const { id } = req.params;  
    const {name, email} = req.body // para extraer lo que el usuario ingresa
    res.json({message: `Usuario con ID ${id} actualizado con éxito,`, user: {
        name,email
    }})
});

// DELETE '/:id' -> para eliminar un usuario
userRouter.delete('/:id', (req,res) => {
    const {id} = req.params;
    res.json({message: `Usuario con ID ${id} eliminado con éxito.`})
});


export default userRouter;
