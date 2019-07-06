// mini ejercicio jquery clase 12
$(document).ready(function () {

  //traer texto desde el input
  //onblur reemplazar txt en 

  var input = $('#firstName');
  input.blur(replaceAllElements)


});

function replaceAllElements(e) {
  $('.list-group-item').html(e.target.value);// Jquery reduce mucho el codigo que usamos
}
