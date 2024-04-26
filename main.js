var basetotal =0;
var base = 2500000;
let opciones = prompt(`Que desea comprar:
\n 1. Almojabana con gaseosa : $15.000
\n 2. Subwey con gaseosa : $23.000
\n 3. No comprar nada`);

if(opciones == 1){
    const compra1 = 15000;
    base -= 15000;
    console.log(`Has comprado exitosamente el producto`);
    alert("Te caera mal porque lleva mucho tiempo en el stand");
    console.log(`El valor del producto comprado fue de ${compra1}`);
    console.log(`El presupuesto actual que tenes es: ${base}`);
}

if(opciones == 2){
    const compra2 = 23000;
    base -= 23000
    console.log(`Has comprado exitosamente el producto`);
    alert("Estaras lleno y te ira super en el viaje");
    console.log(`El valor del producto comprado fue de ${compra2}`);
    console.log(`El presupuesto actual que tenes es: ${base}`);
}

if(opciones == 3){
    alert("No has comprado nada :( \nCompra algo en Medellin cuando llegues.");
}


// caso 2

const altoPermitido = 55; // cotas expresadas en cm
const largoPermitido = 40;
const anchoPermitido = 20;

const altoActual = 60;
const largoActual = 40;
const anchoActual = 20;

const factorReduccionAlto = altoPermitido / altoActual;
const factorReduccionLargo = largoPermitido / largoActual;
const factorReduccionAncho = anchoPermitido / anchoActual;

let factoresReduccion = [factorReduccionAlto.toFixed(1),factorReduccionAncho.toFixed(1),factorReduccionLargo.toFixed(1)];

let factorReduccionMenor = Math.min(...factoresReduccion);

const nuevoAlto = altoActual*factorReduccionMenor;
const nuevoLargo = largoActual*factorReduccionMenor;
const nuevoAncho = anchoActual*factorReduccionMenor;

alert(`Tu maleta debe quedar con estas dimensiones:
\n Alto: ${nuevoAlto} cm
\n Largo: ${nuevoLargo} cm 
\n Ancho: ${nuevoAncho} cm`);

// caso 3

let contraseña = "01110010_01101001_01110111_01101001";

let binarios = contraseña.split("_");

let numeros = binarios.map(i => parseInt(i,2));

let palabras = [];

numeros.forEach((i)=>{
    let letras = String.fromCharCode(i);
    palabras.push(letras);
})

let password = palabras.join('');

alert(`Tu contraseña es: ${password}`)


// caso 4

let frase = "Taxi me puede llevar al hotel mariposas amarillas";
let fraseModificada = frase.replace(/[aeiouAEIOUáéíóúÁÉÍÓÚ]/g, "i");

alert(`La frase que tienes que decir es: ${fraseModificada}`)

// caso 5

// 0=piedra 1=papel 2=tijera
const juegoTaxista = Math.floor(Math.random() * 3);
const juegoHildebrando = Number(prompt("ingrese el numero de su seleccion [0=piedra 1=papel 2=tijera]:"));


console.log(`Opciones:
\n 0 = piedra  /  1 = papel /  2 = tijera
\n Hildebrando saco: ${juegoHildebrando}
\n Taxista saco: ${juegoTaxista}`);

if (
    (juegoHildebrando == 1 && juegoTaxista == 0) ||
    (juegoHildebrando == 2 && juegoTaxista == 1) ||
    (juegoHildebrando == 0 && juegoTaxista == 2)
) {
    console.log("Hildebrando gana");
} else if (
    (juegoHildebrando == 0 && juegoTaxista == 1) ||
    (juegoHildebrando == 1 && juegoTaxista == 2) ||
    (juegoHildebrando == 2 && juegoTaxista == 0)
) {
    console.log("Taxista gana");
    base -= 300000;
    console.log("Se ha descontado $300.000 de tu presupuesto");
    console.log(`Tu presupuesto actual es: ${base}`);
} else if (
    juegoHildebrando == juegoTaxista
) {
    console.log("Empate");
}

// caso 6

let countDias = 1;

let vacaciones = true

while(vacaciones && countDias<5){
    let respuesta = prompt(`Hay 4 tipos de versimentas, elije una:
    \n Dia de vacaciones: ${countDias}
    \n 1. amarilla
    \n 2. verde
    \n 3. roja
    \n 4. azul`);

    switch(respuesta){
        case "1":
            countDias += 1;
            let act1 = prompt(`Vamos a la piscina, te queres meter? [si/no]`).toLowerCase();
            if(act1 == "si"){
                alert("Moriste, tus vacaciones terminaron");
                vacaciones = false;
            }
            break;
        case "2":
            countDias += 1
            let act2 = prompt("Quieres ir toda la caminata por las montañas y llevar agua por el camino? [si/no]");
            if(act2 == "si"){
                alert("Fuiste a una hermosa caminata con un hermoso paisaje y una hermosa cascada donde te tomaste fotos");
                break;
            }else{
                alert("Fuiste media caminata y te perdiste, Moriste y tus vacaciones terminaron");
                vacaciones = false;
                break;
            }
        case "3":
            countDias += 1
            let act3 = prompt(`Actividades en la playa:
            \n 1. Jugar voleibol
            \n 2. Nadar en el mar y montar moto
            \n 3. Tomar cócteles mientras descansas`).toLowerCase();
            
            switch (act3) {
                case "1":
                    alert("Juegaste voleibol y la pasaste genial.");
                    break;
                case "2":
                    alert("Nadaste en el mar y montaste moto.");
                    break;
                case "3":
                    alert("Tomaste cócteles mientras descansabas. De pronto sientiste un fuerte dolor de cabeza y empiezaste a perder la visión. Bebiste chirrinchi adulterado, y tienes que devolverte de emergencia. Tus vacaciones terminaron.");
                    vacaciones = false;
                    break;
            }
            break;
        case "4":
            countDias += 1
            let act4 = prompt(`Actividades dentro del hotel:
            \n 1. Jugar bingo
            \n 2. Bailar
            \n 3. Ir al casino y apostar`).toLowerCase();
            
            switch (act4) {
                case "1":
                    alert("Jugaste al bingo, ganaste $500.000 y aumentaste tu dinero del presupuesto.");
                    base += 500000;
                    console.log(`Tu presupuesto actual es: ${base}`);
                    break;
                case "2":
                    alert("Bailaste y la pasasaste muy bien.");
                    break;
                case "3":
                    alert("Fuiste al casino, apostaste y pierdiste todo tu dinero. Solo te queda el pasaje de regreso. Tus vacaciones terminaron.");
                    base -= base
                    console.log(`Tu presupuesto actual es: ${base}`);
                    vacaciones = false;
                    break;
            }
            
    }
}



console.log(`Hildebrando estuvo en Macondo durante ${countDias} días.
\nDinero gastado: $${base}.`);
if (countDias === 4) {
    console.log("Has alcanzado 4 días de vacaciones. ¡Vacaciones terminadas!");
}
if (countDias<4) {
    console.log("Hildebrando murio.");
}

