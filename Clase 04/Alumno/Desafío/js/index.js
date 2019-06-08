// desafio clase 4
var studentsList = [
  {
    firstName: 'Juan',
    lastName: 'Pérez',
    dni: 45678987
  },
  {
    firstName: 'Ana',
    lastName: 'Fernandez',
    dni: 45678989
  },
  {
    firstName: 'Pedro',
    lastName: 'Mármol',
    dni: 45678956
  },
  {
    firstName: 'Pablo',
    lastName: 'Picapiedras',
    dni: 45678983
  }
]

console.log(studentsList.length);

estudiante = prompt('Estudiante a Consultar: ').toLocaleLowerCase();


for (var i = 0; i < studentsList.length; i++) {
  console.log(studentsList[i].dni);
}
// funcion para buscar por nombre.
function busqueda(estudiante, listaDeAlumnos) {
  var nombreLower = nombre.toLowerCase();
  for (var i = 0; i < listaDeAlumnos.length; i++) {
    if (listaDeAlumnos[i].firstName.toLowerCase() === nombreLower) {
      return i;
    }
  }
  return -1;
}

//funcion para buscar por nombre y apellido.
function buscarPorNombreYApellido(nomber, apellido, listaDeAlumnos) {
  var nombreLower = nombre.toLowerCase();
  var apellidoLower = apellido.toLowerCase();

  for (var i = 0; i < listaDeAlumnos.length; i++) {

    if (listaDeAlumnos[i].firstName.toLowerCase() === nombreLower
      && listaDeAlumnos[i].lastName.toLowerCase() === apellidoLower); {

      return i;
    }
  }

  //Hacer funcion para buscar por nombre O apellido

//completar!