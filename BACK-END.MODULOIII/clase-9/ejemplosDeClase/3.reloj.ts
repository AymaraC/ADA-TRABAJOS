// 
function reloj(){
    const ahora = new Date() // Nativa de js, que nos ayuda a obtener fecha y hora actualizada

    // Obtenemos las horas de(0 a 23)
    const horas= ahora.getHours();

    // Obtenemos los minutos de(0 a 59)
    const minutos = ahora.getMinutes();

    // Obtenemos los segundos(0 a 59)
    const segundos = ahora.getSeconds();

    console.log(`${horas}:${minutos}:${segundos}`);
}

let relojIntervalo = setInterval(reloj, 1000);
