// js ejercicio clase 9
window.onload = function () {

  var firstName = document.getElementById('firstName')
  firstName.onblur = function (event) {
    var value = event.target.value
    if (value.length > 0) {
      event.target.classList.add('is-valid')
      event.target.classList.remove('is-invalid')
    } else {
      event.target.classList.add('is-invalid')
      event.target.classList.remove('is-valid')

    }



  }




}