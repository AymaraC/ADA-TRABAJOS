// Definición de una clase Rectangulo
class Rectangle {
    private _width: number;     // Propiedades privada
    private _height: number;    // Propiedad privada

    constructor(width: number, height: number){
        this._width = width;
        this._height = height;
    }

    //Getter par el area del rectangulo
    public get area(): number {
        return this._width * this._height
    }

    // Getter para obtener la altura 
    public get height() : number {
        return this._height
    }

    // Getter para obtener el ancho
    public get widht(): number {
        return this._width;
    }
}

// Hacemos uso de la clase
const rectangulo = new Rectangle(10,5);

// Accedemos a los valores
console.log(`Ancho del rectangulo: ${rectangulo.widht}`);
console.log(`Altura del rectangulo: ${rectangulo.height}`);
console.log(`Area del rectangulo: ${rectangulo.area}`);

//rectangulo.height=20 No se puede asignar a "height" porque es una propiedad de solo lectura.
//rectangulo._width La propiedad '_width' es privada y solo se puede acceder a ella en la clase 'Rectangle'.







