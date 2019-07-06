//deasfio clase 12

$(document).ready(function () {

  var input = $('#email');
  input.blur(verificarEmail)

});

function verificarEmail(e) {
  var email = $(event.target);
  var value = email.val();
  if (value.indexOf('.') > -1 && (value.indexOf('@') > -1)) {
    email.removeClass("is-invalid").addClass("is-valid");// se concatenan removeClass y addClass
  } else {
    email.removeClass("is-valid").addClass("is-invalid");
  }

}


