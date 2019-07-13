$(document).ready(function () {
  console.log('Init App')

  $(document).keydown(changeCounter)
})




var counter = 0;

function changeCounter(event) {//como maneja un evento esta funcion, tiene que recibir como parametro, EL evento
  console.log(event.which)//nos muestra que tecla se presiono

  // - Enter: 13; Up: 38;  Down: 40

  var key = event.which;

  switch (key) {//para manejar las teclas presionadas
    case 13: //enter
      counter = 0;
      break
    case 38: //up
      counter++;
      break
    case 40://down
      counter -= 1;
      break
  }

  $('#counter').html(counter);
}