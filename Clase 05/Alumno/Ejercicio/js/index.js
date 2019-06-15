// Ejercicio clase 5

function getRandomId() {
  return Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);//la funcion retorna esta operacion para obtener un numerp random
}

console.log(getRandomId()); //anda joya

function Auto(model, brand, year) {//funcion creadora de objetos 'auto'
  this.brand = brand;
  this.year = year;
  this.model = model;
  var id = getRandomId()// asigno el resultado de la funcion a la variable privada id

  this.getId = function () {//podemos acceder a esta funcion desde afuera porque tiene el this.
    return id
  }
}

Auto.prototype.getCarName = function () {//funcion dentre del prototype del Auto.
  console.log('modelo: ' + this.model + ' marca: ' + this.brand + ' año: ' + this.year)
}


var auto1 = new Auto('Suran', 'volkswagen', 2015)
var auto2 = new Auto('audi tt', 'audi', 2017)
var auto3 = new Auto('gran turismo', 'maserati', 2018)

////////////
//var pregunta = prompt('Ingrese auto');

