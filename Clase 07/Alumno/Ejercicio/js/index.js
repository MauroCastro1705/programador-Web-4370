// js ejercicio clase 7

//variables

var testList = ['CARLOS', 'GERONIMO', 'NICOLAS', 'LUCAS']

// funcion
function setLocalList(key, lista) {

  // validar si key es un string
  var keyString = typeof key === 'string';
  console.log('Es un String? = ' + keyString);

  // validar si array es un Array
  var trueArray = Array.isArray(lista)
  console.log('Es un array ? = ' + trueArray);

  // stringifiar el array
  var arrayStringy = JSON.stringify(lista);

  // si la operación es existosa returnar true
  if (keyString && trueArray) {//devuelve true si ambos son true
    localStorage.setItem(key, arrayStringy);//se ejecuta al ser todo true
    return console.log('Se guardaron los datos? = ' + true) //retorna si se guardaron lso datos
  }
  return console.log('Se guardaron los datos? = ' + false)
}

// final , comprobacion 

setLocalList('estudiantes', testList) // Guarda la lista en el localStorage en formato JSON

console.log('Datos Guardados = ' + localStorage.getItem('estudiantes')); // muestra los datos guardados.