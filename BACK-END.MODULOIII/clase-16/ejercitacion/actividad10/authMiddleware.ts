// En este ejercicio solo validamos que el cliente cuente con una credencial, no valida si es la correcta.

import {Request, Response, NextFunction} from "express"

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;            // Accedemos al header Authorization

  if (!token) {             // Si NO hay token
    // Cortamos la request y respondemos
    return res.status(403).json({
      message: 'No autorizado'
    });
  }

  // Si hay token
  // No respondemos nada, dejamos que continúe
  next();
};

export default authMiddleware;

