/*Actividad 4: Tipos de Exportaciones
Crea un archivo llamado constants.ts que contenga:
• Una constante PI con el valor de π.
• Una constante E con el valor de e.
Exporta ambas constantes usando:
• Exportación directa.
• Exportación separada.
Luego, en main.ts, importa ambas constantes y muestra sus valores en la consola.*/

export const PI = Math.PI; //Exportación directa
const E = Math.E;

export {E}; //Exportación separada, sirve para elegir por separado que exportar y que no.













