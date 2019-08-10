// .js del Desafio clase 9
window.onload = function () {

  var mail = document.getElementById('email')
  console.log(mail)

  mail.onblur = function emailValido(event) {
    var value = event.target.value
    var validado;

    if ((value.indexOf('@') <= -1) && (value.indexOf('.') <= -1)) { // si el valor es -1 no esta en el string 
      event.target.classList.add('is-invalid')
      event.target.classList.remove('is-valid')
    } else {
      event.target.classList.add('is-valid')
      event.target.classList.remove('is-invalid')
    }
  }
}