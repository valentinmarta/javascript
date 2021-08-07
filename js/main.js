let nombre = prompt('Hola, ingresa tu nombre por favor: ');

while (nombre == "") {
    alert ('No ingresaste ningun nombre')

    nombre = prompt('Ingresa tu nombre porfavor')
}

pregunta = prompt('De que pais sos?');

alert('Hola ' + nombre + ' de ' + pregunta + ' bienvenido a mi pagina para sacar promedios');

// Ciclo while para que menores de 18 no entren a la pagina
alert('Por cuestiones de seguridad no podemos dejar que menores de 18 entren a la pagina');

let repetir = parseInt(prompt('Cuantos años tenes?'));

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

//interaccion con html que no me deja crear h1
let titulo = document.createElement("div");

titulo.innerHTML = "<h1>MI PAGINA</h1>"

document.body.appendChild(titulo)

//interaccion agregando h2 al titulo del formulario
let padre = document.getElementById(form);

let h2 = document.createElement("h2");

h2.innerHTML = "<h2>Por favor complete los siguientes datos: </h2>"

padre.appendChild(h2);

//guardando los nombres de los creadores
class persona{
    constructor (nombre, apellido) {
       this.nombre = nombre;
       this.apellido = apellido;
    }
    mostrar() {
        alert (this.nombre + this.apellido);
    }
}

let creador1 = new persona ('Valentin', ' Marta');

let creador2 = new persona ('Valentin', ' Nicolas Marta');

let creador3 = new persona ('Valentin', ' Marta Boggio')

const creadores = [creador1, creador2, creador3]

localStorage.setItem('creadores', JSON.stringify(creadores))