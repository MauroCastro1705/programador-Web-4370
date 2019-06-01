// Desafio

var genero = prompt('Indique su Genero');
var edad = prompt('Introduzca su edad');

var generoA;
var edadA;

edad = parseInt(edad);
genero = genero.toLocaleLowerCase();

///// proceso de genero //////

switch (genero) {
  case 'hombre':
    var generoA = 'Sr.'; //hombre
    break;
  case 'mujer':
    var generoA = 'Srta.';//mujer

  default:
    var generoA = 'Sx.';// otro
    break;
}

///// Proceso de edad ///////

if (edad > 18) {

  var edadA = 'usted es mayor de edad puede ingresar';// mayor

} else {

  var edadA = 'usted es menor de edad no puede ingresar';// menor
}

///// Respuesta de Consola /////

console.log(generoA + edadA);


//console.log(genero)
//console.log(generoA)
//console.log(edad)
//console.log(edadA)


