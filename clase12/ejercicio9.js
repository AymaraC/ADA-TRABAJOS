/*Se está realizando el desarrollo de una aplicación para control de gastos. Cada 
día, el usuario ingresa sus gastos cotidianos. 
La idea es solo registrar el total de los gastos, al finalizar la jornada. 
Para simplificar, vamos a considerar que todos los meses tienen cuatro 
semanas. */

let sumaSemana = 0; //acumula los valores de la fila
let semana = 3; //elije que cual fila mirar


let matriz = [          
//lun, mar, mier, jue, vier,sab, dom
[8500, 900, 1000, 70, 2356, 89, 634], //primer semana
[200, 87, 4500, 15, 234, 987, 20],    //segunda semana
[960, 63, 50, 745, 80, 1400, 30],     //tercer semana
[60, 780, 358, 8750, 63, 740, 90],    //cuarta semana
];

    for (let dia=0; dia < matriz[semana].length; dia++){
            sumaSemana += matriz[semana][dia];
        } console.log ("El gasto de la cuarta semana fue de: " + sumaSemana)
    
let sumaDia = 0 //acumula valores de la columna
let dia3 = 2;  //suma los valores de la columna
        
        for (let fila=0; fila < matriz.length; fila ++ ){
            sumaDia+= matriz[fila][dia3];

        } console.log ("Los días miercoles de este mes se gastó un total de: " + sumaDia);

let sumaMes = 0;

        for (i = 0; i < matriz.length; i++){

            for (j = 0; j < matriz[i].length; j++){
                 sumaMes += matriz[i][j]
            }
            
        } console.log ("El gasto total del mes fue de: " + sumaMes);

let dia = 0;
let max = 0;
let diaMax=0;
let semanaMax=0;

        for (i = 0; i < matriz.length; i++){
            for (j = 0; j < matriz[i].length; j++){
               dia = matriz [i][j]
                if (dia > max ){
                    max = dia
                diaMax = j+1
                semanaMax = i+1

                }

                
            }
        } console.log ("El día donde se generó más gasto fue el día " + diaMax + " de la semana " + semanaMax + " con un total de: " + max);

let semanaConMasGastos = 0;
let semanaCostos = 0;   //nos da el valor de una semana
        for (i = 0; i < matriz.length; i++){
            for (j = 0; j < matriz[i].length; j++){
                semanaCostos += matriz [i][j]
                        }
            if (semanaCostos > semanaConMasGastos){
                semanaConMasGastos=semanaCostos
            }
        } console.log ("La semana con más costos fue: " + semanaConMasGastos);

