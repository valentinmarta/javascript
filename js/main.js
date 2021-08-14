//interaccion con html para crear h1

$('#titulos').append('<h1>MI PAGINA</h1>');

//interaccion agregando h3 al titulo del formulario

$('#form').append('<h3>Por favor complete los siguientes datos: </h3>');

//guardando los nombres de los creadores
class persona{
    constructor (nombre, apellido) {
       this.nombre = nombre;
       this.apellido = apellido;
    }
}

let creador1 = new persona ('Valentin', ' Marta');

let creador2 = new persona ('Valentin', ' Nicolas Marta');

let creador3 = new persona ('Valentin', ' Marta Boggio')

const creadores = [creador1, creador2, creador3]

localStorage.setItem('creadores', JSON.stringify(creadores))