// JS mini ejercicio clase 9 eventos

window.onload = function () {

  var field = document.getElementById('age')
  var boton = document.getElementById('button')
  boton.onclick = function (e) {
    var value = parseInt(field.value);
    if (isNaN(value)) {// evlaua si el valor entrado es NAN
      field.value = '';
      return// retorna string vacio

    }
    var isOlderThan18
    if (isOlderThan18 = value > 18) {
      console.log('sos mayor de edad')
    } else {
      console.log('sos menor de edad');

    }
  }








}