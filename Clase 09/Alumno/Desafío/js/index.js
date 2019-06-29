// .js del Desafio clase 9
window.onload = function () {

  var mail = document.getElementById('email')
  console.log(mail)

  mail.onblur = function emailValido(event) {
    var value = event.target.value
    var validado;

    if ((value.indexOf('@') <= -1) && (value.indexOf('.') <= -1)) { // si el valor es -1 no esta en el string
      validado = false // no estan en el string
    } else {
      validado = true //estan en el string
    }

    if (validado) {
      event.target.classList.add('is-valid')
      event.target.classList.remove('is-invalid')
    } else {
      event.target.classList.add('is-invalid')
      event.target.classList.remove('is-valid')

    }
  }
}