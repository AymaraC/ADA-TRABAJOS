import { Request, Response } from "express";
import UserModel from "../model/userModel";

export class UserController {

    // Actualizar usuario
    static updateUser(req: Request, res: Response) {
    const id = Number(req.params.id);        // Recibimos el ID del cliente y lo pasamos a Number porque params devuelve un string
        const newData = req.body;           // Recibimos los datos enviados por los clientes.

        if(!newData.name || !newData.email) {
            return res.status(400).json({ message: "Faltan datos obligatorios" });      // Si falta algún dato obligatorio, lo frenamos. 
        }

        const updatedUser = UserModel.updateUser(id, newData);      // Mandamos al modelo a actualizar

        if(!updatedUser) return res.status(404).json({ message: "Usuario no encontrado" });   // Sino lo encuentra, mandamos el 404 'Not Found'

        return res.status(200).json(updatedUser);
    }

    // Eliminar usuario
    static deleteUser(req: Request, res: Response) {
         const id = Number(req.params.id);

         if (isNaN(id)) {
        return res.status(400).json({ message: 'ID inválido o faltante.' });
    }

        const deleted = UserModel.deleteUser(id);

        if (!deleted) {
        return res.status(404).json({ message: 'Usuario no encontrado' });
    }

        return res.status(200).json(deleted);
    }

    // Filtrar usuario por nombre
    static filterUser(req: Request, res: Response) {
        const name = String(req.query.name);

        if(!name) return res.status(400).json({message: 'Falta ingresar nombre.'});

        const users = UserModel.filterUser(name);
        return res.status(200).json(users);
    }

    // Contar usuarios que tengan el mismo dominio
    static sameDomain(req: Request, res: Response) {
        const domain = String(req.query.domain);

        if(!domain) return res.status(400).json({message: 'No se ingreso el correo electronico.'});

        const count = UserModel.sameDomain(domain); //Llama al método del modelo que se encarga de recorrer todos los usuarios y contar cuántos emails terminan con ese dominio.
        return res.status(200).json(count) //Devuelve el resultado al cliente con código 200. Count es un número, por ejemplo: 3.
    }

    // Agregar multiples usuarios 
    static addMultiplesUsers(req: Request, res: Response) {
        const newUsers = req.body;      // El cliente envía un array de usuarios

        if(!Array.isArray(newUsers)) {
           return res.status(400).json({message: 'El cuerpo debe ser un array de usuarios.'})
        }

        for (let i = 0; i < newUsers.length; i++) {
                const u = newUsers[i];

                if (!u.name || !u.email) {      // Validamos si le faltan algún campo obligatorio (nombre o email)
                    return res
                        .status(400)
                        .json({ message: `El usuario en la posición ${i} es inválido: faltan name o email` });
                }
            }

        const users = UserModel.addMultiplesUsers(newUsers);
        return res.status(200).json(users);
    }

    // Obtener usuarios ordenados alfabeticamente
    static userOrder(req: Request, res: Response) {
    const isDesc = req.query.order === 'desc';      // Primero un if ternario para verificar si la query es descendiente
    const order = isDesc ? 'desc' : 'asc';          

    const users = UserModel.usersOrdered(order);
    return res.status(200).json(users);
}

    // Buscar usuarios por edad mínima y edad máxima
    static userAgeOrder(req: Request, res: Response) {
        const minAge = Number(req.query.minAge);        // Creamos los parametros que después van en la URL, lo que va después de '?'
        const maxAge = Number (req.query.maxAge);

      const age = UserModel.userAgeOrder(minAge, maxAge);

        return res.status(200).json(age);
    }

    // Estadisticas de los usuarios
    static getStatistics(req: Request, res: Response) {     // No utilizamos querys porque en este caso no hay decisión del usuario, el endpoint está definido para devolver esas estadisticas.
            console.log("Entré a getStatistics");

        const stats = UserModel.getStatistics();
        return res.status(200).json(stats);
    }

}

export default UserController;








