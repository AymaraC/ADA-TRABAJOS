// Importamos el módulo Router de Express
import { Router } from 'express';
import UserController from '../controllers/userController';
import { validateAge } from "../middlewares/validate.middleware";

// Instanciamos Router para poder utilizarlo
const router : Router = Router();   // : Router (lo tipamos para decirle que es de tipo Router, el que nos brinca Express) y con = Router(crea la instancia real para que podamos ejecutar funcionalidades)

// RUTAS
console.log("Rutas cargadas: /user/stats");

router.get('/user/stats', (req, res) => {
    console.log("Entré a /user/stats");
    res.json(UserController.getStatistics(req, res));
});
router.get('/user/filter', UserController.filterUser);                 // Filtrar por nombre
router.get('/user/domain', UserController.sameDomain);                // Contar por dominio
router.post('/user/add-multiple', UserController.addMultiplesUsers); // Agregar varios
router.get('/user/order', UserController.userOrder);                // Orden alfabético
router.put('/user/:id', UserController.updateUser);                      // Ruta para actualizar la información del usuario
router.delete('/user/:id', UserController.deleteUser);                  // Eliminar usuario


router.get(
    '/user/age',                // Endpoint al que el cliente va a acceder
    validateAge,                // Middleware (se ejecuta ANTES del controlador)
    UserController.userAgeOrder  // Controlador final que obtiene los datos
);

export default router;      // El default significa que cuando lo importe no necesito las llaves. Exportamos la variable router contienen todos nuestros métodos.

