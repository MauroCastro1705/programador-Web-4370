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

function busqueda(estudiante, listaDeAlumnos) {
  var nombreLower = nombre.toLowerCase();
  for (var i = 0; i < listaDeAlumnos.length; i++) {
    if (listaDeAlumnos[i].firstName.toLowerCase() === nombreLower) {
      return i;
    }
  }
  return -1;
}


