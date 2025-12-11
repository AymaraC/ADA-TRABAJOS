import { Request, Response, NextFunction } from "express";

// Middleware DE ERROR, necesita SIEMPRE 4 parámetros
export function errorHandler(
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
) {
    console.log("🔍 Error capturado por el middleware:", err.message);

    res.status(500).json({
        ok: false,
        mensaje: "Ocurrió un error en el servidor",
        detalle: err.message
    });
}

export default errorHandler;





