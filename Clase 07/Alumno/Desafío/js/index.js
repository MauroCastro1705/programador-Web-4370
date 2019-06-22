// js Desafio clase 7

function getLocalList(key) {// el key es 'AUTOS'
  console.log('esta es la key : ' + key);
  //  validar si key es string, si no lo es return false
  var keyString = typeof key === 'string';
  console.log('Es un String? = ' + keyString);

  // traer item del localStorage para esa key.

  var item1 = localStorage.getItem(key);
  console.log(item1);
  console.log('Este es el item seleccionado = ' + item1);
  if (!item1) { //(no es un paso) si el item no está seteado devuelve null (falsy)  if(!null) 
    console.log('es nulo');
    return 'null'
  }

  // si tengo el item, lo parseo y veo si lo que parsié es un array
  var itemParseado = JSON.parse(item1);
  console.log(item1);
  //  si es un array valido lo retorno
  var trueArray = Array.isArray(itemParseado)
  console.log('Es un array ? = ' + trueArray);
  if (trueArray) {

    return true;
  }

  // si el item no existe (que me retorno null)
  // devuelve array vacio: return []

}

// items

var autos = '["AUDI", "VW", "BMW", "TOYOTA"]';
var motos = "['SUZUKI', 'MAZDA', 'GILERA']";
localStorage.setItem('AUTOS', autos);
localStorage.setItem('MOTOS', motos);

//aplicamos la funcion, pedimos los datos
var pedido = 'AUTOS' //= prompt('Ingrese la key : ');
pedido = pedido.toUpperCase();

getLocalList(pedido);