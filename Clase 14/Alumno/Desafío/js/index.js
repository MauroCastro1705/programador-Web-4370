$(document).ready(function () {

  var botonEliminar = $('.btn-danger'); //recuperamos el elemento del html
  botonEliminar.click(removeElementWithAnimation);//asosiamos el evento al click


  function removeElementWithAnimation(e) {//funcion de borrado con animacion
    var aBorrar = $(event.target);
    var elemento = aBorrar.parent().next().next();
    console.log(elemento)

    aBorrar.parent().parent().fadeOut(1000, function () {//animacion de fadeOut
      aBorrar.parent().parent().remove();// remueve el elemento del DOM     
    })
  }
})