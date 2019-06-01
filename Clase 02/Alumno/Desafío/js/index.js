// Desafio

genero = prompt('Indique su Genero');
edad = prompt('Introduzca su edad');

generoA;
edadA;

edad = parseInt(edad);
genero = genero.toLocaleLowerCase();

///// proceso de genero //////

switch (genero) {
  case 'hombre':
    generoA = 'Sr.'; //hombre
    break;
  case 'mujer':
    generoA = 'Srta.';//mujer

  default:
    generoA = 'Sx.';// otro
    break;
}

///// Proceso de edad ///////

if (edad > 18) {

  edadA = 'usted es mayor de edad puede ingresar';// mayor

} else {

  edadA = 'usted es menor de edad no puede ingresar';// menor
}

///// Respuesta de Consola /////

console.log(generoA + edadA);


//console.log(genero)
//console.log(generoA)
//console.log(edad)
//console.log(edadA)


