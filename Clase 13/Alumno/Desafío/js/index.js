$(document).ready(function () {
  console.log('Init App')

  var inputEmail = $('#email');//traemos los IDs
  inputEmail.one('blur', verificarEmail) //agregamos los eventos a los IDs

  var inputNombre = $('#firstName');
  inputNombre.one('blur', verificarCamposVacios);//solo en el evento ONE

  var inputComentario = $('#comments');
  inputComentario.one('blur', verificarCamposVacios);

  var inputBoton = $('#submitButton');

  //funcion para validar campos y agregar mensaje
  function verificarCamposVacios(e) {
    var campo = $(event.target);
    campo.next().remove();
    var valueCampo = campo.val();//llamo el valor del campo
    var error = '';

    if (valueCampo.length > 0) {//validamos si no hay string vacio
      campo.removeClass("is-invalid").addClass("is-valid");// se concatenan removeClass y addClas,s

    } else {
      error = 'Campo Obligatorio'
      campo.removeClass("is-valid").addClass("is-invalid");
      campo.parent().append(`<div class= 'invalid-feedback'>${error}</div>`)//agregamos la clase del error
    }

    if (event.type === 'blur') {
      campo.on('input', verificarCamposVacios)
    }
    validarSiTodoOkey();
  }



  //funcion para validar mail
  function verificarEmail(e) { //done
    var email = $(event.target);
    var value = email.val();
    email.next().remove()
    var error = '';
    if (value.indexOf('.') > -1 && (value.indexOf('@') > -1)) {
      email.removeClass("is-invalid").addClass("is-valid");// se concatenan removeClass y addClass
    } else {
      email.removeClass("is-valid").addClass("is-invalid");
      error = 'El Email no es Valido'
      email.removeClass("is-valid").addClass("is-invalid");
      email.parent().append(`<div class= 'invalid-feedback'>${error}</div>`)//agregamos la clase del error
    }

    if (event.type === 'blur') {
      email.on('input', verificarEmail)
    }
    validarSiTodoOkey();
  }




  //funcion que cambie el color del boton
  //debe andar solo si todos los campos son correctos
  function validarSiTodoOkey() {
    var allOkey = $('.is-valid').length === 3
    if (allOkey) {
      inputBoton.attr('disabled', false);

    } else {
      inputBoton.attr('disabled', true);
    }

  }



})


