// Desafio clase 4
let nombre = prompt('Hola, ingresa tu nombre por favor: ');

while (nombre == "") {
    alert ('No ingresaste ningun nombre')

    nombre = prompt('Ingresa tu nombre porfavor')
}

pregunta = prompt('De que pais sos?');

alert('Hola ' + nombre + ' de ' + pregunta + ' bienvenido a mi pagina para sacar promedios');

// Ciclo while para que menores de 18 no entren a la pagina
alert('Por cuestiones de seguridad no podemos dejar que menores de 18 entren a la pagina');

let repetir = Number(prompt('Cuantos años tenes?'));

while (repetir < 18 ) {
    alert ('Sos menor, no puedo dejar que ingreses a mi pagina');
}

alert ('Ahora si empecemos')

// Pide numeros para mandarlos a la funcion y sacar promedios
A = parseInt(prompt('Ingresa el primer numero:'));
B = parseInt(prompt('Ingresa el segundo numero:'));

function promedio() {
    resultado = (A + B) / 2;
    return resultado;
}

function mostrar(mensaje) {
    alert('El promedio de esos dos numeros es: ' + mensaje);
}

promedio();
mostrar(resultado);

// Ciclo while por si lo quiere hacer de nuevo
pregunta = prompt('Quieres hacerlo de nuevo?').toLowerCase();

while (pregunta == 'si') {
    A = parseInt(prompt('Ingresa el primer numero:'));
    B = parseInt(prompt('Ingresa el segundo numero:'));

    promedio();
    mostrar(resultado);

    pregunta = prompt('Quieres hacerlo de nuevo?').toLowerCase();
}

alert('Espero que te haya gustado, antes de terminar quisiera preguntarte...');

const preguntas = ['Te gusto la pagina?', 'Hay algo que deberiamos mejorar?'];

prompt(preguntas[0]);

prompt(preguntas[1]);

//agradecimiento
alert ('Y ademas quisiera darle credito a todo el equipo que esta detras de esta pagina, ellos son...');

class persona{
    constructor (nombre, apellido) {
       this.nombre = nombre;
       this.apellido = apellido;
    }
    mostrar() {
        alert (this.nombre + this.apellido);
    }
}

let persona1 = new persona ('Valentin', ' Marta');

let persona2 = new persona ('Valentin', ' Nicolas Marta');

let persona3 = new persona ('Valentin', ' Marta Boggio')

persona1.mostrar()

persona2.mostrar()

persona3.mostrar()