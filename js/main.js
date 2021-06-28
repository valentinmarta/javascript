// desafio clase 1
let nombre = prompt('Hola, ingresa tu nombre por favor: ');

if (nombre == "") {
    alert('No ingresaste ningun nombre');
}
else {
    alert('hola ' + nombre + ' te quiero ayudar con algunas restas y divisiones');
}

let numero1 = Number(prompt('ingresa un numero:'));

let numero2 = Number(prompt('ingresa otro numero:'));

let resta = numero1 - numero2;

let division = numero1 / numero2;

alert('El resultado de la resta es: ' + resta);

alert('El resultado de la division es: ' + division);

let pregunta = prompt('Una ultima pregunta, sos de Boca o de River?');

if (pregunta == 'boca' || pregunta == 'Boca') {
    alert('me caes bien aguante bokita el mas grande');
}
else if (pregunta == 'river' || pregunta == 'River') {
    alert('no man como vas a ser de riBer AGUANTE BOKITA');
}
else {
    alert('Respuesta no valida');
}