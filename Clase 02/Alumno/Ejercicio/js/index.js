// Ejercicio

var diaDeSemana = prompt('Ingrese dia de la Semana');
var diaMinuscula = diaDeSemana.toLocaleLowerCase();

switch (diaDeSemana) {

  case 'lunes':
  case 'martes':
  case 'miercoles':
  case 'jueves':
  case 'viernes':

    console.log('Es un dia habil');

    break;

  case 'sabado':
  case 'domingo':

    console.log('Es un dia de fin de semana');

    break;

  default:

    console.log('El dia ingresado no es valido');

    break;
}
