function contactController() {
  $('#root').load('./partials/contact.html', function () {
    var firstName = $('#firstName')
    var email = $('#email')
    var comments = $('#comments')
    var submitButton = $('#submitButton')

    firstName.one('blur', validateNotEmptyField)
    comments.one('blur', validateNotEmptyField)
    email.one('blur', validateEmail)


    function validateNotEmptyField(event) {
      var input = $(event.target)
      var valueToValidate = input.val();
      var errorText = ''
      input.next().remove()
      if (valueToValidate.length > 0) {
        input.addClass('is-valid').removeClass('is-invalid')
      } else {
        errorText = 'Campo obligatorio'
        input.addClass('is-invalid').removeClass('is-valid')
        input.parent().append(`<div class='invalid-feedback'>${errorText}</div>`)
      }

      if (event.type === 'blur') {
        input.on('input', validateNotEmptyField)
      }
      allValidationsOk()
    }

    function validateEmail(event) {//condiciones de validacion del email
      var input = $(event.target)
      var valueToValidate = input.val();
      var errorText = ''
      input.next().remove()
      if (valueToValidate.indexOf('.') > -1 && (valueToValidate.indexOf('@') > -1)) {
        input.addClass('is-valid').removeClass('is-invalid')
      } else {
        errorText = 'El correo debe contener un . y una @'
        input.addClass('is-invalid').removeClass('is-valid')
        input.parent().append(`<div class='invalid-feedback'>${errorText}</div>`)
      }

      if (event.type === 'blur') {
        input.on('input', validateEmail)
      }
      allValidationsOk()
    }


    function allValidationsOk() {
      var allOk = $('.is-valid').length === 3
      if (allOk) {
        submitButton.attr('disabled', false)
      } else {
        submitButton.attr('disabled', true)
      }
    }

  })

}
console.log('Se cargo la contacts')






export default contactController