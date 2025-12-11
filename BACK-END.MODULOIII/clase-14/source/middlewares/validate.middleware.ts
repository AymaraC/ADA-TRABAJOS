// Se ejecuta antes de llegar al controlador,
import { Request, Response, NextFunction } from "express";

// Middleware para validar las edades recibidas en la query
export function validateAge(req: Request, res: Response, next: NextFunction) {

    // Tomamos los valores de la URL (?minAge=20&maxAge=40)
    const minAge = Number(req.query.minAge);
    const maxAge = Number(req.query.maxAge);

    if (isNaN(minAge) || isNaN(maxAge)) {               // Si alguno no es un número, error
        return res.status(400).json({ 
            message: "Los parámetros minAge y maxAge deben ser números." 
        });
    }

    if (minAge < 0 || maxAge < 0) {                 // Si alguno es menor que 0, error
        return res.status(400).json({
            message: "La edad no puede ser negativa."
        });
    }

    if (minAge > maxAge) {                          // Si minAge es mayor que maxAge, error
        return res.status(400).json({
            message: "minAge no puede ser mayor que maxAge."
        });
    }

    // Si todo está bien, Express avanza al siguiente paso
    // (o sea, pasa al controlador UserController.userAgeOrder)
    next();
}

export default validateAge;



















