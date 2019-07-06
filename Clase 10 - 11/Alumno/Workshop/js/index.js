// js para el workshop
window.onload = function () {

  ////  variables  ///

  var firstName = document.getElementById('firstName');
  var lastName = document.getElementById('lastName');
  var dni = document.getElementById('dni');
  var email = document.getElementById('email');
  var addStudentButton = document.getElementById('addStudentButton')
  ////// eventos //////

  firstName.onblur = validateNotEmpty;
  lastName.onblur = validateNotEmpty;
  email.onblur = validateEmail;
  dni.onblur = validateDni;

  ///// initialized //////
  addStudentButton.disabled = true

  ///// funciones /////



  function validateNotEmpty(event) { //validamos mediante colores los campos
    var inputNode = event.target;
    var value = inputNode.value;
    if (stringIsNotEmpty) {
      inputNode.classList.add('is-valid')//modificamos la clase del CSS 
      inputNode.classList.remove('is-invalid')
    } else {
      inputNode.classList.add('is-invalid')
      inputNode.classList.remove('is-valid')
    }
  }

  function stringIsNotEmpty(string) { //funcion de validacion de evento
    if (string.length > 0) {
      return true
    }
    return false
  }

  function validateEmail(event) { //validamos el email
    var value = event.target.value
    var inputNode = event.target
    if ((value.indexOf('.') > -1) && (value.indexOf('@') > -1)) {
      event.target.classList.add('is-valid')
      event.target.classList.remove('is-invalid')
    } else {
      event.target.classList.add('is-invalid')
      event.target.classList.remove('is-valid')
    }
  }

  function validateDni(event) {// validacion del dni, faltan cosas
    var inputNode = event.target;
    var value = inputNode.value;
    var dni = parseInt(value);
    if ((isNaN(dni) || dni <= 100000)) {
      event.target.classList.add('is-invalid')
      event.target.classList.remove('is-valid')
      inputNode.value = ''
    } else {
      event.target.classList.add('is-valid')
      event.target.classList.remove('is-invalid')
    }
  }







}