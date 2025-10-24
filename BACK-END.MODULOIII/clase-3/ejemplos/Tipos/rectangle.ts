// Utilizaremos la exportacion separada
// Primero definimos las funciones y constantes y las exportamos al final de archivo.
const rectangleArea = (width: number, height: number) : number => {
    return width * height;
};

const RECTANGLE_NAME = 'Rectangle';

//Exportacion separada
export {rectangleArea, RECTANGLE_NAME};

